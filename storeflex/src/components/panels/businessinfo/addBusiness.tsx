import React, { useState } from 'react';
import { Grid, TextareaAutosize, Button } from '@mui/material';
import swal from 'sweetalert';
import InputBox from '../../atoms/textfield/InputBox';
import Accordion from 'react-bootstrap/Accordion';
import AddressDetails from '../../atoms/addressforms/AddressDetails';
import { BusinessDetails } from '../../../utils/ResponseSchema';
import { validateCharacterLength, validatePhone, validateWebUrl, validateGst } from '../../../utils/CommonUtils';
import Api from '../../../../src/api/Api';
import { AddCompanyProps } from '../../../../src/api/ApiConfig';
import LoaderSpinner from '../../atoms/spinner/spinner';

interface AddBusinessProps {
    profileData?: BusinessDetails;
    onSave?(isSaved: boolean): void;
    action?: string;
}

const companyData = {
    compyName: "My Company112",
    compyDesc: "Company located at guwahati. Baki details najanu",
    photoName: "Display Image",
    url: "https://namnothokacompany.com",
    updatedBy: "Mithu Zaman",
    status: true,
    addresses: [
        {
            addressType: "Official",
            plotNo: "420",
            houseNo: "120",
            streetDetails: "Silpukhuri Street ",
            city: "Guwahati",
            state: "Assam",
            country: "India",
            pincode: "781003",
            createBy: "Admin",
            updatedBy: "Admin"
        }
    ],
    contact: [
        {
            contactName: "Micheal John",
            mobileNo: "9988776655",
            landLine: "0361-23022",
            landLineExt: "0361",
            emailId: "contact@storeflex.com",
            createBy: "Admin",
            updatedBy: "Admin",
        }
    ]
}

