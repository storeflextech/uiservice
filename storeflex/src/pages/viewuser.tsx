import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import TopNavBar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import Footer from '../components/footer/footer';
import { getUserType } from '../utils/CommonUtils';
import { viewUserProps } from '../api/ApiConfig';
import Api from '../api/Api';
import DeleteUser from './deleteuser';
import { isTypeNode } from 'typescript';
import { DeletsButton, EditButton } from '../components/buttons/buttons';
import swal from 'sweetalert';
import GetCompany from '../components/atoms/company/GetCompany';
import { LoaderFull } from '../components/atoms/loader/loader';

let recordLabel = '';

const ViewUser = () => {
    const userView = window.location.hash;
    const [currentView, setCurrentView] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const api = new Api();
    const navigate = useNavigate();
    const [myUser, setmyUser] = useState<Array<any>>([]);
    var page: any = '0';
    var size: any = '3';
    useEffect(() => {
        getViewUser(page, size);
    }, [])

    useEffect(() => {
        if (userView !== currentView)
            getViewUser(page, size);
        setCurrentView(userView);
    }, [userView]);

    const getViewUser = (page, size) => {
        //IN-Progress, In-Active, Active
        let userStatus = 'ACTIVE'
        if (userView === '#active') {
            userStatus = 'IN-ACTIVE';
            recordLabel = 'Active Users'
        } else if (userView === '#pending') {
            userStatus = 'IN-PROGRESS';
            recordLabel = 'Pending Users'
        } else {
            userStatus = '#inactive';
            recordLabel = 'Inactive Users'
        }
        setIsLoader(true);

        const data: viewUserProps = { page: page, size: size, status: userStatus };
        api.getViewUser(data).then((response) => {
            setIsLoader(false);
            setmyUser(response.methodReturnValue);
        }).catch((error) => {
            setIsLoader(false);
            console.log('getUsers', error);
        });
    };

    // const goToEditPage = (pagePath: any, record: object) => {
    //     navigate(pagePath, {
    //         state: { editRecord: record },
    //     });
    // }

    const goToNextPage = (pagePath: string) => {
        navigate(pagePath);
    }

    const editUser = (user: any) => {
        console.log(user);
        const pagePath = '/editCompanyUser'
        navigate(pagePath,
            {
                state: { editRecord: user },
            }
        );
    }

    const deleteUser = (user: any) => {
        swal({
            title: "Are you sure?",
            text: 'You are about to delete the' + user.firstName + ' Once deleted, you will not be able to recover this user!',
            icon: "warning",
            buttons: [true, true],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal('Success! User has been deleted!', {
                        icon: "success",
                        buttons: {
                            buttonOne: {
                                text: "OK",
                                visible: true,
                                className: "sf-btn",
                            }
                        }
                    });
                    let extractedArr = myUser.filter((item, index) => {
                        return item.clientId !== user.clientId;
                    });
                    setmyUser(extractedArr);
                } else {
                    // do something if required   
                }
            });
    }

    const showUserList = () => {
        return (
            <AppContainer>
                <TopNavBar />
                <SplitPaneContainer
                    left={<SideNavBar userType={getUserType()} />}
                    right={
                        <div className='c-box-shadow-blue'>
                            <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                                <div>
                                    <div className='primary-gradient'>
                                        <div className='font-white p-sm f-18px f-bold'>
                                            {recordLabel}
                                            <button className="primary-btn-outline" onClick={() => { goToNextPage('/addinfo') }} style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }} ><i className='mdi mdi-plus menu-icon'></i> Add New</button>
                                        </div>
                                    </div>
                                    <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                        <Grid item xs={2.83}>
                                            <div className='p-top-md'>
                                                {<GetCompany />}
                                            </div>
                                        </Grid>
                                    </Grid>&nbsp;
                                    <Table striped bordered hover responsive='md'>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Address</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th style={{ textAlign: 'center' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {myUser && myUser.map((item: any) => {
                                                return (
                                                    <tr>
                                                        <td>1</td>
                                                        <td>{item.firstName} {item.lastName}</td>
                                                        <td>{item.address}</td>
                                                        <td>{item.mobileNo}</td>
                                                        <td>{item.email}</td>
                                                        <td className='align-c'>
                                                            <DeletsButton onBtnClick={() => { deleteUser(item) }} />
                                                            &nbsp;&nbsp;
                                                            <EditButton onBtnClick={() => { editUser(item) }} />
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </Box>
                        </div>
                    }
                />
                <Footer />
            </AppContainer>
        )
    }
    return (
        <>
            {isLoader && <LoaderFull />}
            <div className='c-box-shadow-blue'>
                {showUserList()}
            </div>
        </>
    )
}

export default ViewUser;
// function handelOnClick(path: any) {
//     throw new Error('Function not implemented.');
// }