import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Api from '../../../../src/api/Api';
import swal from 'sweetalert';
import { Grid, TextareaAutosize, Button } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import AddressDetails from '../../atoms/addressforms/AddressDetails';
import { BusinessDetails, EditBusinessDetails, ClientList, Address, Contact} from '../../../utils/ResponseSchema';
import { validateCharacterLength, validatePhone, validateWebUrl, validateGst } from '../../../utils/CommonUtils';
import { LoaderFull } from '../../atoms/loader/loader';
import { objectData } from '../../../utils/ResponseSchema';
import { InputError } from '../../atoms/textfield/InputError';
import { AddCompanyPostData } from '../../../../src/api/ApiConfig';
import Accordion from 'react-bootstrap/Accordion';



interface EditBusinessProps {
    profileData?: EditBusinessDetails;
    onSave?(isSaved: boolean): void;
    action?: string;
}

const EditBusiness = (props: EditBusinessProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const api = new Api();
    const selectedCountryCode = '01';
    const [loader, setLoader] = useState(false);

    const [companyNameInfo, setCompanyNameInfo] = useState<objectData>({});
    const [companyUrlInfo, setCompanyUrlInfo] = useState<objectData>({});
    const [businessPhoneInfo, setBusinessPhoneInfo] = useState<objectData>({});
    const [gstIdInfo, setGstIdInfo] = useState<objectData>({});

    // Address Information 
    const [companyAddressInfo, setCompanyAddressInfo] = useState<Address>({});
    const [companyDescription, setCompanyDescription] = useState<objectData>({});

    //Contact Information
    const [contactNameInfo, setContactNameInfo] = useState<objectData>({});
    const [mobileNoInfo, setMobileNoInfo] = useState<objectData>({});
    const [emailIdInfo, setEmailIdInfo] = useState<objectData>({});
    const [landLineExtInfo, setLandLineExtInfo] = useState<objectData>({});
    const [landLineNoInfo, setLandLineNoInfo] = useState<objectData>({});

    const maxiLength = 500;

     const profile = {} as EditBusinessDetails;
    const [businessProfile, setBusinessProfile] = useState(profile);
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        companyDataFormatter(location.state.editRecord);
    }, [])

    const companyDataFormatter = (data: ClientList) => {
        console.log(' companyDataFormatter >>> ', data);
        let companyDetails: EditBusinessDetails = {
            clientId: data.clientId || '',
            addressId: data.addresses[0].addressId || '',
            contactId: data.contact[0].contactId || '',
            compyName: data.compyName || '',
            compyDesc: data.compyDesc || '',
            url: data.url || '',
            phone: data.contact[0]?.mobileNo || '',
            gstn: data.gstNo || '',
            address: data.addresses[0].streetDetails || '',
            pincode: data.addresses[0].pincode || '',
            city: data.addresses[0].city || '',
            state: data.addresses[0].state || '',
            country: 'IND'
        }
        setBusinessProfile(companyDetails);
    }

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

    // const handleUpdate = () => {
    //     swal({
    //         title: "Good job!",
    //         text: "Business record has been updated successfully",
    //         icon: "success",
    //         dangerMode: false,
    //     })
    //     .then(willUpdate => {
    //         if (willUpdate) {
    //             goToNextPage('/business/view');
    //         }
    //     });
    // }

    const onCompanyNameChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        if (!obj.val) {
            obj.error = " *Company Name is required. ";
        } else if (!validateCharacterLength(obj.val, 4, 50)) {
            obj.error = " Company Name must be between 4 characters to 50 characters."
        } else {
            obj.error = '';
        }
        setCompanyNameInfo(obj);
    }

    const onCompanyUrlChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        if (!obj.val) {
            obj.error = "*Company url is required."
        } else if (!validateWebUrl(obj.val)) {
            obj.error = " Enter a valid Company Url "
        } else {
            obj.error = '';
        }
        setCompanyUrlInfo(obj);
    }

    const onBusinessPhoneChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        if (validatePhone(obj.val)) {
            obj.error = '';
        } else {
            obj.error = 'Enter a valid  10 Digit Phone Number only'
        }
        setBusinessPhoneInfo(obj);
    }

    const onGstIdChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        if (!obj.val) {
            obj.error = "*GST number is mandatory"
        } else if (!validateGst(obj.val)) {
            obj.error = "Enter a valid GST number"
        } else {
            obj.error = '';
        }
        setGstIdInfo(obj);
    }

    const onContactNameChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: ''
        } as objectData;
        if (validateCharacterLength(obj.val, 4, 30)) {
            obj.error = '';
        } else {
            obj.error = 'Alphabets only'
        }
        setContactNameInfo(obj);
    }
    const onMobileNoChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: ''
        } as objectData;
        if (validatePhone(obj.val)) {
            obj.error = '';
        } else {
            obj.error = '10 Digit Number only'
        }
        setMobileNoInfo(obj);
    }

    const onEmailIdChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: ''
        } as objectData;
        if (validateCharacterLength(obj.val, 4, 30)) {
            obj.error = '';
        } else {
            obj.error = 'Alphabets only'
        }
        setEmailIdInfo(obj);
    }

    const onLandlineExtChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: ''
        } as objectData;
        if (validateCharacterLength(obj.val, 2, 10)) {
            obj.error = '';
        } else {
            obj.error = 'Number only'
        }
        setLandLineExtInfo(obj);
    }
    const onLandlineNoChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: ''
        } as objectData;
        if (validateCharacterLength(obj.val, 2, 10)) {
            obj.error = '';
        } else {
            obj.error = 'Number only'
        }
        setLandLineNoInfo(obj);
    }

    const onAddressUpdate = (data: Address) => {
        const addressData = {} as Address;
        addressData.addressType = data.addressType;
        addressData.city = data.city;
        addressData.country = data.country;
        addressData.state = data.state;
        addressData.pincode = data.pincode;
        addressData.plotNo = data.plotNo;
        addressData.houseNo = data.houseNo;
        addressData.streetDetails = data.streetDetails;
        setCompanyAddressInfo(addressData);
    }

    const buildContactInfo = () => {
        const contactInfo = {} as Contact;
        contactInfo.contactName = contactNameInfo.val;
        contactInfo.mobileNo = mobileNoInfo.val;
        contactInfo.emailId = emailIdInfo.val;
        contactInfo.landLineExt = landLineExtInfo.val;
        contactInfo.landLine = landLineNoInfo.val;
        return contactInfo;
    }

    const onCompanyDescriptionChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        // if (!obj.val) {
        //     obj.error = "*GST number is mandatory"
        // } else if (!validateGst(obj.val)) {
        //     obj.error = "Enter a valid GST number"
        // } else {
        //     obj.error = '';
        // }
        setCompanyDescription(obj);
    }
 
    // const buildContactInfo = () => {
    //     const contactInfo = {} as Contact;
    //     // contactInfo.contactName = contactNameInfo.val;
    //     // contactInfo.mobileNo = mobileNoInfo.val;
    //     // contactInfo.emailId = emailIdInfo.val;
    //     // contactInfo.landLineExt = landLineExtInfo.val;
    //     // contactInfo.landLine = landLineNoInfo.val;
    //     return contactInfo;
    // }

    const getVal = (obj: objectData) => {
        if(obj.isUpdated) {
            return obj.val
        } else {
            return undefined;
        }
    }

    const onUpdate = () => {
        const postData = {} as AddCompanyPostData ;
        postData.clientId = businessProfile.clientId;
        postData.compyName = getVal(companyNameInfo);
        postData.compyDesc = getVal(companyDescription);
        postData.url = getVal(companyUrlInfo);
        postData.gstNo = getVal(gstIdInfo);
        if( Object.keys(companyAddressInfo).length > 0) {
            postData.addresses = [companyAddressInfo];
            postData.addresses[0].addressId = businessProfile.addressId;
        };
        postData.contact = [buildContactInfo()]
        // postData.contact = [ buildContactInfo()];
        
        setLoader(true);
        api.updateCompany(postData).then((response) => {
            setLoader(false);
            swal('Great! Information updated successfully!', {
                icon: "success",
            }).then(willUpdate => {
                if (willUpdate) {
                    goToNextPage('/business/view');
                }
            });
            console.log(' Company creation res >>>>>> ', response);
        }).catch((error) => {
            setLoader(false);
            console.log(' Company Edit Inforamtion erroor ', error);
        });
    }

    const showProfile = () => {
        return (
            <div className='m-bot-md'>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                            <Grid item xs={9}>
                                <InputBox data={{ name: 'companyname', label: 'Company Name*', value: businessProfile.compyName }}
                                    onChange={onCompanyNameChange} onBlur={handelOnBlur}
                                />
                                <InputError errorText={companyNameInfo.error}/>

                                <InputBox data={{ name: 'companyurl', label: 'Company URL*', value: businessProfile.url }}
                                    onChange={onCompanyUrlChange} onBlur={handelOnBlur}
                                />
                                 <InputError errorText={companyUrlInfo.error}/>

                                <InputBox data={{ name: 'gstid', label: 'GST Number*', value: businessProfile.gstn }}
                                    onChange={onGstIdChange} onBlur={handelOnBlur}
                                />
                                <InputError errorText={gstIdInfo.error}/>
                                
                                <Grid item xs={12}>
                                    <div> Business Description </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextareaAutosize
                                        minRows={3}
                                        maxRows={4}
                                        maxLength={maxiLength}
                                        onChange={onCompanyDescriptionChange}
                                        aria-label='Add your business description'
                                        placeholder='Add your business description'
                                        style={{ width: '100%' }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <InputBox data={{ name: 'photoname', label: 'Photo Name', value: businessProfile.url }}
                                     onBlur={handelOnBlur}
                                />
                                <img src="/assets/images/placeholder.png" alt="Image" style={{ width: '100%', height: '25vh', marginTop: '10px' }} />
                                <input type="file" className="form-control" />
                            </Grid>
                        </Grid>
            </div>
        )
    }

    const showBusinessAddress = () => {
        return (
            <>
                <div className='p-md'>
                    {
                        <AddressDetails
                            addresLine1={businessProfile.address}
                            city={businessProfile.city}
                            state={businessProfile.state}
                            zip={businessProfile.pincode}
                            country={'01'}
                            countryCode={selectedCountryCode}
                            onUpdate={onAddressUpdate}
                        />
                    }
                </div>
            </>
        )
    }

    const showCompanyContact = () => {
        return (
            <div>
                <div className='m-bot-md'>
                    <div className='m-bot-md p-md'>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={12}>
                                <InputBox data={{ name: 'contactname', label: 'Contact Name*', value: '' }}
                                    onChange={onContactNameChange}
                                />
                                 {contactNameInfo.error && <p className="text-red">{contactNameInfo.error}</p>}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={6}>
                                <InputBox data={{ type: 'number', name: 'mobileno', label: 'Mobile No.*', value: '' }}
                                    onChange={onMobileNoChange}
                                />
                                {mobileNoInfo.error && <p className="text-red">{mobileNoInfo.error}</p>}
                            </Grid>
                            <Grid item xs={6} >
                                <InputBox data={{ name: 'emailid', label: 'Email*', value: '' }}
                                    onChange={onEmailIdChange}
                                />
                                {emailIdInfo.error && <p className="text-red">{emailIdInfo.error}</p>}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={6}>
                                <InputBox data={{ type: 'number', name: 'landlineext', label: 'Landline Extension*', value: '' }}
                                    onChange={onLandlineExtChange} />
                                {landLineExtInfo.error && <p className="text-red">{landLineExtInfo.error}</p>}
                            </Grid>
                            <Grid item xs={6}>
                                <InputBox data={{ type: 'number', name: 'landlineno', label: 'Landline No.*', value: '' }}
                                    onChange={onLandlineNoChange}
                                />
                                 {landLineNoInfo.error && <p className="text-red">{landLineNoInfo.error}</p>}
                            </Grid>
                        </Grid>
                    </div>
                </div>
               
            </div>
        );
    }

    return (
        <>
             { loader && <LoaderFull /> }
             <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='sf-ac'>
                <div className='primary-gradient'>
                    <div className='font-white p-sm f-18px f-bold'>Edit Business Information</div>
                </div>
                </Accordion.Header>
                <Accordion.Body>
                <div className='p-md'>
                    {showProfile()}
                </div>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='sf-ac'>
                <div className='primary-gradient'>
                    <div className='font-white p-sm f-18px f-bold'>Edit Business Address</div>
                </div>
                </Accordion.Header>
                    <Accordion.Body>
                <div className='p-md'>
                    {showBusinessAddress()}
                </div>
                </Accordion.Body>
                </Accordion.Item> 
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='sf-ac'>
                    <div className='primary-gradient'>
                        <div className='font-white p-sm f-18px f-bold'>Edit Contact Information</div>
                    </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <> {showCompanyContact()}</>
                    </Accordion.Body>
                </Accordion.Item>  
                </Accordion>
                <div className='p-md align-r' style={{ float: 'right' }}>
                        <button className='btn primary-btn rounded-full' onClick={() => { goToNextPage('/business/view') }} style={{ marginRight: '5px' }}> Cancel </button>
                        <button className="btn primary-btn rounded-full" onClick={() => { onUpdate() }}> Update </button>
                    </div>

        </>
        
    );
}

export default EditBusiness;


