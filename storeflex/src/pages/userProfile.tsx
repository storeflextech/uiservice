import React from 'react';
import { Box } from '@mui/material';
import TopNavbar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';
import Footer from '../components/footer/footer';

import { useEffect, useState } from 'react';

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
    


    const [success, setSuccess] = useState("success");

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
                                                    <div className="header text-center p-2">My Profile</div>
                                                    <div className="text-center">
                                                        <img className="border border-success rounded-circle" src="/cpanel/images/faces/face1.jpg" alt="profile" />


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

                                                            <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button>

                                                        </div>


                                                    </div>

                                                </div>
                                            </div>


                                            <div className="col-md-8 p-0">
                                                <div className="col-md-12 p-0">
                                                    <div className="border border-info p-4">
                                                        <div className="header text-center p-2">Details</div>

                                                        <div className="flex p-2">

                                                            <div className="input-group-prepend w-25">
                                                                <span className="input-group-text w-100 mr-1" id="basic-addon1">Company Name:</span>
                                                            </div>
                                                            <input
                                                                className="bg-{success} form-control font-weight-bold"
                                                                name='company'
                                                                type="text"
                                                                value={formData.company}
                                                                onChange={handleInput}
                                                                disabled={isDisabled}
                                                            /> 

                                                            <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button>
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

                                                            <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button>
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

                                                            <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button>
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

                                                            <button className='btn btn-info p-1' onClick={handleClick}><i className="lni lni-pencil"></i></button>
                                                        </div>





                                                    </div>



                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/* <DashboardChart userType={getUserType()}/> */}
                                </div>
                                {/* <Dashboards userType={getUserType()} /> */}
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