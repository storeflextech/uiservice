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

     const profile = {} as EditBusinessDetails;
    const [businessProfile, setBusinessProfile] = useState(profile);
    const [charCount, setCharCount] = useState(0);
    const maxiLength = 30;

    useEffect(() => {
        companyDataFormatter(location.state.editRecord);
    }, [])

    const companyDataFormatter = (data: ClientList) => {
        console.log(' companyDataFormatter >>> ', data);
        let companyDetails: EditBusinessDetails = {
            clientId: data.clientId || '',
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
        } 
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
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'companyname', label: 'Company Name', value: businessProfile.compyName }}
                            onChange={onCompanyNameChange} onBlur={handelOnBlur}
                        />
                       <InputError errorText={companyNameInfo.error}/>
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'companyurl', label: 'Company URL*', value: businessProfile.url }}
                            onChange={onCompanyUrlChange} onBlur={handelOnBlur}
                        />
                        <InputError errorText={companyUrlInfo.error}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'businessphone', label: 'Business Phone*', value: businessProfile.phone }}
                            onChange={onBusinessPhoneChange} onBlur={handelOnBlur}
                        />
                         <InputError errorText={businessPhoneInfo.error}/>
                    </Grid>
                    <Grid item xs={6}>
                        <InputBox data={{ name: 'gstid', label: 'GST Number*', value: businessProfile.gstn }}
                            onChange={onGstIdChange} onBlur={handelOnBlur}
                        />
                        <InputError errorText={gstIdInfo.error}/>
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
                <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item xs={12}>
                        <div> Business Description </div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize
                            minRows={3}
                            maxRows={4}
                            maxLength={500}
                            onChange={onCompanyDescriptionChange}
                            value={businessProfile.compyDesc}
                            aria-label='Add your business description'
                            placeholder='Add your business description'
                            style={{ width: '100%' }}
                        />
                        <div className='float-md-right'> {charCount}/{maxiLength}</div>
                    </Grid>

                </Grid>
            </>
        )
    }

    return (
        <>
             { loader && <LoaderFull /> }
            <div className='m-bot-md'>
                <div className='primary-gradient'>
                    <div className='font-white p-sm f-18px f-bold'>Edit Business Information</div>
                </div>
                <div className='p-md'>
                    {showProfile()}
                </div>
                <div className='primary-gradient'>
                    <div className='font-white p-sm f-18px f-bold'>Edit Business Address</div>
                </div>
                <div className='p-md'>
                    {showBusinessAddress()}
                </div>
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-xl-9 flex-end"></div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                        <button className='btn primary-btn rounded-full' onClick={() => { goToNextPage('/business/view') }} style={{ marginRight: '5px' }}> Cancel </button>
                        <button className="btn primary-btn rounded-full" onClick={() => { onUpdate() }}> Update </button>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default EditBusiness;


