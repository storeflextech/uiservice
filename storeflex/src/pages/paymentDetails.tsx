import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import Footer from '../components/footer/footer';
import { getUserType } from '../utils/CommonUtils';

const ViewWarehouse = () => {
  const navigate = useNavigate();
  const goToNextPage = (pagePath: string) => {
    navigate(pagePath);
  }
    return (
        <AppContainer>
            <TopNavbar />
            <SplitPaneContainer
                left={<SideNavBar userType={getUserType()}/>}
                right={
                    <div className='c-box-shadow-blue'>
                        <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                            <div>
                                <div className='primary-gradient'>
                                    <div className='font-white p-sm f-18px f-bold'>
                                        Payment Details
                                        <button  className="primary-btn-outline" style={{fontSize:'14px',float:'right',borderRadius:20,paddingLeft:'12px',paddingRight:'12px'}}><i className='mdi mdi-plus menu-icon'></i> Add New</button>
                                    </div>
                                </div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Address(Warehouse)</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>MM/YY</th>
                                            <th>Amount</th>
                                            <th>Tax</th>
                                            <th>Invoice</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1270001</td>
                                            <td>UP, Noida</td>
                                            <td>12-10-2022</td>
                                            <td>12-11-2022</td>
                                            <td>11/22</td>
                                            <td>$90 million usd</td>
                                            <td>$9 usd</td>
                                            <td><a href = '/downloadInvoice'> Download </a></td>
                                            <td>Active</td>
                                            
                                        </tr>
                                        <tr>
                                            <td>1270002</td>
                                            <td>Goa</td>
                                            <td>10-10-2022</td>
                                            <td>10-12-2022</td>
                                            <td>10/22</td>
                                            <td>$1100 million usd</td>
                                            <td>$50.2 usd</td>
                                            <td><a href = '/downloadInvoice'> Download </a></td>
                                            <td>Active</td>
                                           
                                        </tr>
                                        <tr>
                                            <td>1270003</td>
                                            <td>Bhupal</td>
                                            <td>19-06-2022</td>
                                            <td>19-07-2022</td>
                                            <td>06/22</td>
                                            <td>$64 million usd</td>
                                            <td>$6.4 usd</td>
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
