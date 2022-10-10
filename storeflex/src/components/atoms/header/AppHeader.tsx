import React  from 'react';
import { Container, AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {ProfileBtn} from '../button/button';
import './AppHeader.scss';

export const PageHeader = () => {

    return(
        <header className='app-header'>
            <h1> Page Header</h1>
        </header>
    );
}

export const AppMenuBar = () => {
    return (
        <AppBar position="static" color='primary'>
            <Container maxWidth="xl">
            <Toolbar disableGutters>
            <div className='logoicon'>
                <ProfileBtn />
            </div> 
            </Toolbar>
            </Container>
        </AppBar>
    )
}

export const ProfileMenu = () => {
    const profileImgUrl ="../../../static/images/AVT_1.png";
    return(
        <>
        <div className='sf-flex profile-menu-container'>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            >
            <MenuIcon />
            </IconButton>
            <div>
            <ProfileBtn showProfileImg={true} profileImg={profileImgUrl} />
            </div>
        </div>
        </>
    )
}