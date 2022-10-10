import React  from 'react';
import { Container, AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

import {ProfileBtn} from '../button/button';
import './menu.scss';

interface ProfileMenuProps {
    isSigned?: boolean;
    profileImg?: string;
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

export const ProfileMenu = (props?: ProfileMenuProps) => {
    const profileImgUrl = props?.profileImg;
    const isSigned = props?.isSigned;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const signOutList = () => {
        return(
            <>
                <MenuItem>
                <ListItemText>Sign Up</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Login</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>List Space</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Search Space</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Help</ListItemText>
                </MenuItem>
            </>
        )
    }
    const signInList = () => {
        return(
            <>
                <MenuItem>
                <ListItemText>Messages</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Bookings</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Wishlists</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>List Space</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Search Space</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Edit Profile</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>Help</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Log out</ListItemText>
                </MenuItem>
            </>
        )
    }

    const showList = () => {
        if(isSigned) {
            return(<>{signInList()}</>);
        } else {
            return(<>{signOutList()}</>);
        }
    }
    const profileMenuList = () => {
        return (
            <Menu
            anchorEl={anchorEl}
            id="profile-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                },
                '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
        {showList()}
        </Menu>
        );
    }

    return(
        <>
        <div className='sf-flex profile-menu-container'>
            <IconButton size="large" edge="start" color="inherit" aria-label="profile"  onClick={handleClick} >
                <MenuIcon />
            </IconButton> 
            {profileMenuList()}
            <div>
                <ProfileBtn showProfileImg={isSigned} profileImg={profileImgUrl} />
            </div>
        </div>
        </>
    )
}