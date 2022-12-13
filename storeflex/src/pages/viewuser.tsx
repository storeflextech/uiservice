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
                                            <th>First Name</th>
                                            <th>Middle Name</th>
                                            <th>Last Name</th>
                                            <th>Photo Name</th>
                                            <th>Mobile</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>House No</th>
                                            <th>Country</th>
                                            <th>City</th>
                                            <th>Country</th>
                                            <th style={{ textAlign: 'center' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myUser && myUser.map((item: any) => {
                                            return (
                                                <tr>
                                                    <td>{item.userId}</td>
                                                    <td>{item.firstName}</td>
                                                    <td>{item.middleName}</td>
                                                    <td>{item.lastName}</td>
                                                    <td>{item.photoName}</td>
                                                    <td>{item.mobileNo}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.houseNo}</td>
                                                    <td>{item.pincode}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.country}</td>
                                                    <td>
                                                        <button onClick={() => DeleteUser()} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding: '8px 12px 8px 12px' }}><strong><i className='mdi mdi-cup menu-icon'></i> Delete</strong></button>&nbsp; &nbsp;
                                                        <button onClick={() => goToEditPage('/edit', item)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding: '8px 12px 8px 12px', marginRight: '5px' }}><strong><i className='mdi mdi-pencil menu-icon'></i> Edit</strong></button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        {/* <tr>
                                            <td>1</td>
                                            <td><div className="nav-profile-image">
                                                <img src="/images/face1.jpg" alt="profile" />
                                                <input className="d-none" type="file" />&nbsp;
                                                Mrityunjoy Deka
                                            </div></td>
                                            <td>Storeflex</td>
                                            <td>UP, Noida</td>
                                            <td>9998887777</td>
                                            <td>mrityunjoy@storeflex.co</td>
                                            <td>
                                                <button className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><div className="nav-profile-image">
                                                <img src="/images/face1.jpg" alt="profile" />
                                                <input className="d-none" type="file" /> &nbsp;
                                                Subham
                                            </div></td>
                                            <td>Reliance Digital</td>
                                            <td>Assam, Guwahati</td>
                                            <td>78956476589</td>
                                            <td>info@reliance.co</td>
                                            <td>
                                                <button className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><div className="nav-profile-image">
                                                <img src="/images/face1.jpg " alt="profile" />
                                                <input className="d-none" type="file" /> &nbsp;
                                                Imon Gogoi
                                            </div></td>
                                            <td>Hajmola India Ltd.</td>
                                            <td>WB, Kolkata</td>
                                            <td>9888978976</td>
                                            <td>imon@hajmola.in</td>
                                            <td>
                                                <button className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
                                            </td>
                                        </tr> */}
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