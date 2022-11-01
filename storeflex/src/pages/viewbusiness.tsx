import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Dashboards from '../components/panels/dashboards/dashboards';
import DashboardChart from '../components/panels/chart/dashboardChart';
import Table from 'react-bootstrap/Table';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import AddStore from './addstore';
import Footer from '../components/footer/footer';

const ViewBusiness = () => {
  const navigate = useNavigate();
  const goToNextPage = (pagePath: string) => {
    navigate(pagePath);
  }
    return (
        <AppContainer>
            <TopNavbar />
            <SplitPaneContainer
                left={<SideNavBar />}
                right={
                    <div className='c-box-shadow-blue'>
                        <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                            <div>
                                <div className='primary-gradient'>
                                    <div className='font-white p-sm f-18px f-bold'>
                                        Businesses
                                        <button  className="primary-btn-outline" style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-plus menu-icon'></i> Add New</button>
                                    </div>
                                </div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Company ID</th>
                                            <th>Company Name</th>
                                            <th>Primary Contact</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>CO-01</td>
                                            <td>Relience Digital Co.</td>
                                            <td>9876543210</td>
                                            <td>Guwahati</td>
                                            <td>9876895876</td>
                                            <td>info@reliance.com</td>
                                            <td>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-eye menu-icon'></i> View</button>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-cup menu-icon'></i> Delete</button> &nbsp; &nbsp;

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>CO-02</td>
                                            <td>Apple Car Ltd.</td>
                                            <td>1234565448</td>
                                            <td>Sixmile</td>
                                            <td>99898989909</td>
                                            <td>info@apple.com</td>
                                            <td>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-eye menu-icon'></i> View</button>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-cup menu-icon'></i> Delete</button> &nbsp; &nbsp;

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>CO-03</td>
                                            <td>Storeflex Ltd.</td>
                                            <td>9998887776</td>
                                            <td>Kolkata</td>
                                            <td>909090909090</td>
                                            <td>info@storeflex.co</td>
                                            <td>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-eye menu-icon'></i> View</button>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-cup menu-icon'></i> Delete</button> &nbsp; &nbsp;

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

export default ViewBusiness;
