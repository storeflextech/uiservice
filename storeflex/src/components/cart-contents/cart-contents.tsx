import React from 'react';
import { Grid} from '@mui/material';

interface CartContentsProps {
    storeInfo: object;
}

const CartContents = (props: CartContentsProps) => {
    const data = props;
    console.log(data);
    
    return(
        <div>
            <Grid container >
            <Grid item xs={12}>
                {/* {data.storeInfo} */}
            </Grid>
          </Grid>
            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                {/* <Grid item xs={6}>
                <InputBox data={{name:'cityname', label:'City*', value: data.city}}/>
                </Grid>
                <Grid item xs={6}>
                <div> State </div>
                <div className='p-top-md'>
                    {<GetState />}
                </div>
                </Grid> */}
            </Grid>
            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                {/* <Grid item xs={6}>
                <InputBox data={{name:'zipcode', label:'Zip*', value: data.zip}}/>
                </Grid>
                <Grid item xs={6}>
                {data.country && 
                <InputBox data={{name:'country', label:'Country', value: data.country}}/>}
                </Grid> */}
            </Grid>
        </div>
    )

}

export default CartContents;