const AddBusiness = (props: AddBusinessProps) => {
    const api = new Api();
    const [step, setStep] = useState(1);
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
    const [isLoader, setLoaderState] = useState(false);
    const [businessProfile, setBusinessProfile] = useState(profile);
    const [profileSaved, setProfileSaved] = useState(false);
    const [charCount, setCharCount] = useState(0);
    const maxiLength = 500;
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
        // setErrors(validation(values));
        const data: AddCompanyProps = companyData;
        api.addCompany(data).then((response) => {
            console.log(' Company creation res >>>>>> ', response);

        });
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
                        <InputBox data={{ name: 'companyname', label: 'Company Name*', value: businessProfile.name }}
                            onChange={handleChange} onBlur={handelOnBlur}
                        />
                        {errors.companyname && <p className="text-red">{errors.companyname}</p>}
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'companyurl', label: 'Company URL', value: businessProfile.weburl }}
                            onChange={handleChange} onBlur={handelOnBlur}
                        />
                        {/* {errors.companyurl && <p className="text-red">{errors.companyurl}</p>} */}
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
                <Grid>
                    <Grid>
                        <InputBox data={{ name: 'companyname', label: 'Company Name*', value: businessProfile.name }}
                            onChange={handleChange} onBlur={handelOnBlur} />
                        {/* {errors.companyname && <p className="text-red">{errors.companyname}</p>} */}
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
                        zip={businessProfile.zip}
                        country={businessProfile.country}
                    />}</div>
                <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item xs={12}>
                        <div> Business Description </div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize
                            minRows={3}
                            maxRows={10}
                            maxLength={maxiLength}
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
                            <div className='font-white p-sm f-18px f-bold'>Company Address</div>
                        </div>
                        ({showBusinessAddress()}
                    </div>
                    <div className='p-top-md align-c'>
                        <Button className='sf-btn' variant="contained" onClick={() => { alert('Cancel') }}> Cancel </Button>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Button className="btn primary-btn sf-btn" variant="contained" onClick={() => { saveBusinessInfo() }}> Save </Button>
                    </div>
                </>
            )
        }
    }

    const onSave = (step: any) => {
        switch (step) {
            case 1:
                console.log("businessProfile=", values)
                setLoaderState(false);
                setStep(2);
                break;
            case 2: setLoaderState(false); setStep(3); break;
            case 3:
                swal('Success! Your company has been created successfully!', {
                    icon: "success",
                });
                break;
        }
    }

    const CompanyInformation = () => {
        return (
            <div>
                <div className='m-bot-md'>

                    <div className='m-bot-md p-md'>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                            <Grid item xs={9}>
                                <InputBox data={{ name: 'companyname', label: 'Company Name*', value: businessProfile.name }}
                                    onChange={handleChange} onBlur={handelOnBlur}
                                />
                                {errors.companyname && <p className="text-red">{errors.companyname}</p>}

                                <InputBox data={{ name: 'companyurl', label: 'Company URL*', value: businessProfile.weburl }}
                                    onChange={handleChange} onBlur={handelOnBlur}
                                />
                                {errors.companyurl && <p className="text-red">{errors.companyurl}</p>}

                                <InputBox data={{ name: 'gstid', label: 'GST Number*', value: businessProfile.gstn }}
                                    onChange={handleChange} onBlur={handelOnBlur}
                                />
                                {errors.gstid && <p className="text-red">{errors.gstid}</p>}

                                <Grid item xs={12}>
                                    <div> Business Description </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextareaAutosize
                                        minRows={3}
                                        maxRows={4}
                                        maxLength={maxiLength}
                                        onChange={countHandle}
                                        aria-label='Add your business description'
                                        placeholder='Add your business description'
                                        style={{ width: '100%' }}
                                    />
                                    <div className='float-md-right'> {charCount}/{maxiLength}</div>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <InputBox data={{ name: 'companyurl', label: 'Photo Name', value: businessProfile.weburl }}
                                    onChange={handleChange} onBlur={handelOnBlur}
                                />
                                {errors.companyurl && <p className="text-red">{errors.companyurl}</p>}
                                <img src="/assets/images/placeholder.png" alt="Image" style={{ width: '100%', height: '25vh', marginTop: '10px' }} />
                                <input type="file" className="form-control" />

                            </Grid>
                        </Grid>
                    </div>
                </div>
                
            </div>
        );
    }

    const AddressInformation = () => {
        return (
            <div>
                <div className='m-bot-md'>
                    
                    <div className='p-md'>
                        {
                            <AddressDetails
                                addresLine1={businessProfile.address}
                                city={businessProfile.city}
                                state={businessProfile.state}
                                zip={businessProfile.zip}
                                country={businessProfile.country}
                            />}
                    </div>
                </div>
            </div>
        );
    }

    const ValidateContactDetails = () => {

    }
    const ContactInformation = () => {
        return (
            <div>
                <div className='m-bot-md'>
                    <div className='m-bot-md p-md'>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={12}>
                                <InputBox data={{ name: 'addressLine1', label: 'Contact Name*', value: '' }}
                                    onChange={ValidateContactDetails}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={6}>
                                <InputBox data={{ name: 'cityname', label: 'Mobile No.*', value: '' }}
                                    onChange={ValidateContactDetails}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <InputBox data={{ name: 'addressLine1', label: 'Email*', value: '' }}
                                    onChange={ValidateContactDetails}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={6}>
                                <InputBox data={{ name: 'zipcode', label: 'Landline Extension*', value: '' }}
                                    onChange={ValidateContactDetails} />
                            </Grid>
                            <Grid item xs={6}>
                                <InputBox data={{ name: 'cityname', label: 'Landline No.*', value: '' }}
                                    onChange={ValidateContactDetails}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </div>
               
            </div>
        );
    }

    return (
        <>
            {isLoader && (
                <LoaderSpinner />
            )}
            {/* {step == 1 && (
                <> {CompanyInformation()}</>
            )}
            {step == 2 && (
                <> {AddressInformation()}</>
            )}
            {step == 3 && (
                <> {ContactInformation()}</>
            )} */}
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className='primary-gradient'>
                        <div className='font-white p-sm f-18px f-bold'>Company Information</div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <> {CompanyInformation()}</>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    <div className='primary-gradient'>
                        <div className='font-white p-sm f-18px f-bold'>Address Information</div>
                    </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <> {AddressInformation()}</>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                    <div className='primary-gradient'>
                        <div className='font-white p-sm f-18px f-bold'>Contact Information</div>
                    </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <> {ContactInformation()}</>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className='p-md align-r' style={{ float: 'right' }}>
                    <button className='btn primary-btn-outline rounded-full' onClick={() => { setStep(2) }}> Cancel </button>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <button className="btn primary-btn rounded-full" onClick={() => { onSave(3) }}> Save </button>
                </div>
        </>

    );
}

export default AddBusiness;