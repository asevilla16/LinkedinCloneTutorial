
import React from 'react';
import './HeaderOptions.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

const HeaderOptions = ({avatar, Icon, title, onClick}) => {
    
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="header-options">
            {Icon && <Icon className="header-option-icon" />}
            {avatar && 
                <Avatar className="header-option-icon">
                    {user?.email[0].toUpperCase()}
                </Avatar>
            }
            <h3 className="header-option-title">{title}</h3>
        </div>
    );
}

export default HeaderOptions
