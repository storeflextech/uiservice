import React from 'react';
import { Grid} from '@mui/material';
import GetState from '../state/GetState';
import InputBox from '../textfield/InputBox';

interface AddressDetailsProps {
    addresLine1: string;
    city: string;
    state: string;
    zip: string | number;
    country?: string;

}

const AddressDetails = (props: AddressDetailsProps) => {
    const data = props;
    return(
        <div>
            <Grid container >
            <Grid item xs={12}>
                <InputBox data={{name:'addressLine1', label:'Address *', value: data.addresLine1}}/>
            </Grid>
          </Grid>
            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={6}>
                <InputBox data={{name:'cityname', label:'City*', value: data.city}}/>
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
                <InputBox data={{name:'zipcode', label:'Zip*', value: data.zip}}/>
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