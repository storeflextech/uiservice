import React, { useState } from 'react';
import { Grid } from '@mui/material';
import AddressDetails from '../components/atoms/addressforms/AddressDetails';
import InputBox from '../components/atoms/textfield/InputBox';
import { UserType, CompanyName } from '../components/atoms/adduser/UserHelper';
import { validateCharacterLength, validateSpecialCharExistance, validatePhone } from '../utils/CommonUtils';
import { Button } from '@mui/material';
import GetCompany from '../components/atoms/company/GetCompany';
import { Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import TopNavBar from '../components/navbar/TopNavBar';
import SideNavBar from '../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';
import Footer from '../components/footer/footer';
import { getUserType } from '../utils/CommonUtils';
import { viewUserProps } from '../api/ApiConfig';
import Api from '../api/Api';
import DeleteUser from './deleteuser';
import { isTypeNode } from 'typescript';
import { DeletsButton, EditButton } from '../components/buttons/buttons';
import swal from 'sweetalert';

const EditCompanyUser = () => {
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
                <Grid item xs={6}>
                    <div> User Type </div>
                    <div className='p-top-md'>
                        {<UserType />}
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div>Company</div>
                    <div className='p-top-md'>
                        {<GetCompany />}
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div>Profile Photo</div>
                    <div className='p-top-md'>
                        <input type="file" className="form-control" />
                    </div>
                </Grid>
            </Grid>
        )
    }

    const userInfo = () => {
        return (
            <div className='p-top-md'>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={6}>

                        <InputBox data={{ name: 'firstname', label: 'First  Name*', value: values.FirstName }}
                            onChange={validateFirstName} onBlur={handelOnBlur}
                        />
                        {errors.FirstName && <p className="text-red">{errors.FirstName}</p>}
                    </Grid>

                    <Grid item xs={6}>
                        <InputBox data={{ name: 'lastname', label: 'Last  Name*', value: values.LastName }}
                            onChange={validateLastName} onBlur={handelOnBlur}
                        />
                        {errors.LastName && <p className="text-red">{errors.LastName}</p>}
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'phone', label: 'Phone*', value: values.Phone }}
                            onChange={validatePhone} onBlur={handelOnBlur}
                        />
                        {errors.Phone && <p className="text-red">{errors.Phone}</p>}
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'email', label: 'Email*', value: values.LastName }}
                            onChange={validateLastName} onBlur={handelOnBlur}
                        />
                        {errors.LastName && <p className="text-red">{errors.LastName}</p>}
                    </Grid>
                </Grid>
            </div>

        )
    }
    const addAddress = () => {
        return (
            <div className='p-top-md'>
                <div>{
                    <AddressDetails
                        addresLine1={''}
                        city={''}
                        state={''}
                        zip={''}
                        country={''}
                        countryCode={'01'}
                    />}</div>
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
            <Footer />
        </AppContainer>
    )
}

export default EditCompanyUser;