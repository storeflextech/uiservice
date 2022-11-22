import React, {useState, useEffect} from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import swal from 'sweetalert';
import Api from '../../../api/Api';
import { ViewCompaniesProps,ViewWarehouseProps } from '../../../api/ApiConfig';
import { responseInterceptor } from 'http-proxy-middleware';
import { WarehouseOutlined } from '@mui/icons-material';
import { createMemoryHistory } from '@remix-run/router';
import ViewBusiness from '../businessinfo/viewBusiness';

const ViewWarehouse = () => {
    const api = new Api();
    const navigate = useNavigate();
    const [myCompanies, setMyCompanies] = useState<Array<any>>([]);
    const [myWarehouse, setMyWarehouse] = useState<Array<any>>([]);
    const [isBusinessList, setValue] = useState(true);

    var clientId : any;
    var pageNo:any='0';
    var pageSize:any='12';

    useEffect(()=>{
        getMyCompanies(pageNo, pageSize);
        // getWarehouse(clientId, pageNo, pageSize);
        
    })

    const getMyCompanies = (pageNo, pageSize) =>{
        const data: ViewCompaniesProps= {page:pageNo,size:pageSize};
        api.getMyCompanies(data).then((response) => {
           if(response.status==200){
            setMyCompanies(response.data.methodReturnValue.clientList);
           }
        });
    }

    const getWarehouse = (clientId, pageNo, pageSize) =>{
        const data: ViewWarehouseProps= {clientId:clientId, page:pageNo,size:pageSize};
        api.getWarehouse(data).then((response) => {
            console.log("Response=",response);
            if(response.status == 200){
                setMyWarehouse(response.data.methodReturnValue.warehouseList);
                setValue(false);
            }
        });
    }
    const viewWarehouses = (companyData: any) => {
        let clientId:any=companyData.clientId;
        getWarehouse(clientId, pageNo, pageSize);
    }
    const viewCompanies = (companyData:any)=> {
        getMyCompanies(pageNo, pageSize);
    }
 
    const goToEditPage = (pagePath:any, record:object) =>{
        navigate(pagePath,
            {
                state: {editRecord:record},
            } 
        );

    }
    const memoryHistory = createMemoryHistory();

  const DeleteWarehouse = (warehouse:any) => {
    swal({
        title: "Are you sure?",
        text: ' You are about to delete the warehouse "'+warehouse.warehouseName+'('+warehouse.warehouseId+')". Once deleted, you will not be able to recover this warehouse!',
        icon: "success",
        buttons: [true,true],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal('Success! Your warehouse "'+warehouse.warehouseName+'('+warehouse.warehouseId+')" has been deleted!', {
            icon: "success",
          });
          let extractedArr = myWarehouse.filter((item, index)=>{
            return item.warehouseId!=warehouse.warehouseId ;
        });
        setMyWarehouse(extractedArr);
        } else {
        // do something if required   
        }
      });
}

    return (
        <div className='c-box-shadow-blue'>
            {isBusinessList && (
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
                                <th style={{textAlign:'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myCompanies && myCompanies.map((item:any) => {return(
                                <tr>
                                    <td>{item.clientId}</td>
                                    <td>{item.compyName}</td>
                                    <td>{item.compyDesc}</td>
                                    <td>{item.url}</td>
                                    <td>{item.addresses[0].addressType+':'+item.addresses[0].streetDetails+','+item.addresses[0].city+','+item.addresses[0].pincode}</td>
                                    <td>{item.contact[0].contactName}</td>
                                    <td>{item.contact[0].mobileNo}</td>
                                    <td>
                                        <button onClick={()=>viewWarehouses(item)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px',marginRight:'5px' }}><strong><i className='mdi mdi-eye menu-icon'></i> View Warehouse</strong></button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </Table>
                </div>
            </Box>
            )}
            {!isBusinessList && (
            <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                <div>
                    <div className='primary-gradient'>
                        <div className='font-white p-sm f-18px f-bold'>
                            Warehouses
                        </div>
                    </div>
                    <Table striped bordered hover responsive='md'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Client ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Tax Id</th>
                                <th>Address</th>
                                <th style={{textAlign:'center'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myWarehouse && myWarehouse.map((item:any) => {return(
                                <tr>
                                <td>{item.warehouseId}</td>
                                <td>{item.clientId}</td>
                                <td>{item.warehouseName}</td>
                                <td>{item.descp}</td>
                                <td>{item.warehouseTaxId}</td>
                                <td>{item.address[0].houseNo}</td>
                                <td>
                                    <button onClick={() => DeleteWarehouse(item)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px' }}><strong><i className='mdi mdi-cup menu-icon'></i> Delete</strong></button>&nbsp; &nbsp;
                                    <button onClick={()=>goToEditPage('/business/edit', item)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px',marginRight:'5px' }}><strong><i className='mdi mdi-pencil menu-icon'></i> Edit</strong></button>
                                    <button onClick={()=> ViewWarehouse()} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px',marginRight:'5px' }}><strong><i className='mdi mdi-arrow-left-bold-circle menu-icon'></i> Go Back</strong></button>

                                </td>
                                </tr>
                                
                            )})}
                        </tbody>
                    </Table>
                </div>
            </Box>
            )}
        </div>
    )
}

export default ViewWarehouse;

