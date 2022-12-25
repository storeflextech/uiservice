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

let recordLabel = '';

const ViewBusiness = () => {
    const companyView = window.location.hash;
    const api = new Api();
    const navigate = useNavigate();
    const [myCompanies, setMyCompanies] = useState<Array<any>>([]);
    const [isLoader, setIsLoader] = useState(false);
    const [currentView, setCurrentView] = useState('');

    const pageNo = '0';
    const numberOfRecord = '10';

    useEffect(() => {
        if(companyView !== currentView) {
            getMyCompanies(pageNo, numberOfRecord);
            setCurrentView(companyView);
        }
    }, [companyView])

    const getMyCompanies = (curentPage, numberOfRecords) => {
        // IN-PROGRESS , IN-ACTIVE , ACTIVE
        let companyStatus = 'ACTIVE'
        if(companyView === '#inactive') {
            companyStatus = 'IN-ACTIVE';
            recordLabel = ' Inactive Companies'
        } else if(companyView === '#pending') {
            companyStatus = 'IN-PROGRESS';
            recordLabel = ' Pending Companies '
        } else {
            companyStatus = 'ACTIVE';
            recordLabel = ' Companies Onboared '
        }
        setIsLoader(true);
        const data: ViewCompaniesProps = {
            page: curentPage,
            size: numberOfRecords,
            status: companyStatus
        }
        api.getMyCompanies(data).then((response) => {
            setIsLoader(false);
            setMyCompanies(response.methodReturnValue.clientList);
        }).catch((error) => {
            setIsLoader(false);
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
        swal({
            title: "Are you sure?",
            text: 'You are about to delete the company "' + company.compyName + '(' + company.clientId + ')" . Once deleted, you will not be able to recover this company!',
            icon: "warning",
            buttons: [true, true],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                if(company.clientId){
                    setIsLoader(true);
                    api.deleteCompany(company.clientId).then((response) => {
                        setIsLoader(false);
                        swal('Success! Your company "' + company.compyName + '(' + company.clientId + ')" has been deleted!', {
                            icon: "success",
                        });
                        let extractedArr = myCompanies.filter((item, index) => {
                            return item.clientId !== company.clientId;
                        });
                        setMyCompanies(extractedArr);
                    }).catch((error) => {
                        setIsLoader(false);
                        console.log(' deleteCompany erroor ', error);
                    });
                }
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
                            {recordLabel}
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
                                const keyId = `company_${item.clientId}`;
                                return (
                                    <tr key={keyId}>
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
             {isLoader && <LoaderFull />}
            <div className='c-box-shadow-blue'>
            {showCompanyList()}
            </div>
        </>
        
    )
}

export default ViewBusiness;
