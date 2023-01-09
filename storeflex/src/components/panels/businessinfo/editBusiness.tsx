import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Api from '../../../../src/api/Api';
import swal from 'sweetalert';
import { Grid, TextareaAutosize } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import AddressDetails from '../../atoms/addressforms/AddressDetails';
import { EditBusinessDetails, Address, Contact } from '../../../utils/ResponseSchema';
import { validateCharacterLength, validatePhone, validateWebUrl, validateGst, validateEmail } from '../../../utils/CommonUtils';
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
    const [addressTypeInfo, setAddressTypeInfo] = useState<objectData>({});

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

    const [businessProfile, setBusinessProfile] = useState<AddCompanyPostData>({});

    const businessDescriptionText = 'Add your business description';

    useEffect(() => {
        const chId = location.state.editRecord;
        getWarehouseDataById(chId);
    }, []);

    const getWarehouseDataById = (chId: string) => {
        setLoader(true);
        api.getCompanyById(chId).then((resp) => {
            setLoader(false);
            if (resp.methodReturnValue) {
                companyDataFormatter(resp.methodReturnValue);
            }

        }).catch((error) => {
            setLoader(false);
            console.log(' addWarehouse creation erroor ', error);
        });
    }

    const companyDataFormatter = (data: AddCompanyPostData) => {
        console.log(' companyDataFormatter >>> ', data);
        // const companyDetails = {} as AddCompanyPostData;
        setBusinessProfile(data);
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
        if (!obj.val) {
            obj.error = "This field can not be empty";
        }
        else if (validateEmail(obj.val)) {
            obj.error = '';
        } else {
            obj.error = 'Enter a valid Email'
        }
        setEmailIdInfo(obj);
    }

    const onLandlineExtChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: ''
        } as objectData;
        if (!obj.val) {
            obj.error = 'This field can not be empty';
        } else if (validateCharacterLength(obj.val, 2, 10)) {
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
        if (!obj.val) {
            obj.error = 'This field can not be empty';
        } else if (validateCharacterLength(obj.val, 2, 10)) {
            obj.error = '';
        } else {
            obj.error = 'Emter a valid Landline no'
        }
        setLandLineNoInfo(obj);
    }
    const selectAddressType = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        setAddressTypeInfo(obj);
        // setOnUpdateInfo(true);
    }

    const onAddressUpdate = (data: Address) => {
        const addressData = {} as Address;
        addressData.addressId = data.addressId;
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
        setCompanyDescription(obj);
    }

    const getVal = (obj: objectData) => {
        if (obj.isUpdated) {
            return obj.val
        } else {
            return undefined;
        }
    }

    const onUpdate = () => {
        const postData = {} as AddCompanyPostData;
        postData.clientId = businessProfile.clientId;
        postData.compyName = getVal(companyNameInfo);
        postData.compyDesc = getVal(companyDescription);
        postData.url = getVal(companyUrlInfo);
        postData.gstNo = getVal(gstIdInfo);

        if (Object.keys(companyAddressInfo).length > 0) {
            postData.addresses = [companyAddressInfo];
        };

        const contactInfo = buildContactInfo();
        if (Object.keys(contactInfo).length > 0) {
            contactInfo.contactId = businessProfile?.contact?.[0].contactId;
            postData.contact = [contactInfo]
        };

        setLoader(true);
        api.updateCompany(postData).then((response) => {
            setLoader(false);
            swal('Great! Information updated successfully!', {
                icon: "success",
                buttons: {
                    buttonOne: {
                        text: "OK",
                        visible: true,
                        className: "sf-btn",
                    }
                }
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
                    <Grid item xs={4}>
                        <div style={{ marginBottom: '8px' }}>
                            <div className='pb-2'>Status</div>
                            <select name="addresstype" className="form-control" onChange={selectAddressType}>
                                <option value="ACT">Active</option>
                                <option value="INP">In-Progress</option>
                                <option value="INA">In-Active</option>
                            </select>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <InputBox data={{ name: 'companyname', label: 'Company Name*', value: businessProfile.compyName }}
                            onChange={onCompanyNameChange} onBlur={handelOnBlur}
                        />
                        <InputError errorText={companyNameInfo.error} />

                        <InputBox data={{ name: 'companyurl', label: 'Company URL*', value: businessProfile.url }}
                            onChange={onCompanyUrlChange} onBlur={handelOnBlur}
                        />
                        <InputError errorText={companyUrlInfo.error} />

                        <InputBox data={{ name: 'gstid', label: 'GST Number*', value: businessProfile.gstNo }}
                            onChange={onGstIdChange} onBlur={handelOnBlur}
                        />
                        <InputError errorText={gstIdInfo.error} />

                        <Grid item xs={12}>
                            <div> Business Description </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                minRows={3}
                                maxRows={4}
                                maxLength={maxiLength}
                                onChange={onCompanyDescriptionChange}
                                aria-label={businessDescriptionText}
                                placeholder={businessProfile.compyDesc || businessDescriptionText}
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
        const addInfo = businessProfile.addresses?.[0];
        if (addInfo) {
            return (
                <div className='p-md'>
                    {
                        <AddressDetails
                            countryCode={selectedCountryCode}
                            onUpdate={onAddressUpdate}
                            data={addInfo}
                        />
                    }
                </div>
            )
        } else {
            return (<></>)
        }
    }

    const showCompanyContact = () => {
        const contactData = businessProfile?.contact?.[0];
        return (
            <div>
                <div className='m-bot-md'>
                    <div className='m-bot-md p-md'>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={12}>
                                <InputBox data={{ name: 'contactname', label: 'Contact Name*', value: contactData?.contactName }}
                                    onChange={onContactNameChange}
                                />
                                {contactNameInfo.error && <p className="text-red">{contactNameInfo.error}</p>}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={6}>
                                <InputBox data={{ type: 'number', name: 'mobileno', label: 'Mobile No.*', value: contactData?.mobileNo }}
                                    onChange={onMobileNoChange}
                                />
                                {mobileNoInfo.error && <p className="text-red">{mobileNoInfo.error}</p>}
                            </Grid>
                            <Grid item xs={6} >
                                <InputBox data={{ name: 'emailid', label: 'Email*', value: contactData?.emailId }}
                                    onChange={onEmailIdChange}
                                />
                                {emailIdInfo.error && <p className="text-red">{emailIdInfo.error}</p>}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} className='p-top-md'>
                            <Grid item xs={6}>
                                <InputBox data={{ type: 'number', name: 'landlineext', label: 'Landline Extension*', value: contactData?.landLineExt }}
                                    onChange={onLandlineExtChange} />
                                {landLineExtInfo.error && <p className="text-red">{landLineExtInfo.error}</p>}
                            </Grid>
                            <Grid item xs={6}>
                                <InputBox data={{ type: 'number', name: 'landlineno', label: 'Landline No.*', value: contactData?.landLine }}
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
            {loader && <LoaderFull />}
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='sf-ac'>
                        <div className='primary-gradient w100'>
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
                        <div className='primary-gradient w100'>
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
                        <div className='primary-gradient w100'>
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


