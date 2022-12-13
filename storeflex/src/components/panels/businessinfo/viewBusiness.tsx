import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';
import Pagination from 'react-bootstrap/Pagination';
import Api from '../../../../src/api/Api';
import { ViewCompaniesProps } from '../../../api/ApiConfig';
import { DeletsButton, EditButton } from '../../buttons/buttons';
import { LoaderFull } from '../../atoms/loader/loader';

const ViewBusiness = () => {
    const api = new Api();
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [myCompanies, setMyCompanies] = useState<Array<any>>([]);

    var pageNo: any = '0';
    var pageSize: any = '6';

    useEffect(() => {
        getMyCompanies(pageNo, pageSize);
    }, [])

    const getMyCompanies = (pageNo, pageSize) => {
        setLoader(true);
        const data: ViewCompaniesProps = { page: pageNo, size: pageSize };
        api.getMyCompanies(data).then((response) => {
            setLoader(false);
            setMyCompanies(response.methodReturnValue.clientList);
        }).catch((error) => {
            setLoader(false);
            console.log(' getMyCompanies  ', error);
        });
    }

    const editBusiness = (company: any) => {
        const pagePath = '/business/edit'
        navigate(pagePath,
            {
                state: { editRecord: company },
            }
        );
    }

    const deleteBusiness = (company: any) => {

        console.log(' @@@ ', company);
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
                        return item.clientId !== company.clientId;
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
                                            <DeletsButton onBtnClick={() => {deleteBusiness(item)}}/>
                                            <EditButton onBtnClick={() => {editBusiness(item)}}/>
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
        <>
            { loader && <LoaderFull /> }
            <div className='c-box-shadow-blue'>
            {showCompanyList()}
            </div>
        </>
        
    )
}

export default ViewBusiness;
