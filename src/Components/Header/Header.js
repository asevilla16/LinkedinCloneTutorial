import React from 'react'
import "./Header.css";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';

const Header = () => {

    const dispatch = useDispatch();
    
    const logOut = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header-left">
                <img 
                    src="https://img-premium.flaticon.com/png/512/174/174857.png?token=exp=1623209019~hmac=10b1cd6963e589b3df37e713244f35f1" 
                    alt=""
                />

                <div className="header-search">
                    <SearchRoundedIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header-right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions 
                    avatar={true}
                    title="Me"
                    onClick={logOut}
                />
            </div>

        </div>
    )
}

export default Header
