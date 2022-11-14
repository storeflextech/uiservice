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
                CompanyName: 'Das & Sons Pvt. Ltd.',
                Address: "Nayantara Supermarket, Anand Nagar, Six Mile",
                PrimaryContactName:
                <div className="nav-profile-image">
                    <img src="/images/face1.jpg" alt="profile" />
                    <input className="d-none" type="file" />&nbsp;
                    Martina Das
                </div>,
                Phone: "9988221133",
                Email: "skap@yahoomail.com"
            },
            {
                id: 2,
                CompanyName: 'Zaman & Sons Pvt. Ltd.',
                Address: "H No. 24, VIP Road, Guwahati",
                PrimaryContactName:
                <div className="nav-profile-image">
                    <img src="/images/face1.jpg" alt="profile" />
                    <input className="d-none" type="file" />&nbsp;
                    Samaruz Zaman
                </div>,
                Phone: "9101212005",
                Email: "support2you@gmail.com"
            },
            {
                id: 3,
                CompanyName: 'Sofi & Sons Pvt. Ltd.',
                Address: "H No. 32, AT Road, Guwahati",
                PrimaryContactName:
                <div className="nav-profile-image">
                    <img src="/images/face1.jpg" alt="profile" />
                    <input className="d-none" type="file" />&nbsp;
                    Sofi Ahmed
                </div>,
                Phone: "2121932923",
                Email: "sofisupport@proton.me"
            },
            {
                id: 4,
                CompanyName: 'Brazen & Sons Pvt. Ltd.',
                Address: "H No. 42, Anand Nagar, Six Mile",
                PrimaryContactName:
                <div className="nav-profile-image">
                    <img src="/images/face1.jpg" alt="profile" />
                    <input className="d-none" type="file" />&nbsp;
                    Nishanta Kakati
                </div>,
                Phone: "9988776655",
                Email: "nishantann@proton.me"
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
            text: "Once deleted, you will not be able to recover this company!",
            icon: "warning",
            buttons: [true,true],
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Success! Your company has been deleted!", {
                icon: "success",
              });
            } else {
            // do something if required   
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
                    <Table striped bordered hover responsive="sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Company Name</th>
                                <th>Address</th>
                                <th>Primary Contact Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th style={{textAlign:'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {businessInfo.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.CompanyName}</td>
                                    <td>{item.Address}</td>
                                    <td>{item.PrimaryContactName}</td>
                                    <td>{item.Phone}</td>
                                    <td>{item.Email}</td>
                                    <td>
                                        <button onClick={() => deleteBusiness(item.id)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px' }}><strong><i className='mdi mdi-cup menu-icon'></i> Delete</strong></button>&nbsp; &nbsp;
                                        <button onClick={()=>goToNextPage('/business/edit')} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px',marginRight:'5px' }}><strong><i className='mdi mdi-pencil menu-icon'></i> Edit</strong></button>
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
