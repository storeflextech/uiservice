import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import swal from 'sweetalert';
import { Grid, TextareaAutosize, Button } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import AddressDetails from '../../atoms/addressforms/AddressDetails';
import { BusinessDetails, EditBusinessDetails } from '../../../utils/ResponseSchema';
import { validateCharacterLength, validatePhone, validateWebUrl, validateGst } from '../../../utils/CommonUtils';


interface EditBusinessProps {
    profileData?: EditBusinessDetails;
    onSave?(isSaved: boolean): void;
    action?: string;
}

const EditBusiness = (props: EditBusinessProps) => {
    const navigate = useNavigate();
    const location = useLocation();

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

    const profile = {} as EditBusinessDetails;
    const [businessProfile, setBusinessProfile] = useState(profile);
    const [profileSaved, setProfileSaved] = useState(false);
    const [charCount, setCharCount] = useState(0);
    const maxiLength = 30;

    useEffect(() => {
        companyDataFormatter(location.state.editRecord);
    }, [])

    const companyDataFormatter = (data: any) => {
        console.log(data);
        let companyDetails: any = {
            clientId: data.clientId,
            compyName: data.compyName,
            compyDesc: data.compyDesc,
            url: data.url,
            phone: data.contact[0].mobileNo,
            gstn: 'NA',
            address: data.addresses[0].streetDetails,
            pincode: data.addresses[0].pincode,
            city: data.addresses[0].city,
            state: 'NA',
            country: 'NA'
        }
        setBusinessProfile(companyDetails);
    }

    const countHandle = (e) => {
        var c = e.target.value.length;
        // var r = maxiLength - c;
        setCharCount(c);
    };

    const goToNextPage = (pagePath: string) => {
        navigate(pagePath);
    }

    const onProfileSave = (isSaved: boolean) => {
        if (props?.onSave) {
            return props.onSave(true);
        } else {
            console.log(' No Event ');
        }
    }


    const handelOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        console.log(' #### name ', name);
        console.log(' #### name ', value);
    }

    const handleUpdate = () => {
        swal({
            title: "Good job!",
            text: "Business record has been updated successfully",
            icon: "success",
            dangerMode: false,
        })
            .then(willUpdate => {
                if (willUpdate) {
                    goToNextPage('/business/view');
                }
            });
    }

    const showAddProfile = () => {
        return (
            <div className='m-bot-md'>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'companyname', label: 'Company Name', value: businessProfile.compyName }}
                            onChange={handleChange} onBlur={handelOnBlur}
                        />
                        {errors.companyname && <p className="text-red">{errors.companyname}</p>}
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'companyurl', label: 'Company URL', value: businessProfile.url }}
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
                        addresLine1={businessProfile.address}
                        city={businessProfile.city}
                        state={businessProfile.state}
                        zip={businessProfile.pincode}
                        country={businessProfile.country}
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
                            value={businessProfile.compyDesc}
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

    return (
        <div className='m-bot-md'>
            <div className='primary-gradient'>
                <div className='font-white p-sm f-18px f-bold'>Edit Business Information</div>
            </div>
            <>{showAddProfile()}</>
            <div className='primary-gradient'>
                <div className='font-white p-sm f-18px f-bold'>Edit Business Address</div>
            </div>
            <>{showBusinessAddress()}</>
            <div className="row">
                <div className="col-md-9 col-lg-9 col-xl-9 flex-end"></div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <button className='btn primary-btn-outline rounded-full' onClick={() => { goToNextPage('/business/view') }} style={{ marginRight: '5px' }}> Cancel </button>
                    <button className="btn primary-btn rounded-full" onClick={() => { handleUpdate() }}> Update </button>
                </div>
            </div>
        </div>
    );
}

export default EditBusiness;


