import React from 'react';
import { TextField, Grid ,TextareaAutosize } from '@mui/material';
import GetCountry from '../../atoms/country/GetCountry';
import GetState from '../../atoms/state/GetState';
import InputBox from '../../atoms/textfield/InputBox';
import {StoreDetails} from '../../../utils/ResponseSchema';


export interface StoreInfoProps {
  data: StoreDetails;
}

const StoreInfo = (props: StoreInfoProps) => {

  const storeData = props?.data || {};

  return (
    <>
    <Grid container >
        <Grid item xs={12}>
          <div>
            {<InputBox data={{value : storeData?.name, name:'companyname', label:'Store Name'}}/>}
          </div>
        </Grid>
    </Grid>
    <Grid container >
        <Grid item xs={12}>
          <div> Store Address *</div>
          <div> 
            <TextField size="small" margin="normal" fullWidth name="companyaddress" value={storeData?.address}/>
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
        <Grid item xs={6}>
          <div> City* </div>
          <div> 
            <TextField size="small" margin="normal" fullWidth name="cityname" value={storeData?.city}/>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div> State </div>
          <div className='p-top-md'>
            {<GetState state={storeData?.state} />}
          </div>
        </Grid>
        <Grid item xs={6}>
          <div> Country </div>
          <div className='p-top-md'>
            {<GetCountry country={storeData?.country} />}
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
        <Grid item xs={6}>
          <div> Zip* </div>
          <div> 
            <TextField size="small" margin="normal" fullWidth name="zipcode" value={storeData?.zip}/>
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
        <Grid item xs={6}>
          <div> Business Phone* </div>
          <div> 
            <TextField id='phone' name='phone' size="small" margin="normal" fullWidth value={storeData?.phone}/>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div> GST Number*</div>
          <div> 
            <TextField id='gstid' name='gstid' size="small" margin="normal" fullWidth value={storeData?.gstn}/>
          </div>
        </Grid>
    </Grid>
    <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={12}>
        <div> Store Description </div>
        </Grid>
        <Grid item xs={12}>
        <TextareaAutosize
            minRows={3}
            maxRows={4}
            aria-label='Add your store description'
            defaultValue='Add your store description'
            style={{ width: '100%' }}
          />
        </Grid>
      </Grid>
    </>
  );
 };

  export default StoreInfo;