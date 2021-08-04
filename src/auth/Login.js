import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import './Login.css';

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePicture, setProfilePicture] = useState("")

    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                let user = {
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoUrl
                };
                dispatch(login(user));
            })
            .catch(err => alert(err));
        
    };


    const register = () => {
        if(!name) {
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((res) => {
                res.user.updateProfile({
                    displayName: name,
                    photoURL: profilePicture
                })
                .then(() => {
                    dispatch(login({
                        email: res.user.email,
                        uid: res.user.uid,
                        displayName: name,
                        photoURL: profilePicture
                    }))
                })
            })
            .catch((error) => alert(error));
    };

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
        
            <form>
                <input 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name (required if registering)"
                    type="text" 
                />

                <input 
                    value={profilePicture}
                    onChange={e => setProfilePicture(e.target.value)}
                    placeholder="Profile picture URL (optional)"
                    type="text" 
                />

                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Email"
                    type="email" 
                />
                
                <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password" 
                />

                <button onClick={loginToApp}>Sign in</button>
            </form>

            <p>Not a member? <span className="login-register" onClick={register}>Register Now</span>
            </p>
        


        </div>
    )
}

export default Login;
