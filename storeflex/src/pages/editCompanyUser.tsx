import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import AddressDetails from '../components/atoms/addressforms/AddressDetails';
import InputBox from '../components/atoms/textfield/InputBox';
import { UserType, CompanyName } from '../components/atoms/adduser/UserHelper';
import { validateCharacterLength, validateSpecialCharExistance, validatePhone, validateEmail } from '../utils/CommonUtils';
import { Button } from '@mui/material';
import GetCompany from '../components/atoms/company/GetCompany';
import { Box } from '@mui/material';
import { useNavigate, useLocation } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import TopNavBar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import { getUserType } from '../utils/CommonUtils';
import { viewUserProps } from '../api/ApiConfig';
import Api from '../api/Api';
import DeleteUser from './deleteuser';
import { isTypeNode } from 'typescript';
import { DeletsButton, EditButton } from '../components/buttons/buttons';
import swal from 'sweetalert';
import { UploadImage } from '../components/atoms/image/image';

import { EditCompanyUserDetails } from '../utils/ResponseSchema';
import { CompanyUserPostData } from '../api/ApiConfig';

interface EditCompanyUser {
    profileData?: EditCompanyUserDetails;
    onSave?(isSaved: boolean): void;
    action?: string;
}

const EditCompanyUser = (props: EditCompanyUser) => {

    const location = useLocation();

    const [values, setValues] = useState({
        FirstName: "",
        LastName: "",
        Phone: "",
        Email: "",
    });
    const [errors, setErrors] = useState({
        FirstName: "",
        LastName: "",
        Phone: "",
        Email: "",

    });

    const [imageData, setImageData] = useState<File>();
    const onPhotoUploadChange = (file: any) => {
        if (file) {
            setImageData(file);
        }
    }

    const profile = {} as EditCompanyUserDetails;
    const [companyUserProfile, setCompanyUserProfile] = useState(profile);

    useEffect(() => {
        companyUserDataFormatter(location.state.editRecord);
    }, [])

    const companyUserDataFormatter = (data: CompanyUserPostData) => {
        let companyUserDataDetails: EditCompanyUserDetails = {
            userId: data.userId || '',
            address: data.address || '',
            city: data.city || '',
            country: data.country || '',
            email: data.email || '',
            firstName: data.firstName || '',
            houseNo: data.houseNo || '',
            lastName: data.lastName || '',
            middleName: data.middleName || '',
            mobileNo: data.mobileNo || '',
            photoName: data.photoName || '',
            pincode: data.pincode || '',
            roleType: data.roleType || '',
            status: data.status || '',
            userPhoto: data.userPhoto || '',

        }
        setCompanyUserProfile(companyUserDataDetails);
    }

    //Validate First name
    const validateFirstName = (event: any) => {

        const firstNameTemp = event.target.value;
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        if (!firstNameTemp) {
            errors.FirstName = "*Firstname is required."
            document.getElementsByName("firstname")[0].style.border = " solid red";

        } else if (!validateCharacterLength(firstNameTemp, 4, 50)) {
            errors.FirstName = "Firstname should have atleast 4 letters and should not grater than 50"
            document.getElementsByName("firstname")[0].style.border = "2px solid red";
        }
        else if (!validateSpecialCharExistance(firstNameTemp)) {
            errors.FirstName = "Firstname should not contain any special character or number "
            document.getElementsByName("firstname")[0].style.border = "2px solid red";
        } else {
            errors.FirstName = ""
            document.getElementsByName("firstname")[0].style.border = "2px solid dodgerblue"
        }

    }
    //Validate Last Name
    const validateLastName = (event: any) => {
        const lastNameTemp = event.target.value;
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        if (!lastNameTemp) {
            errors.LastName = "*Lastname is required."
            document.getElementsByName("lastname")[0].style.border = " solid red";
        } else if (!validateCharacterLength(lastNameTemp, 2, 30)) {
            errors.LastName = "Lastname should have atleast 2 letters and should not grater than 30"
            document.getElementsByName("lastname")[0].style.border = "2px solid red";
        }
        else if (!validateSpecialCharExistance(lastNameTemp)) {
            errors.LastName = "Lastname should not contain any special character or number "
            document.getElementsByName("lastname")[0].style.border = "2px solid red";
        } else {
            errors.LastName = ""
            document.getElementsByName("lastname")[0].style.border = "2px solid dodgerblue"
        }
    }
    //Validate Phone
    const validatePhone = (event: any) => {
        const phoneTemp = event.target.value;
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        if (!phoneTemp) {
            errors.Phone = "*Phone is required."
            document.getElementsByName("phone")[0].style.border = " solid red";
        } else if (!validateCharacterLength(phoneTemp, 10, 10)) {
            errors.Phone = "Phone Number should contains 10 characters"
            document.getElementsByName("phone")[0].style.border = "2px solid red";
        }
        else if (!validateSpecialCharExistance(phoneTemp)) {
            errors.Phone = "Phone number should not contain any special characters"
            document.getElementsByName("phone")[0].style.border = "2px solid red";
        } else {
            errors.Phone = ""
            document.getElementsByName("phone")[0].style.border = "2px solid dodgerblue"
        }
    };
    const validate_email = (event: any) => {
        const email = event.target.value;
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        if (!email) {
            errors.Email = "*Email is required."
            document.getElementsByName("email")[0].style.border = "2px solid red";
        } else if (!validateEmail(email)) {
            errors.Email = "*Valid email is required."
            document.getElementsByName("email")[0].style.border = "2px solid red";
        } else {
            errors.Email = ""
            document.getElementsByName("email")[0].style.border = "2px solid dodgerblue";
        }
    }
    // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const {name, value } = e.currentTarget;
    //     console.log(' #### name ', name);
    //     console.log(' #### name ', value);
    // }
    const handelOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        console.log(' #### name ', name);
        console.log(' #### name ', value);
    }
    const selectDetails = () => {
        return (
            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={4}>
                    <div style={{ marginBottom: '8px' }}>
                        <div className='pb-2'>Status</div>
                        <select name="addresstype" className="form-control" onChange={() => { }}>
                            <option value="ACT">Active</option>
                            <option value="INP">In-Progress</option>
                            <option value="INA">In-Active</option>
                        </select>
                    </div>
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                    <div> User Type </div>
                    <div className='p-top-md'>
                        {<UserType />}
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <InputBox data={{ name: 'firstname', label: 'First  Name*', value: companyUserProfile.firstName }}
                        onChange={validateFirstName} onBlur={handelOnBlur}
                    />
                    {errors.FirstName && <p className="text-red">{errors.FirstName}</p>}
                </Grid>
                <Grid item xs={3}>
                    <div>Company</div>
                    <div className='p-top-md'>
                        {<GetCompany />}
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <InputBox data={{ name: 'lastname', label: 'Last  Name*', value: companyUserProfile.lastName }}
                        onChange={validateLastName} onBlur={handelOnBlur}
                    />
                    {errors.LastName && <p className="text-red">{errors.LastName}</p>}
                </Grid>




                <Grid item xs={3}>
                    <div>Profile Photo</div>
                    <div className='p-top-md'>
                        <UploadImage name={'companyphoto'} onImageChange={onPhotoUploadChange} />

                    </div>
                </Grid>
            </Grid>
        )
    }

    const userInfo = () => {
        return (
            <div className='p-top-md'>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={4}>


                    </Grid>

                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'phone', label: 'Phone*', value: companyUserProfile.mobileNo }}
                            onChange={validatePhone} onBlur={handelOnBlur}
                        />
                        {errors.Phone && <p className="text-red">{errors.Phone}</p>}
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'email', label: 'Email*', value: companyUserProfile.email }}
                            onChange={validate_email} onBlur={handelOnBlur}
                        />
                        {errors.Email && <p className="text-red">{errors.Email}</p>}
                    </Grid>
                </Grid>
            </div>

        )
    }
    const addAddress = () => {
        return (
            <div className='p-top-md'>
                {/* <div>{
                    <AddressDetails
                        countryCode={'01'}
                    />}</div> */}
                <Grid container className='p-top-md' spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={3}>
                        <InputBox data={{ name: 'plotno', label: 'Plot No', value: companyUserProfile.houseNo }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <InputBox data={{ name: 'houseno', label: 'House No', value: companyUserProfile.houseNo }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'street', label: 'Street*', value: companyUserProfile.houseNo }}
                        />
                    </Grid>
                </Grid>
                <Grid container className='p-top-md' spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'state', label: 'State*', value: companyUserProfile.country }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'city', label: 'City*', value: companyUserProfile.city }}
                        />
                    </Grid>
                </Grid>
                <Grid container className='p-top-md' spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'country', label: 'Country*', value: companyUserProfile.country }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'pincode', label: 'Pin Code*', value: companyUserProfile.pincode }}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }

    return (
        <AppContainer>
            <TopNavBar />
            <SplitPaneContainer
                left={<SideNavBar userType={getUserType()} />}
                right={
                    <div className='c-box-shadow-blue m-bot-md'>
                        <div className='primary-gradient'>
                            <div className='font-white p-md f-18px f-bold'>Edit User</div>
                        </div>
                        <div className='p-md'>
                            {selectDetails()}
                            {userInfo()}
                            {addAddress()}
                        </div>
                        <div className='p-top-md align-c'>
                            <Button className='sf-btn' variant="contained" onClick={() => { alert('Cancel') }}> Cancel </Button>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <Button className="btn primary-btn sf-btn" variant="contained" onClick={() => { }}> Save </Button>
                        </div>
                    </div>
                }
            />
        </AppContainer>
    )
}

export default EditCompanyUser;
