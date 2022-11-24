import React, { useState } from 'react';
import { Grid } from '@mui/material';
import GetState from '../state/GetState';
import InputBox from '../textfield/InputBox';
import { validateCity, validateCharacterLength, validatePinCode } from "../../../utils/CommonUtils";

interface AddressDetailsProps {
    addresLine1: string;
    city: string;
    state: string;
    zip: string | number;
    country?: string;

}
const AddressDetails = (props: AddressDetailsProps) => {
    const [city, setErrorsCity] = useState('');
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
    const [address, setErrorsAddress] = useState('');
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
    const [Zip, setErrorsPincode] = useState('');
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


    const data = props;
    return (
        <div>
            <Grid container className='mt-1'>
                <Grid item xs={12}>
                    <div style={{ marginBottom: '8px' }}>
                        <div className='pb-2'>Address Type</div>
                        <select name="" className="form-control">
                            <option value="Corporate">Corporate</option>
                            <option value="Physical">Physical</option>
                        </select>
                    </div>
                </Grid>
            </Grid>
            <Grid className='mt-1' container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} >
                <Grid item xs={4}>
                    <div> Country </div>
                    <div className='p-top-sm'>
                        {<GetState />}
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div> State </div>
                    <div className='p-top-sm'>
                        {<GetState />}
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div> City </div>
                    <div className='p-top-sm'>
                        {<GetState />}
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
            
            <Grid className='mt-1' container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={4}>
                    <InputBox data={{ name: 'cityname', label: 'House No.*', value: data.city }}
                        onChange={validateCityName}
                    />
                    {city && <p className="text-red">{city}</p>}
                </Grid>
                <Grid item xs={4}>
                    <InputBox data={{ name: 'zipcode', label: 'Plot No.*', value: data.zip }}
                        onChange={validateZipCode} />
                    {Zip && <p className="text-red">{Zip}</p>}
                </Grid>
                <Grid item xs={4}>
                    <InputBox data={{ name: 'cityname', label: 'Pincode*', value: data.city }}
                        onChange={validateCityName}
                    />
                    {city && <p className="text-red">{city}</p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressDetails;