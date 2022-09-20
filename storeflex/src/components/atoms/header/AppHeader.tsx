import React  from 'react';
import { Container, AppBar, Toolbar } from '@mui/material';
import ProfileBtn from '../button/profilebtn';

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