import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Api from '../../../../src/api/Api';
import { ViewCompaniesProps } from '../../../api/ApiConfig';

const ViewBusiness = () => {
    const api = new Api();
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);
    const [myCompanies, setMyCompanies] = useState<Array<any>>([]);
    const [businessInfo, setBusinessInfo] = useState<Array<any>>([]);

    var pageNo: any = '0';
    var pageSize: any = '6';

    useEffect(() => {
        getMyCompanies(pageNo, pageSize);
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

    const getMyCompanies = (pageNo, pageSize) => {
        const data: ViewCompaniesProps = { page: pageNo, size: pageSize };
        api.getMyCompanies(data).then((response) => {
            if (response.status == 200) {
                setMyCompanies(response.data.methodReturnValue.clientList);
            }
        });
    }

    const goToEditPage = (pagePath: string, record: object) => {
        navigate(pagePath,
            {
                state: { editRecord: record },
            }
        );
    }

    const deleteBusiness = (company: any) => {
        swal({
            title: "Are you sure?",
            text: 'You are about to delete the company "' + company.compyName + '(' + company.clientId + ')" . Once deleted, you will not be able to recover this company!',
            icon: "warning",
            buttons: [true, true],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal('Success! Your company "' + company.compyName + '(' + company.clientId + ')" has been deleted!', {
                        icon: "success",
                    });
                    let extractedArr = myCompanies.filter((item, index) => {
                        return item.clientId != company.clientId;
                    });
                    setMyCompanies(extractedArr);
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
                                <th>Description</th>
                                <th>URL</th>
                                <th>Address</th>
                                <th>Primary Contact Name</th>
                                <th>Phone</th>
                                <th style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myCompanies && myCompanies.map((item: any) => {
                                return (
                                    <tr>
                                        <td>{item.clientId}</td>
                                        <td>{item.compyName}</td>
                                        <td>{item.compyDesc}</td>
                                        <td>{item.url}</td>
                                        <td>{item.addresses[0].addressType + ':' + item.addresses[0].streetDetails + ',' + item.addresses[0].city + ',' + item.addresses[0].pincode}</td>
                                        <td>{item.contact[0].contactName}</td>
                                        <td>{item.contact[0].mobileNo}</td>
                                        <td>
                                            <button onClick={() => deleteBusiness(item)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding: '8px 12px 8px 12px' }}><strong><i className='mdi mdi-cup menu-icon'></i> Delete</strong></button>&nbsp; &nbsp;
                                            <button onClick={() => goToEditPage('/business/edit', item)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding: '8px 12px 8px 12px', marginRight: '5px' }}><strong><i className='mdi mdi-pencil menu-icon'></i> Edit</strong></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <div className='pt-1' style={{ alignContent: 'center' }}>
                        <Pagination>
                            <Pagination.Prev />
                            <Pagination.Ellipsis />
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Item>{5}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Next />
                        </Pagination>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default ViewBusiness;
