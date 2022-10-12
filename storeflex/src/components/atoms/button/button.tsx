import React from 'react';
import { Avatar } from '@mui/material';
import './buttonStyle.css';

export interface ButtonProp {
    buttonColor?: string;
}

export interface ProfileBtnProp {
    showProfileImg?: boolean;
    profileImg?: string;
}
export const Button = (props: ButtonProp) => {
    return(
        <div> button </div>
    )
}

export const ProfileBtn = (props?: ProfileBtnProp) => {
    if(props?.showProfileImg && props?.profileImg) {
        return(
            <Avatar
                alt="Remy Sharp"
                src={props?.profileImg}
            />
        )
    } else {
        return (
            <Avatar src="/broken-image.jpg" />
        )
    }
    
}
