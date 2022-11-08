import React from "react";
import { Grid, TextareaAutosize, Button } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';

const WearehousePricing=()=>{
    return(
    <>
     <div className='m-bot-lg'>
                <div className='primary-gradient m-bot-md'>
                    <div className='font-white p-sm f-18px f-bold'>Pricing</div>
                </div>

                <div className='p-md'>
                    <div>
                        <div>

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                            <Grid item xs={3}>
                                    <InputBox data={{ name: 'facilityAddress', label: 'Total Available Space (sq.ft)*', value: '' }}
                                    // onChange={validateAddress}
                                    />
                                    {/* {address && <p className="text-red">{address}</p>} */}
                                </Grid>
                                <Grid item xs={3}>
                                    <InputBox data={{ name: 'facilityAddress', label: 'Rate(Rs)/sq.ft/month *', value: '' }}
                                    // onChange={validateAddress}
                                    />
                                    {/* {address && <p className="text-red">{address}</p>} */}
                                </Grid>

                                <Grid item xs={3}>
                                    <InputBox data={{ name: 'zipcode', label: 'Minimum Order Quantity (sq.ft)*', value: '' }}
                                    // onChange={validateZipCode}
                                    />

                                </Grid>


                            </Grid>
                        </div>
                    </div>

                </div>


            </div>
    </>
    )
}


export default WearehousePricing;