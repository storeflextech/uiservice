import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import GetCountry from '../country/GetCountry';
import GetState from '../state/GetState';
import GetCity from '../city/GetCity';
import InputBox from '../textfield/InputBox';
import { Address } from '../../../../src/api/ApiConfig';
import { objectData } from '../../../utils/ResponseSchema';

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

const AddressDetails = (props: AddressDetailsProps) => {
    // const api = new Api();
    const [countryCode, setCountryCode] = useState('01');
    const [stateInfo, setStateInfo] = useState<objectData>({});
    const [addressTypeInfo, setAddressTypeInfo] = useState('COR');
    const [cityInfo, setCityInfo] = useState<objectData>({});
    const [pinCode, setPinCode] = useState<objectData>({});
    const [plotInfo, setPlotInfo] = useState<objectData>({});
    const [houseInfo, setHouseInfo] = useState<objectData>({});
    const [streetInfo, setStreetInfo] = useState<objectData>({});

    const [onUpdateInfo , setonUpdateInfo] = useState(false);

    useEffect(() => {
        if(props?.countryCode !== countryCode) {
            setCountryCode(props.countryCode || '01');
            // getStates(countryCode);
        }

        if(onUpdateInfo) {
            setonUpdateInfo(false);
            onChangeUpdateInfo();
        }
    }, [props.countryCode, countryCode, onUpdateInfo ]);

    const onChangeUpdateInfo = () => {
        if(props?.onUpdate) {
            const addressData = {
                addressType: addressTypeInfo,
                country: 'IND',
                city: cityInfo.val,
                state: stateInfo.val,
                pincode: pinCode.val,
                plotNo: plotInfo.val,
                houseNo: houseInfo.val,
                streetDetails: streetInfo.val

            } as Address;
            props.onUpdate(addressData);
        }
    }

    const onCityChange = (cityCodeVal: string) => {
        const obj = {
            val: cityCodeVal,
            error: ''
        } as objectData;
        if (validateCity(obj.val)) {
            obj.error = '';
        } else {
            obj.error = 'Select city'
        }
        setCityInfo(obj);
        setonUpdateInfo(true);
    }

    const onStateChange = (stageCodeVal: string) => {
        const obj = {
            val: stageCodeVal,
            error: ''
        } as objectData;
        if (obj.val) {
            obj.error = '';
        } else {
            obj.error = 'Select state'
        }
        setStateInfo(obj);
        setonUpdateInfo(true);
    }
    
    const validateStreet = (event: any) => {
        const obj = {
            val: event.target.value,
            error: ''
        } as objectData;
        if (validateCharacterLength(obj.val, 4, 80)) {
            obj.error = '';
        } else {
           obj.error = 'Minimum 6 letters and maximum 80 letters required';
        }
        setStreetInfo(obj);
        setonUpdateInfo(true);
    }
    

    const validatePin = (event: any) => {
        const obj = {
            val: event.target.value,
            error: ''
        } as objectData;
        if (validatePinCode(obj.val)) {
            obj.error = '';
        } else {
            obj.error = 'Enter valid pincode.';
        }
        setPinCode(obj);
        setonUpdateInfo(true);
    }

    const validatePlotNo = (event: any) => {
        const obj = {
            val: event.target.value,
            error: ''
        } as objectData;
        if (validateCharacterLength(obj.val, 4, 15)) {
            obj.error = '';
        } else {
            obj.error = 'Minimum 4 character required';
        }
        setPlotInfo(obj);
        setonUpdateInfo(true);
    }

    const validateHouseNo = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: ''
        } as objectData;
        if (validateCharacterLength(obj.val, 2, 15)) {
            obj.error = '';
        } else {
            obj.error = 'Minimum 4 character required';
        }
        setHouseInfo(obj);
        setonUpdateInfo(true);
    }

    const selectAddressType = (event: any) => {
        if(event?.target?.value) {
            setAddressTypeInfo(event.target.value);
        } else {
            setAddressTypeInfo('');
        }
        setonUpdateInfo(true);
    }

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
                <Grid item xs={6}>
                    <div> State </div>
                    <div className='p-top-sm'>
                        {<GetState countryCode={countryCode} onChange={onStateChange} />}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div> City </div>
                    <div className='p-top-sm'>
                        {<GetCity state={stateInfo.val || ''} onChange={onCityChange}/>}
                    </div>
                </Grid>
            </Grid>
            <Grid className='mt-1' container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={6}>
                    <div> Country </div>
                    <div className='p-top-sm'>
                        {<GetCountry country={countryCode} />}
                    </div>
                </Grid>
                <Grid item xs={6}>
                        <InputBox data={{ name: 'pincode', label: 'Pincode*', value: pinCode.val }}
                        onChange={validatePin}
                    />
                    {pinCode.error && <p className="text-red">{pinCode.error}</p>}
                </Grid>
            </Grid>
            <Grid container className='p-top-md' spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={3}>
                    <InputBox data={{ name: 'plotno', label: 'Plot no', value: plotInfo.val }}
                        onChange={validatePlotNo}
                    />
                     {plotInfo.error && <p className="text-red">{plotInfo.error}</p>}
                </Grid>
                <Grid item xs={3}>
                    <InputBox data={{ name: 'houseno', label: 'House no', value: houseInfo.val }}
                        onChange={validateHouseNo}
                    />
                     {houseInfo.error && <p className="text-red">{houseInfo.error}</p>}
                </Grid>
                <Grid item xs={6}>
                    <InputBox data={{ name: 'street', label: 'Street', value: streetInfo.val }}
                        onChange={validateStreet}
                    />
                    {streetInfo.error && <p className="text-red">{streetInfo.error}</p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressDetails;