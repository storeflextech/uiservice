import React, { useState } from 'react';
import { Grid, TextareaAutosize } from '@mui/material';
import swal from 'sweetalert';
import InputBox from '../../atoms/textfield/InputBox';
import { InputError } from '../../atoms/textfield/InputError';
import Accordion from 'react-bootstrap/Accordion';
import AddressDetails from '../../atoms/addressforms/AddressDetails';
import { BusinessDetails } from '../../../utils/ResponseSchema';
import { validateCharacterLength, validatePhone, validateWebUrl, validateGst } from '../../../utils/CommonUtils';
import Api from '../../../../src/api/Api';
import { AddCompanyPostData } from '../../../../src/api/ApiConfig';
import LoaderSpinner from '../../atoms/spinner/spinner';

interface AddBusinessProps {
    profileData?: BusinessDetails;
    onSave?(isSaved: boolean): void;
    action?: string;
}

const AddBusiness = (props: AddBusinessProps) => {
    const api = new Api();
    const [step, setStep] = useState(1);
    const profile = {} as BusinessDetails;
    const [businessProfile, setBusinessProfile] = useState(profile);
    const [isLoader, setLoaderState] = useState(false);
    const [charCount, setCharCount] = useState(0);
    const maxiLength = 500;
    const countHandle = (e) => {
        var c = e.target.value.length;
        // var r = maxiLength - c;
        setCharCount(c);
    };

    const [companyInfo, setCompanyInfo] = useState({
        companyname: "",
        companyurl: "",
        phone: "",
        gstid: "",
    });
    
    const companyInfoOnChange = (event: any) => {
        setCompanyInfo({
            ...companyInfo,
            [event.target.name]: event.target.value,
        });
    };

    const validateCompanyInfo = () => {
        let errors = {
            companyname: "",
            companyurl: "",
            phone: "",
            gstid: "",
        };

        //companyname validation check
        if (!companyInfo.companyname) {
            errors.companyname = " *Company Name is required. ";
        } else if (!validateCharacterLength(companyInfo.companyname, 4, 50)) {
            errors.companyname = " Company Name must be between 4 characters to 50 characters."
        };

        //Company url validation check
        if (!companyInfo.companyurl) {
            errors.companyurl = "*Company url is required."
        }
        else if (!validateWebUrl(companyInfo.companyurl)) {
            errors.companyurl = " Enter a valid Company Url "
        }

        //Phone number validation check
        if (!companyInfo.phone) {
            errors.phone = "*Enter Phone Number"
        }
        else if (!validatePhone(companyInfo.phone)) {

            errors.phone = "Enter a valid Phone Number"
        }
        //GstId validation check
        if (!companyInfo.gstid) {
            errors.gstid = "*GST number is mandatory"
        }
        else if (!validateGst(companyInfo.gstid)) {
            errors.gstid = "Enter a valid GST number"
        }
        return errors;
    }

    const validateContactDetails = () => {
        let errors = {
            companyname: "",
            companyurl: "",
            phone: "",
            gstid: "",
        };
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

    const onSave = (step: any) => {

        const postData = {} as AddCompanyPostData ;
        postData.compyName = companyInfo.companyname;
        postData.compyDesc = 'Testing';
        postData.url = companyInfo.companyurl;
        postData.gstNo = companyInfo.gstid;
    
        console.log(' @@@@@ >>> ', postData);
        // api.addCompany(postData).then((response) => {
        //     console.log(' Company creation res >>>>>> ', response);
        // }).catch((error)=>{
        //     console.log(' Company creation erroor ', error);
        // });

        switch (step) {
            case 1:
                // console.log("businessProfile=", values)
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

    const onAddressUpdate = (data: any) => {
        console.log(' @@@@@@@@@@ >>>> ', data);
    }

    const showCompanyInformation = () => {
        const errors = validateCompanyInfo();
        return (
            <div>
                <div className='m-bot-md'>
                    <div className='m-bot-md p-md'>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                            <Grid item xs={9}>
                                <InputBox data={{ name: 'companyname', label: 'Company Name*', value: businessProfile.name }}
                                    onChange={companyInfoOnChange} onBlur={handelOnBlur}
                                />
                                <InputError errorText={errors.companyname}/>

                                <InputBox data={{ name: 'companyurl', label: 'Company URL*', value: businessProfile.weburl }}
                                    onChange={companyInfoOnChange} onBlur={handelOnBlur}
                                />
                                {errors.companyurl && <p className="text-red">{errors.companyurl}</p>}

                                <InputBox data={{ name: 'gstid', label: 'GST Number*', value: businessProfile.gstn }}
                                    onChange={companyInfoOnChange} onBlur={handelOnBlur}
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
                                    onChange={companyInfoOnChange} onBlur={handelOnBlur}
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
    const showAddressInformation = () => {
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
                                onUpdate={onAddressUpdate}
                            />}
                    </div>
                </div>
            </div>
        );
    }
    const showContactInformation = () => {
        return (
            <div>
                <div className='m-bot-md'>
                    <div className='m-bot-md p-md'>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={12}>
                                <InputBox data={{ name: 'addressLine1', label: 'Contact Name*', value: '' }}
                                    onChange={validateContactDetails}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={6}>
                                <InputBox data={{ name: 'cityname', label: 'Mobile No.*', value: '' }}
                                    onChange={validateContactDetails}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <InputBox data={{ name: 'addressLine1', label: 'Email*', value: '' }}
                                    onChange={validateContactDetails}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={6}>
                                <InputBox data={{ name: 'zipcode', label: 'Landline Extension*', value: '' }}
                                    onChange={validateContactDetails} />
                            </Grid>
                            <Grid item xs={6}>
                                <InputBox data={{ name: 'cityname', label: 'Landline No.*', value: '' }}
                                    onChange={validateContactDetails}
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
                        <> {showCompanyInformation()}</>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    <div className='primary-gradient'>
                        <div className='font-white p-sm f-18px f-bold'>Address Information</div>
                    </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <> {showAddressInformation()}</>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                    <div className='primary-gradient'>
                        <div className='font-white p-sm f-18px f-bold'>Contact Information</div>
                    </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <> {showContactInformation()}</>
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