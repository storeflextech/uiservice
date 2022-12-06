import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import GetCountry from '../country/GetCountry';
import GetState from '../state/GetState';
import GetCity from '../city/GetCity';
import InputBox from '../textfield/InputBox';
import Api from '../../../../src/api/Api';

import { validateCity, validateCharacterLength, validatePinCode } from "../../../utils/CommonUtils";


interface AddressDetailsProps {
    addresLine1: string;
    city: string;
    state: string;
    zip: string | number;
    countryCode?: string;
    country?: string;
    onUpdate?: (data: any) => void;
}

interface AddressDetailsPostData {
    addressType: string;
    countryCode: string;
    stateCode: string;
    cityCode: string;
    pincode: string;
    address: string;
}
const AddressDetails = (props: AddressDetailsProps) => {
    const api = new Api();
    const [countryCode, setCountryCode] = useState('01');
    const [state, setState] = useState('ASM');
    const [address, setErrorsAddress] = useState('');
    const [Zip, setErrorsPincode] = useState('');
    const [city, setErrorsCity] = useState('');
    const [addressType, setAddressType] = useState('COR');
    const [cityCode, setCityCode] = useState('');
    const [isOnUpdate, setIsOnUpdate] = useState(false);

    useEffect(() => {
        if(props?.countryCode &&  props.countryCode !== countryCode) {
            setCountryCode(props.countryCode);
            // getStates(countryCode);
        }
    }, []);

    const onUpdate = () => {
        if(props?.onUpdate) {
            const addressData = {
                addressType,
                countryCode,
                stateCode: state,
                cityCode,
                pincode: '',
                address: ''
            } as AddressDetailsPostData;
            props.onUpdate(addressData);
        }
    }

    // const getStates = (countryCode) => {
    //     api.getStatesByCountry({countryCode}).then((response) => {
    //         const data = response as StateResponse;
    //         setStateArry(data.methodReturnValue);
    //     }).catch((error)=>{
    //         console.log(' getCitiesByState error >> ', error);
    //     });
    // }

    const validateCityName = (event: any) => {
        const city = event.target.value;
        if (validateCity(city)) {
            setErrorsCity("");
            document.getElementsByName("cityname")[0].style.border = "2px solid dodgerblue"
        } else {
            setErrorsCity("Alphabets only");
            document.getElementsByName("cityname")[0].style.border = "2px solid red";
        }
    }
    

    const validateAddress = (event: any) => {
        const city = event.target.value;
        if (validateCharacterLength(city, 6, 80)) {
            setErrorsAddress("");
            document.getElementsByName("addressLine1")[0].style.border = "2px solid dodgerblue"
        } else {
            setErrorsAddress("Minimum 6 letters and maximum 80 letters required");
            document.getElementsByName("addressLine1")[0].style.border = "2px solid red";
        }
    }
    

    const validateZipCode = (event: any) => {
        const city = event.target.value;
        if (validatePinCode(city)) {
            setErrorsPincode("");
            document.getElementsByName("zipcode")[0].style.border = "2px solid dodgerblue"
        } else {
            setErrorsPincode("Minimum 6 number required");
            document.getElementsByName("zipcode")[0].style.border = "2px solid red";
        }
    }

    const setSelectedState = (event: any) => {
        setState(event.target.value[0]);
        setIsOnUpdate(true);
    }

    const selectAddressType = (event: any) => {
        if(event?.target?.value) {
            setAddressType(event.target.value);
        } else {
            setAddressType('');
        }
        setIsOnUpdate(true);
    }

    const onCityChange = (cityCode: string) => {
        setCityCode(cityCode);
        setIsOnUpdate(true);
    }

    if(isOnUpdate) {
        setIsOnUpdate(false);
        console.log(' isOnUpdate ', isOnUpdate);
        onUpdate();
    }

    const data = props;
    return (
        <div>
            <Grid container className='mt-1'>
                <Grid item xs={12}>
                    <div style={{ marginBottom: '8px' }}>
                        <div className='pb-2'>Address Type</div>
                        <select name="addresstype" className="form-control" onChange={selectAddressType}>
                            <option value="COR">Corporate</option>
                            <option value="PHY">Physical</option>
                        </select>
                    </div>
                </Grid>
            </Grid>
            <Grid className='mt-1' container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={4}>
                    <div> Country </div>
                    <div className='p-top-sm'>
                        {<GetCountry country={countryCode} />}
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div> State </div>
                    <div className='p-top-sm'>
                        {<GetState countryCode={countryCode} onSelectState={setSelectedState} />}
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div> City </div>
                    <div className='p-top-sm'>
                        {state && <GetCity state={state} onChange={onCityChange}/>}
                    </div>
                </Grid>
            </Grid>
            <Grid container className='p-top-md'>
                <Grid item xs={12}>
                    <InputBox data={{ name: 'addressLine1', label: 'Address*', value: data.addresLine1 }}
                        onChange={validateAddress}
                    />
                    {address && <p className="text-red">{address}</p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressDetails;