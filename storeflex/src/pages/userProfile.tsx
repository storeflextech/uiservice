import React from 'react';
import { Box } from '@mui/material';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';
import Footer from '../components/footer/footer';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';

const UserProfile = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [formData, setFormData] = useState(
        {
            name: 'Mithu Zaman',
            company: 'United Company of Skaplink',
            phone: '9876541230',
            email: 'company@skap.com',
            city: 'Guwahati'
        }
    );



    // const [success, setSuccess] = useState("success");

    const handleClick = (event) => {
        setIsDisabled(!isDisabled)
        // console.log(event.target.disabled);
        // event.target.disabled = true;

    };


    const handleInput = (event: any) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        event.target.disabled = false;

        console.log(formData);

    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editProfilePhoto = () => {
        document.getElementById('fileInput')?.click();
      };


    return (
        <AppContainer>

            <TopNavbar />
            <SplitPaneContainer
                left={<SideNavBar userType={getUserType()} />}
                right={

                    <div className='c-box-shadow-blue'>
                        <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                            <div>

                                <div className='p-bot-lg'>

                                    <div className="col-md-12">
                                        <div className="row border bg-white">
                                            <div className="col-md-4 p-0">
                                                <div className="border border-info p-4 h-100">
                                                    <div className="header text-center p-4">User Profile</div>
                                                    <div className="text-center">
                                                        <img className="border border-success rounded-circle" src="/images/face1.jpg" alt="profile" />

                                                        <button className='border' onClick={editProfilePhoto} style={{background:'white', position:'absolute',border:'0px',borderRadius:50,padding:'5px',marginLeft:'-30px',marginTop:'70px'}}><i className="lni lni-pencil"></i>
                  {/* <img style={{height:'25px',width:'30px'}} src="/images/camera_lead.jpg" alt="" /> */}
                </button>


                                                        <div className="flex p-4">

                                                            <input
                                                                className="bg-{success} form-control font-weight-bold text-center"
                                                                name="name"
                                                                type="text"
                                                                value={formData.name}
                                                                onChange={handleInput}
                                                                disabled={isDisabled}
                                                            // readOnly={true}
                                                            />

                                                            {/* <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button> */}

                                                        </div>


                                                    </div>

                                                </div>
                                            </div>


                                            <div className="col-md-8 p-0">
                                                <div className="col-md-12 p-0">
                                                    <div className="border border-info p-4">
                                                        <div className="header text-center p-2">User Details</div>

                                                        <div className="flex p-2">

                                                            <div className="input-group-prepend w-25">
                                                                <span className="input-group-text w-100 mr-1" id="basic-addon1">Company:</span>
                                                            </div>
                                                            <input
                                                                className="bg-{success} form-control font-weight-bold"
                                                                name='company'
                                                                type="text"
                                                                value={formData.company}
                                                                onChange={handleInput}
                                                                disabled={isDisabled}
                                                            />

                                                            {/* <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button> */}
                                                        </div>

                                                        <div className="flex p-2">

                                                            <div className="input-group-prepend w-25">
                                                                <span className="input-group-text w-100 mr-1" id="basic-addon1">Phone:</span>
                                                            </div>
                                                            <input
                                                                className="bg-{success} form-control font-weight-bold"
                                                                type="text"
                                                                name='phone'
                                                                value={formData.phone}
                                                                onChange={handleInput}
                                                                disabled={isDisabled}
                                                            />

                                                            {/* <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button> */}
                                                        </div>

                                                        <div className="flex p-2">

                                                            <div className="input-group-prepend w-25">
                                                                <span className="input-group-text w-100 mr-1" id="basic-addon1">Email:</span>
                                                            </div>
                                                            <input
                                                                className="bg-{success} form-control font-weight-bold"
                                                                type="text"
                                                                name='email'
                                                                value={formData.email}
                                                                onChange={handleInput}
                                                                disabled={isDisabled}
                                                            />

                                                            {/* <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button> */}
                                                        </div>

                                                        <div className="flex p-2">
                                                            <div className="input-group-prepend w-25">
                                                                <span className="input-group-text w-100 mr-1" id="basic-addon1">Address:</span>
                                                            </div>
                                                            <input
                                                                className="bg-{success} form-control font-weight-bold"
                                                                type="text"
                                                                name='city'
                                                                value={formData.city}
                                                                onChange={handleInput}
                                                                disabled={isDisabled}
                                                            />
                                                            {/* <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button> */}
                                                        </div>

                                                        <div className="flex p-2">
                                                            <div className="input-group-prepend w-25">
                                                                <span className="input-group-text w-100 mr-1" id="basic-addon1">City:</span>
                                                            </div>
                                                            <input
                                                                className="bg-{success} form-control font-weight-bold"
                                                                type="text"
                                                                name='city'
                                                                value={formData.city}
                                                                onChange={handleInput}
                                                                disabled={isDisabled}
                                                            />
                                                            {/* <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button> */}
                                                        </div>

                                                        <div className="flex p-2">

                                                            <div className="input-group-prepend w-25">
                                                                <span className="input-group-text w-100 mr-1" id="basic-addon1">Role:</span>
                                                            </div>
                                                            <input
                                                                className="bg-{success} form-control font-weight-bold"
                                                                type="text"
                                                                name='city'
                                                                // value={getUserType()}
                                                                disabled={true}
                                                            />

                                                        </div>



                                                        <div className="col-md-12">
                                                            <div className="text-center">
                                                                <button className='btn btn-info p-1 text-capitalize' onClick={handleShow}><i className="lni lni-pencil"></i> Dupdate</button>
                                                            </div>
                                                        </div>

                                                    </div>



                                                    <>

                                                        <Modal show={show} onHide={handleClose}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Update Profile</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <Form>
                                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                        <Form.Label>Name</Form.Label>
                                                                        <Form.Control
                                                                        className='font-weight-bold'
                                                                            type="text"
                                                                            value={formData.name}
                                                                            autoFocus
                                                                        />
                                                                    </Form.Group>
                                                                    
                                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                        <Form.Label>Company Name</Form.Label>
                                                                        <Form.Control
                                                                        className='font-weight-bold'
                                                                            type="text"
                                                                            value={formData.company}
                                                                            autoFocus
                                                                        />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                        <Form.Label>Phone</Form.Label>
                                                                        <Form.Control
                                                                        className='font-weight-bold'
                                                                            type="number"
                                                                            value={formData.phone}
                                                                            autoFocus
                                                                        />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                        <Form.Label>Email</Form.Label>
                                                                        <Form.Control
                                                                        className='font-weight-bold'
                                                                            type="email"
                                                                            value={formData.email}
                                                                            autoFocus
                                                                        />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                        <Form.Label>Address</Form.Label>
                                                                        <Form.Control
                                                                        className='font-weight-bold'
                                                                            type="text"
                                                                            value={formData.city}
                                                                            autoFocus
                                                                        />
                                                                    </Form.Group>


                                                                </Form>
                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="secondary" className='btn-sm text-capitalize' onClick={handleClose}>
                                                                    Close
                                                                </Button>
                                                                <Button variant="primary" className='btn-sm text-capitalize' onClick={handleClose}>
                                                                    Save Changes
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                    </>




                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Box>
                    </div>
                }
            />
            <Footer />
        </AppContainer>
    )
}

export default UserProfile;