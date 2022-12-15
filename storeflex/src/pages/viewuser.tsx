import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
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

const ViewUser = () => {
    const api = new Api();
    const navigate = useNavigate();
    const [myUser, setmyUser] = useState<Array<any>>([]);
    var page: any = '0';
    var size: any = '3';
    useEffect(() => {
        getViewUser(page, size);
    }, [])

    const getViewUser = (page, size) => {
        const data: viewUserProps = { page: page, size: size };
        api.getViewUser(data).then((response) => {
            console.log("Response=", response);
            if (response.status == 200) {
                setmyUser(response.data.methodReturnValue)
            }
        });
    }

    const goToEditPage = (pagePath: any, record: object) => {
        navigate(pagePath, {
            state: { editRecord: record },
        });
    }
    
    const goToNextPage = (pagePath: string) => {
        navigate(pagePath);
    }

    const editUser = (user: any) => {
        const pagePath = '/edit'
        navigate(pagePath,
            {
                state: { editRecord: user },
            }
        );
    }

    const deleteUser = (user: any) => {

        console.log(' @@@ ', user);
        swal({
            title: "Are you sure?",
            text: 'You are about to delete the user. Once deleted, you will not be able to recover this user!',
            icon: "warning",
            buttons: [true, true],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal('Success! User has been deleted!', {
                        icon: "success",
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
                                        Active Users
                                        <button className="primary-btn-outline" onClick={() => { goToNextPage('/addinfo') }} style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }} ><i className='mdi mdi-plus menu-icon'></i> Add New</button>
                                    </div>
                                </div>
                                <Table striped bordered hover responsive='md'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Company</th>
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
                                                    <td>{item.userId}</td>
                                                    <td>{item.firstName} {item.middleName} {item.lastName}</td>
                                                    <td>{item.company}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.mobileNo}</td>
                                                    <td>{item.email}</td>
                                                    <td className='align-c'>
                                                        <DeletsButton onBtnClick={() => {deleteUser(item)}}/>
                                                        <EditButton onBtnClick={() => {editUser(item)}}/>
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

export default ViewUser;
// function handelOnClick(path: any) {
//     throw new Error('Function not implemented.');
// }