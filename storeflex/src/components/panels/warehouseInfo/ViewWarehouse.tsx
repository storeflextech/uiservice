import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import DeleteWarehouse from './deletewarehouse';
import swal from 'sweetalert';

const ViewWarehouse = () => {
  const navigate = useNavigate();
  const goToNextPage = (pagePath: string) => {
    navigate(pagePath);
  }

  const DeleteWarehouse = (id) => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this warehouse!",
        icon: "warning",
        buttons: [true,true],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Success! Your warehouse has been deleted!", {
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
                            Warehouses
                        </div>
                    </div>
                    <Table striped bordered hover responsive='md'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Company</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><div className="nav-profile-image">
                                        <img src="/images/face1.jpg" alt="profile" />
                                        <input className="d-none" type="file" />&nbsp;
                                        Mrityunjoy Deka</div></td>
                                <td>MJOY and SONS</td>
                                <td>Noid</td>
                                <td>9707665343</td>
                                <td>mjoysupport@gmail.com</td>
                                <td>
                                    <button onClick={() => DeleteWarehouse(1)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px' }}><strong><i className='mdi mdi-cup menu-icon'></i> Delete</strong></button>&nbsp; &nbsp;
                                    <button onClick={()=>goToNextPage('/business/edit')} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px',marginRight:'5px' }}><strong><i className='mdi mdi-pencil menu-icon'></i> Edit</strong></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><div className="nav-profile-image">
                                        <img src="/images/face1.jpg" alt="profile" />
                                        <input className="d-none" type="file" />&nbsp;
                                    Nishanta Kakati</div></td>
                                <td>WEBS</td>
                                <td>Guwahati</td>
                                <td>6009876353</td>
                                <td>support@gmail.com</td>
                                <td>
                                    <button onClick={() => DeleteWarehouse(1)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px' }}><strong><i className='mdi mdi-cup menu-icon'></i> Delete</strong></button>&nbsp; &nbsp;
                                    <button onClick={()=>goToNextPage('/business/edit')} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px',marginRight:'5px' }}><strong><i className='mdi mdi-pencil menu-icon'></i> Edit</strong></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><div className="nav-profile-image">
                                        <img src="/images/face1.jpg" alt="profile" />
                                        <input className="d-none" type="file" />&nbsp;
                                        Sofi Iqbal</div></td>
                                <td>Sofi Brothers</td>
                                <td>Kolkata</td>
                                <td>5004333213</td>
                                <td>sofisupport@proton.me</td>
                                <td>
                                    <button onClick={() => DeleteWarehouse(1)} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px' }}><strong><i className='mdi mdi-cup menu-icon'></i> Delete</strong></button>&nbsp; &nbsp;
                                    <button onClick={()=>goToNextPage('/business/edit')} className='primary-btn-outline' style={{ fontSize: '14px', float: 'right', borderRadius: 20, padding:'8px 12px 8px 12px',marginRight:'5px' }}><strong><i className='mdi mdi-pencil menu-icon'></i> Edit</strong></button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Box>
        </div>
    )
}

export default ViewWarehouse;
