import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import TopNavbar from '../navbar/TopNavBar';
import SideNavBar from '../navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../containers/containers';
import Footer from '../footer/footer';
import { getUserType } from '../../utils/CommonUtils';
import AddBusiness from './add-business';

const ViewBusiness = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);
    const goToNextPage = (pagePath: string) => {
        navigate(pagePath);
    }

    const deleteBusiness = (id) =>{
        swal({
            title: "Are you sure?",
            text: "Do you really want to delete the business?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
              swal("Deleted!", "Your business has been deleted!", "success");
            }
          });
    }
    
    return (
        <AppContainer>
            <TopNavbar />
            <SplitPaneContainer
                left={<SideNavBar userType={getUserType()} />}
                right={
                    <div className='c-box-shadow-blue'>
                        <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                            <div>
                                <div className='primary-gradient'>
                                    <div className='font-white p-sm f-18px f-bold'>
                                        Business
                                        <button className="primary-btn-outline" style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }} onClick={() => setModalShow(true)}><i className='mdi mdi-plus menu-icon'></i> Add New</button>
                                    </div>
                                    <AddBusiness
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Company Name</th>
                                            <th>Company URL</th>
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
                                            <td>Zaman & Sons Company</td>
                                            <td>https://zaman.com</td>
                                            <td>Assam</td>
                                            <td>Noida</td>
                                            <td>211003</td>
                                            <td>9998887766</td>
                                            <td>
                                                <button onClick={() => deleteBusiness(1)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Rupon & Sons</td>
                                            <td>https://rupon.com</td>
                                            <td>Delhi</td>
                                            <td>Guwahati</td>
                                            <td>781003</td>
                                            <td>78956498765</td>
                                            <td>
                                                <button onClick={() => deleteBusiness(2)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Mrityunjoy & Sons</td>
                                            <td>https://mrityunjoy.com</td>
                                            <td>Kolkata</td>
                                            <td>Kolkata</td>
                                            <td>881005</td>
                                            <td>68956498765</td>
                                            <td>
                                                <button  onClick={() => deleteBusiness(3)} className='primary-btn-outline'  style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-cup menu-icon'></i> Delete</button>
                                                <button className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, paddingLeft: '12px', paddingRight: '12px' }}><i className='mdi mdi-pencil menu-icon'></i> Edit</button> &nbsp; &nbsp;
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
