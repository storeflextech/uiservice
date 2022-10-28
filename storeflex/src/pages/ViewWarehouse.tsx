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
import Footer from '../components/miscellaneous/footer'

const ViewWarehouse = () => {
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
                                        Warehouses
                                        <button  className="primary-btn-outline" style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-plus menu-icon'></i> Add New</button>
                                    </div>
                                </div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Store Name</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Pincode</th>
                                            <th>Phone</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Store Flex Service and Company: Noida</td>
                                            <td>UP</td>
                                            <td>Noida</td>
                                            <td>211003</td>
                                            <td>9998887766</td>
                                            <td>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Store Flex Service and Company: Guwahati</td>
                                            <td>ASM</td>
                                            <td>Guwahati</td>
                                            <td>781003</td>
                                            <td>78956498765</td>
                                            <td>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Store Flex Service and Company: Kolkata</td>
                                            <td>KOL</td>
                                            <td>Kolkata</td>
                                            <td>881005</td>
                                            <td>68956498765</td>
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

export default ViewWarehouse;
