import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { ProfileBtn } from '../button/button';
import './profile.scss';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import PrifileMenuList from './profileList.json';
import { Button } from 'react-bootstrap';

interface ProfileMenuProps {
    isSigned?: boolean;
    profileImg?: string;
    userType?: string | null;
}

export const ProfileMenu = (props?: ProfileMenuProps) => {

    const navigate = useNavigate();
    const profileImgUrl = props?.profileImg;
    const isSigned = props?.isSigned;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const userType = props?.userType;

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onMenuItemClick = (value: string) => {
        if (value === 'list_popup') {
            createSwalButton()
        }
        else if (value === 'logout_user') {
            logout('/home')
        }
        else {
            navigate(value);
        }
    }

    const logout = (pagePath: string) => {
        sessionStorage.setItem('isLoggedIn', 'false');
        navigate(pagePath);
    }

    useEffect(() => {
        window.addEventListener('popstate', (e) => {
            window.history.go(0);
        });
    }, []);

    const createSwalButton = async () => {
        let swalButton1 = await swal({
            title: "List Space",
            buttons: {
                buttonOne: {
                    text: "Existing Company",
                    value: "ec",
                    visible: true,
                    className: "sf-btn",
                },
                buttonTwo: {
                    text: "New Company",
                    value: "nc",
                    visible: true,
                    className: "sf-btn",
                }
            }
        }).then(function (value) {
            if (value == "ec") { window.location.href = "/warehouse/add"; }
            else if (value == "nc") { window.location.href = "/business/add"; }
            else { window.location.href = ""; }

        });
    }
    const showProfileMenuList = () => {
        let menulist;
        if (userType === 'SL') {
            menulist = PrifileMenuList.SL;
        } else if (userType === 'CL') {
            menulist = PrifileMenuList.CL;
        } else if (userType === 'CU') {
            menulist = PrifileMenuList.CU;
        } else {
            menulist = [];
        }
        return (
            menulist.map((item, index) => {
                const keyId = `p_item_${index}`;
                return (
                    <MenuItem key={keyId}>
                        <ListItemText>
                            <span onClick={() => { onMenuItemClick(item.url) }}>{item.label}</span>
                        </ListItemText>
                    </MenuItem>
                )
            })
        )
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
                {showProfileMenuList()}
            </Menu>
        );
    }

    return (
        <>
            <div className='sf-flex profile-menu-container'>
                <Button className='btn primary-btn sf-btn' onClick={() => window.location.href = '/business/add'}>StoreFlex Your Space</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <IconButton size="large" edge="start" color="inherit" aria-label="profile" onClick={handleClick} >
                    <ProfileBtn showProfileImg={isSigned} profileImg={profileImgUrl} />
                </IconButton>
                {profileMenuList()}
            </div>
        </>
    )
}