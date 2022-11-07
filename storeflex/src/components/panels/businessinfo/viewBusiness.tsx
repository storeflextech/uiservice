import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';

const ViewBusiness = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);
    const [businessInfo, setBusinessInfo] = useState<Array<any>>([]);

    useEffect(() => {
        const data = ([
            {
                id: 1,
                CompanyName: 'Zaman & Sons Pvt. Ltd.',
                CompanyURL: "https://zamanpvtltd.com",
                State: "Assam",
                City: "Guwahati",
                Pincode: "781003",
                Phone: "9988776655"
            },
            {
                id: 2,
                CompanyName: 'Rupon & Sons Pvt. Ltd.',
                CompanyURL: "https://ruponpvtltd.com",
                State: "Delhi",
                City: "Central",
                Pincode: "711003",
                Phone: "9988776655"
            },
            {
                id: 3,
                CompanyName: 'Mrityunjoy & Sons Pvt. Ltd.',
                CompanyURL: "https://mrityunjoypvtltd.com",
                State: "Bihar",
                City: "SomeCity",
                Pincode: "741005",
                Phone: "9988776655"
            },
            {
                id: 4,
                CompanyName: 'Brazen & Sons Pvt. Ltd.',
                CompanyURL: "https://mrityunjoypvtltd.com",
                State: "Meghalaya",
                City: "Phulbari",
                Pincode: "761002",
                Phone: "9988776655"
            },
        ]);
        setBusinessInfo(data);
    }, [])

    const goToNextPage = (pagePath: string) => {
        navigate(pagePath);
    }

    const deleteBusiness = (id) => {
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
        <div className='c-box-shadow-blue'>
            <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                <div>
                    <div className='primary-gradient'>
                        <div className='font-white p-sm f-18px f-bold'>
                            Business
                            {/* <button className="primary-btn-outline" style={{ fontSize: '14px', float: 'right', marginTop:'-10px', borderRadius: 20, right:'0px', padding:'7px 12px 7px 12px' }} onClick={() => setModalShow(true)}><strong><i className='mdi mdi-plus menu-icon'></i> Add New</strong></button> */}
                        </div>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sl. No.</th>
                                <th>Company Name</th>
                                <th>Company URL</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Pincode</th>
                                <th>Phone</th>
                                <th style={{textAlign:'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {businessInfo.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.CompanyName}</td>
                                    <td>{item.CompanyURL}</td>
                                    <td>{item.State}</td>
                                    <td>{item.City}</td>
                                    <td>{item.Pincode}</td>
                                    <td>{item.Phone}</td>
                                    <td>
                                        <button onClick={() => deleteBusiness(item.id)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px' }}><strong><i className='mdi mdi-cup menu-icon'></i> Delete</strong></button>&nbsp; &nbsp;
                                        <button className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px',marginRight:'5px' }}><strong><i className='mdi mdi-pencil menu-icon'></i> Edit</strong></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Box>
        </div>
    )
}

export default ViewBusiness;
