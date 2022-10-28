import React, { useState } from 'react';
import { Grid} from '@mui/material';
import GetState from '../state/GetState';
import InputBox from '../textfield/InputBox';
import {validateCity,validateCharacterLength,validatePinCode } from "../../../utils/CommonUtils";

interface AddressDetailsProps {
    addresLine1: string;
    city: string;
    state: string;
    zip: string | number;
    country?: string;

}
const AddressDetails = (props: AddressDetailsProps) => {
    const [city, setErrorsCity] = useState('');
      const validateCityName =(event:any)=>{
        const city = event.target.value;
        if(validateCity(city)){
            setErrorsCity("");
            document.getElementsByName("cityname")[0].style.border = "2px solid dodgerblue"
        }else{
            setErrorsCity("Alphabets only");
            document.getElementsByName("cityname")[0].style.border = "2px solid red";
        }
      }
      const [address, setErrorsAddress] = useState('');
      const validateAddress =(event:any)=>{
        const city = event.target.value;
        if(validateCharacterLength(city,6,80)){
            setErrorsAddress("");
            document.getElementsByName("addressLine1")[0].style.border = "2px solid dodgerblue"
        }else{
            setErrorsAddress("Minimum 6 letters and maximum 80 letters required");
            document.getElementsByName("addressLine1")[0].style.border = "2px solid red";
        }
      }
      const [Zip, setErrorsPincode] = useState('');
      const validateZipCode =(event:any)=>{
        const city = event.target.value;
        if(validatePinCode(city)){
            setErrorsPincode("");
            document.getElementsByName("zipcode")[0].style.border = "2px solid dodgerblue"
        }else{
            
            setErrorsPincode("Minimum 6 number required");
            document.getElementsByName("zipcode")[0].style.border = "2px solid red";
        }
      }


    const data = props;
    return(
        <div>
            <Grid container >
            <Grid item xs={12}>
                <InputBox data={{name:'addressLine1', label:'address *', value: data.addresLine1}}
                onChange={validateAddress}
                />
                {address && <p className="text-red">{address}</p>}
            </Grid>
          </Grid>
            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={6}>
                <InputBox data={{name:'cityname', label:'city*', value: data.city}}
                onChange={validateCityName}
                />
                {city && <p className="text-red">{city}</p>}
                </Grid>
                <Grid item xs={6}>
                <div> State </div>
                <div className='p-top-md'>
                    {<GetState />}
                </div>
                </Grid>
            </Grid>
            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={6}>
                <InputBox data={{name:'zipcode', label:'Zip*', value: data.zip}}
                onChange={validateZipCode}/>
                {Zip && <p className="text-red">{Zip}</p>}
                </Grid>
                <Grid item xs={6}>
                {data.country && 
                <InputBox data={{name:'country', label:'Country', value: data.country}}/>}
                </Grid>
            </Grid>
        </div>
    )
}

export default AddressDetails;