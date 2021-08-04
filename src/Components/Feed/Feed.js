import React, { useState, useEffect } from 'react';
import './Feed.css';
import InputOption from './InputOption/InputOption';
import Post from './Post/Post';
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { db } from '../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from "react-flip-move";

const Feed = () => {
    const user = useSelector(selectUser);

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => {
                    const post = {
                        id: doc.id,
                        data: doc.data()
                    }
                    return post;
                }))
            })
    }, [])

    const sendPost = (event) => {
        event.preventDefault();

        const post = {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };

        db.collection("posts")
            .add(post);


        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-input-options">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            <FlipMove>
                {posts.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            name={post.data.name}
                            description={post.data.description}
                            message={post.data.message}
                            photoUrl={post.data.photoUrl}
                        />
                    );
                })}
            </FlipMove>
        </div>
    );
}

export default Feed;
