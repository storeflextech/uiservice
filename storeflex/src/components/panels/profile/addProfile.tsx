import React, { useState } from 'react';
import { Grid, TextareaAutosize, Button } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import AddressDetails from '../../atoms/addressforms/AddressDetails';
import { BusinessDetails } from '../../../utils/ResponseSchema';
import { validateCharacterLength, validatePhone, validateWebUrl, validateGst } from '../../../utils/CommonUtils';

import Services from '../../../pages/services';


interface AddProfileProps {
    profileData: BusinessDetails;
    onSave?(isSaved: boolean): void;
}

const AddProfile = (props: AddProfileProps) => {

    const [values, setValues] = useState({
        companyname: "",
        companyurl: "",
        phone: "",
        gstid: "",
    });
    const [errors, setErrors] = useState({
        companyname: "",
        companyurl: "",
        phone: "",
        gstid: "",
    });
    const handleChange = (event: any) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const validation = (values: any) => {
        console.log("Values==", values)
        let errors = {
            companyname: "",
            companyurl: "",
            phone: "",
            gstid: "",
        };


        //companyname validation check
        if (!values.companyname) {
            errors.companyname = " *Company Name is required. "
        } else if (!validateCharacterLength(values.companyname, 4, 50)) {
            errors.companyname = " Company Name must be between 4 characters to 50 characters."
        };

        //Company url validation check
        if (!values.companyurl) {
            errors.companyurl = "*Company url is required."
        }
        else if (!validateWebUrl(values.companyurl)) {
            errors.companyurl = " Enter a valid Company Url "
        }

        //Phone number validation check
        if (!values.phone) {
            errors.phone = "*Enter Phone Number"
        }
        else if (!validatePhone(values.phone)) {

            errors.phone = "Enter a valid Phone Number"
        }
        //GstId validation check
        if (!values.gstid) {
            errors.gstid = "*GST number is mandatory"
        }
        else if (!validateGst(values.gstid)) {
            errors.gstid = "Enter a valid GST number"
        }
        return errors;
    }

    const profile = {} as BusinessDetails;
    const [businessProfile, setBusinessProfile] = useState(profile);
    const [profileSaved, setProfileSaved] = useState(false);
    const [charCount, setCharCount] = useState(0);
    const maxiLength = 30;
    const countHandle = (e) => {
        var c = e.target.value.length;
        // var r = maxiLength - c;
        setCharCount(c);
    };

    const onProfileSave = (isSaved: boolean) => {
        if (props?.onSave) {
            return props.onSave(true);
        } else {
            console.log(' No Event ');
        }
    }
    const saveBusinessInfo = () => {
        setErrors(validation(values));
        // const profile = props?.profileData as BusinessDetails; 
        // setBusinessProfile(profile);
        // setProfileSaved(true);
        // onProfileSave(true)
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
    const showSavedProfile = () => {
        return (
            <div className='f-14px'>
                <div>
                    <span>Business Id : </span>
                    <span>{businessProfile.businessid}</span>
                </div>
                <div>
                    <span>Company : </span>
                    <span>{businessProfile.name}</span>
                </div>
                <div>
                    <span>Address : </span>
                    <span>
                        {`${businessProfile.address} : ${businessProfile.city} : ${businessProfile.state} : ${businessProfile.zip}`}
                    </span>
                </div>
                <div>
                    <span>Contact : </span>
                    <span>{businessProfile.phone}</span>
                </div>
            </div>
        )
    }
    const showAddProfile = () => {
        return (
            <div className='m-bot-md'>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'companyname', label: 'Company Name', value: businessProfile.name }}
                            onChange={handleChange} onBlur={handelOnBlur}
                        />
                        {errors.companyname && <p className="text-red">{errors.companyname}</p>}
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'companyurl', label: 'Company URL', value: businessProfile.weburl }}
                            onChange={handleChange} onBlur={handelOnBlur}
                        />
                        {errors.companyurl && <p className="text-red">{errors.companyurl}</p>}
                    </Grid>
                </Grid>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'phone', label: 'Business Phone*', value: businessProfile.phone }}
                            onChange={handleChange} onBlur={handelOnBlur}
                        />
                        {errors.phone && <p className="text-red">{errors.phone}</p>}
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'gstid', label: 'GST Number*', value: businessProfile.gstn }}
                            onChange={handleChange} onBlur={handelOnBlur}
                        />
                        {errors.gstid && <p className="text-red">{errors.gstid}</p>}
                    </Grid>
                </Grid>
            </div>
        )
    }

    const showBusinessAddress = () => {
        return (
            <div className='p-md'>
                <div>{
                    <AddressDetails
                        countryCode={'01'}
                    />}</div>
                <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item xs={12}>
                        <div> Business Description </div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize
                            minRows={3}
                            maxRows={4}
                            maxLength={500}
                            onChange={countHandle}
                            aria-label='Add your business description'
                            placeholder='Add your business description'
                            style={{ width: '100%' }}
                        />
                        <div className='float-md-right'> {charCount}/{maxiLength}</div>
                    </Grid>
                    
                </Grid>
            </div>
        )
    }
    const showBusinessInfo = () => {
        if (profileSaved) {
            return (
                <>{showSavedProfile()}</>
            )
        } else {
            return (
                <>
                    <div className='p-md'>
                        {showAddProfile()}
                    </div>
                    <div className='m-bot-lg'>
                        <div className='primary-gradient m-bot-md'>
                            <div className='font-white p-sm f-18px f-bold'>Business Address</div>
                        </div>
                        {showBusinessAddress()}
                    </div>

                    {<Services/>}

                    <div className='p-top-md align-c'>
                        <Button variant="contained" onClick={() => { alert('Cancel') }}> Cancel </Button>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Button className="btn primary-btn" variant="contained" onClick={() => { saveBusinessInfo() }}> Save </Button>
                    </div>
                </>
            )
        }
    }
    return (
        <div className='m-bot-md'>
            <div className='primary-gradient'>
                <div className='font-white p-sm f-18px f-bold'>Business Information</div>
            </div>
            {showBusinessInfo()}
        </div>
    );
}

export default AddProfile;