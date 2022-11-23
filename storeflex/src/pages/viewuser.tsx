import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import TopNavBar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import Footer from '../components/footer/footer';
import { getUserType } from '../utils/CommonUtils';

const ViewUser = () => {
  const navigate = useNavigate();
  const goToNextPage = (pagePath: string) => {
    navigate(pagePath);
  }
    return (
        <AppContainer>
            <TopNavBar />
            <SplitPaneContainer
                left={<SideNavBar userType={getUserType()}/>}
                right={
                    <div className='c-box-shadow-blue'>
                        <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                            <div>
                                <div className='primary-gradient'>
                                    <div className='font-white p-sm f-18px f-bold'>
                                        Active Users
                                        <button  className="primary-btn-outline" onClick={() => { goToNextPage('/addinfo')}} style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}} ><i className='mdi mdi-plus menu-icon'></i> Add New</button>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
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
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
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
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
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
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
                                            </td>
                                        </tr>
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

