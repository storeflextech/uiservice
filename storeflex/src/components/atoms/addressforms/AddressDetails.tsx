import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import GetCountry from '../country/GetCountry';
import GetState from '../state/GetState';
import GetCity from '../city/GetCity';
import InputBox from '../textfield/InputBox';
import { objectData, Address } from '../../../utils/ResponseSchema';

import { validateCity, validateCharacterLength, validatePinCode } from "../../../utils/CommonUtils";


interface AddressDetailsProps {
    addressTypeHide?: boolean;
    countryCode?: string;
    country?: string;
    onUpdate?: (data: Address) => void;
    data?: Address;
}

const AddressDetails = (props: AddressDetailsProps) => {
    // const api = new Api();
    const data = props.data;
    const [countryCode, setCountryCode] = useState('01');
    const [stateInfo, setStateInfo] = useState<objectData>({});
    const [addressTypeInfo, setAddressTypeInfo] = useState<objectData>({});
    const [cityInfo, setCityInfo] = useState<objectData>({});
    const [pinCode, setPinCode] = useState<objectData>({});
    const [plotInfo, setPlotInfo] = useState<objectData>({});
    const [houseInfo, setHouseInfo] = useState<objectData>({});
    const [streetInfo, setStreetInfo] = useState<objectData>({});

    const [onUpdateInfo, setOnUpdateInfo] = useState(false);

    useEffect(() => {
        if (props?.countryCode !== countryCode) {
            setCountryCode(props.countryCode || '01');
            // getStates(countryCode);
        }
        if (onUpdateInfo) {
            setOnUpdateInfo(false);
            onChangeUpdateInfo();
        }
    }, [props.countryCode, onUpdateInfo]);

    const getVal = (obj: objectData) => {
        if (obj.isUpdated) {
            return obj.val
        } else {
            return undefined;
        }
    }

    const onChangeUpdateInfo = () => {
        if (props?.onUpdate) {
            const addressData = {
                addressId: data?.addressId,
                addressType: getVal(addressTypeInfo),
                country: 'IND',
                city: getVal(cityInfo),
                state: getVal(stateInfo),
                pincode: getVal(pinCode),
                plotNo: getVal(plotInfo),
                houseNo: getVal(houseInfo),
                streetDetails: getVal(streetInfo)

            } as Address;
            props.onUpdate(addressData);
        }
    }

    const onCityChange = (cityCodeVal: string) => {
        const obj = {
            val: cityCodeVal,
            error: '',
            isUpdated: true,
        } as objectData;
        if (validateCity(obj.val)) {
            obj.error = '';
        } else {
            obj.error = 'Select City'
        }
        setCityInfo(obj);
        setOnUpdateInfo(true);
    }

    const onStateChange = (stageCodeVal: string) => {
        const obj = {
            val: stageCodeVal,
            error: '',
            isUpdated: true,
        } as objectData;
        if (obj.val) {
            obj.error = '';
        } else {
            obj.error = 'Select State'
        }
        setStateInfo(obj);
        setOnUpdateInfo(true);
    }

    const validateStreet = (event: any) => {
        const obj = {
            val: event.target.value,
            error: '',
            isUpdated: true,
        } as objectData;
        if (validateCharacterLength(obj.val, 4, 80)) {
            obj.error = '';
        } else {
            obj.error = 'Minimum 6 letters and maximum 80 letters required';
        }
        setStreetInfo(obj);
        setOnUpdateInfo(true);
    }


    const validatePin = (event: any) => {
        console.log(' validatePin', event.target.value)
        const obj = {
            val: event.target.value,
            error: '',
            isUpdated: true,
        } as objectData;
        if (validatePinCode(obj.val)) {
            obj.error = '';
        } else {
            obj.error = 'Enter valid pincode.';
        }
        setPinCode(obj);
        setOnUpdateInfo(true);
    }

    const validatePlotNo = (event: any) => {
        const obj = {
            val: event.target.value,
            error: '',
            isUpdated: true,
        } as objectData;
        if (validateCharacterLength(obj.val, 1, 15)) {
            obj.error = '';
        } else {
            obj.error = 'Minimum 1 character required';
        }
        setPlotInfo(obj);
        setOnUpdateInfo(true);
    }

    const validateHouseNo = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        if (validateCharacterLength(obj.val, 1, 15)) {
            obj.error = '';
        } else {
            obj.error = 'Minimum 1 character required';
        }
        setHouseInfo(obj);
        setOnUpdateInfo(true);
    }

    const selectAddressType = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        setAddressTypeInfo(obj);
        setOnUpdateInfo(true);
    }

    const showAddressType = () => {
        if (props?.addressTypeHide) {
            return (<> </>)
        } else {
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
        }
    }
    return (
        <div>
            {showAddressType()}
            <Grid container className='p-top-md' spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={3}>
                    <InputBox data={{ name: 'plotno', label: 'Plot No', value: data?.plotNo }}
                        onChange={validatePlotNo}
                    />
                    {plotInfo.error && <p className="text-red">{plotInfo.error}</p>}
                </Grid>
                <Grid item xs={3}>
                    <InputBox data={{ name: 'houseno', label: 'House No', value: data?.houseNo }}
                        onChange={validateHouseNo}
                    />
                    {houseInfo.error && <p className="text-red">{houseInfo.error}</p>}
                </Grid>
                <Grid item xs={6}>
                    <InputBox data={{ name: 'street', label: 'Street*', value: data?.streetDetails }}
                        onChange={validateStreet}
                    />
                    {streetInfo.error && <p className="text-red">{streetInfo.error}</p>}
                </Grid>
            </Grid>
            <Grid className='mt-1' container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={6}>
                    <div> State* </div>
                    <div className='p-top-sm'>
                        {<GetState countryCode={countryCode} onChange={onStateChange} stateCodeDefault={data?.state} />}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div> City* </div>
                    <div className='p-top-sm'>
                        {<GetCity stateCode={stateInfo?.val || ''} onChange={onCityChange} />}
                    </div>
                </Grid>
            </Grid>
            <Grid className='mt-1' container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={6}>
                    <div> Country* </div>
                    <div className='p-top-sm'>
                        {<GetCountry country={countryCode} />}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <InputBox data={{ name: 'pincode', label: 'Pincode*', value: data?.pincode }}
                        onChange={validatePin}
                    />
                    {pinCode.error && <p className="text-red">{pinCode.error}</p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressDetails;