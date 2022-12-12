import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';
import Pagination from 'react-bootstrap/Pagination';
import Api from '../../../../src/api/Api';
import { ViewCompaniesProps } from '../../../api/ApiConfig';

const ViewBusiness = () => {
    const api = new Api();
    const navigate = useNavigate();
    const [modalShow, setModalShow] = React.useState(false);
    const [myCompanies, setMyCompanies] = useState<Array<any>>([]);

    var pageNo: any = '0';
    var pageSize: any = '6';

    useEffect(() => {
        getMyCompanies(pageNo, pageSize);
    }, [])

    const getMyCompanies = (pageNo, pageSize) => {
        const data: ViewCompaniesProps = { page: pageNo, size: pageSize };
        api.getMyCompanies(data).then((response) => {
            setMyCompanies(response.methodReturnValue.clientList);
        }).catch((error) => {
            console.log(' getMyCompanies  ', error);
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

    const showCompanyList = () => {
        return (
            <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                <div>
               <div className='primary-gradient'>
                        <div className='font-white p-sm f-18px f-bold'>
                            Companies Onboared
                        </div>
                    </div>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                {/* <th>URL</th> */}
                                <th>Address</th>
                                <th>Email / Phone</th>
                                {/* <th>Phone</th> */}
                                <th style={{ textAlign: 'center' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myCompanies && myCompanies.map((item: any) => {
                                return (
                                    <tr>
                                        <td>{item.clientId}</td>
                                        <td>{item.compyName}</td>
                                        <td>{item.compyDesc}<br></br>
                                        {item.url}
                                        </td>
                                        {/* <td>{item.url}</td> */}
                                        <td>{item.addresses[0].addressType + ':' + item.addresses[0].streetDetails + ',' + item.addresses[0].city + ',' + item.addresses[0].pincode}</td>
                                        <td>{item.contact[0].contactName} / {item.contact[0].mobileNo}</td>
                                        {/* <td>{item.contact[0].mobileNo}</td> */}
                                        <td className='align-c'>
                                            <button onClick={() => deleteBusiness(item)} className='primary-btn-outline' style={{ fontSize: '12px', borderRadius: 5, padding: '5px', marginBottom: '5px' }}><strong><i className='mdi mdi-cup menu-icon'></i> Delete</strong></button>
                                            <button onClick={() => goToEditPage('/business/edit', item)} className='primary-btn-outline' style={{ fontSize: '12px', borderRadius: 5, padding: '5px' }}><strong><i className='mdi mdi-pencil menu-icon'></i> Edit</strong></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    <div className='pt-1' style={{ alignContent: 'center',float:'right' }}>
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
        )
    }

    return (
        <div className='c-box-shadow-blue'>
            {showCompanyList()}
        </div>
    )
}

export default ViewBusiness;
