import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Dashboards from '../components/panels/dashboards/dashboards';
import DashboardChart from '../components/panels/chart/dashboardChart';
import Table from 'react-bootstrap/Table';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import Footer from '../components/footer/footer';

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
                                        Bookings
                                        <button  className="primary-btn-outline" style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-plus menu-icon'></i> Add New</button>
                                    </div>
                                </div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Address</th>
                                            <th>Size</th>
                                            <th>Cost</th>
                                            <th>Invoice</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1270001</td>
                                            <td>12-10-2022</td>
                                            <td>12-11-2022</td>
                                            <td>UP, Noida</td>
                                            <td></td>
                                            <td>$90 million usd</td>
                                            <td><a href = '/downloadInvoice'> Download </a></td>
                                            <td>Active</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>1270002</td>
                                            <td>10-10-2022</td>
                                            <td>10-12-2022</td>
                                            <td>UP, Noida</td>
                                            <td></td>
                                            <td>$1100 million usd</td>
                                            <td><a href = '/downloadInvoice'> Download </a></td>
                                            <td>Active</td>
                                           
                                        </tr>
                                        <tr>
                                            <td>1270003</td>
                                            <td>19-06-2022</td>
                                            <td>19-07-2022</td>
                                            <td>UP, Noida</td>
                                            <td></td>
                                            <td>$64 million usd</td>
                                            <td><a href = '/downloadInvoice'> Download </a></td>
                                            <td>Complete</td>
                                            
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
