import { Avatar } from "@material-ui/core";
import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./Sidebar.css";

const Sidebar = () => {

    const user = useSelector(selectUser);

    const recentItem = (topic) => {
        return <div className="sidebar-recent-item">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    }

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img alt="" src="https://marketplace.canva.com/EAEe-eS2kDs/1/0/800w/canva-turquoise-and-purple-gradient-business-animated-zoom-virtual-background-ScoPRdGhJQI.jpg" />
                <Avatar src={user.photoUrl} className="sidebar-avatar">
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who viewed you</p>
                    <p className="sidebar-stat-number">
                        2,448
                    </p>
                </div>
                <div className="sidebar-stat">
                <p>Views on post</p>
                    <p className="sidebar-stat-number">
                        2,543
                    </p>
                </div>
            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem('reactJS')}
                {recentItem('PHP')}
                {recentItem('softwareEngineering')}
                {recentItem('desing')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
