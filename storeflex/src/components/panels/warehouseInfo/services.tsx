import React from "react";
import { Grid, TextareaAutosize, Button } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';

const Services = () => {
    return (
        <>
            <div className='m-bot-lg'>
                <div className='primary-gradient m-bot-md'>
                    <div className='font-white p-sm f-18px f-bold'>Services</div>
                </div>

                <div className='p-md'>
                    <div>
                        <div>

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={12}>
                                    <label htmlFor="">Add-on Services</label>

                                </Grid>
                                <Grid item xs={3}>
                                    <InputBox data={{ name: '', label: '$ Rate / Hour', value: '' }}
                                    // onChange={validateAddress}
                                    />
                                    {/* {address && <p className="text-red">{address}</p>} */}
                                </Grid>


                            </Grid>

                            <br />
                            <br />

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={4}>
                                    <label htmlFor="">Inbound Services</label>
                                    <Grid item xs={12}>
                                        <input type="checkbox" name="week" id="" /> Pallet Receiving
                                    </Grid>
                                    <Grid item xs={12}>
                                        <input type="checkbox" name="week" id="" /> Carton Receiving
                                    </Grid>



                                </Grid>
                                <Grid item xs={4}>
                                    <Grid item xs={12}>
                                        <label htmlFor="">Outbound Services</label>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <input type="checkbox" name="week" id="" /> Unit Pick and Pack
                                    </Grid>
                                    <Grid item xs={6}>
                                        <input type="checkbox" name="week" id="" /> Cartin Pick
                                    </Grid>
                                    <Grid item xs={6}>
                                        <input type="checkbox" name="week" id="" /> Cartin Pick
                                    </Grid>
                                    <Grid item xs={6}>
                                        <input type="checkbox" name="week" id="" /> Cartin Pick
                                    </Grid>



                                </Grid>

                            </Grid>


                            <br />
                            <br />

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={12}>
                                    <label htmlFor="">Value Add Services</label>

                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox"  name="" id="" /> Master Carton
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="" id="" /> Cross Dock
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="" id="" /> Ship Labeling
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="" id="" /> Kitting
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="" id="" /> Repacking
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="" id="" /> Price Labeling
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="" id="" /> Ticketing
                                </Grid>
                                
                            </Grid>

                            <br />
                            <br />

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={12}>
                                    <label htmlFor="">Allow labor?</label>

                                </Grid>
                                
                                <Grid item xs={4}>
                                    <input type="checkbox" name="" id="" /> Allow buyers to use their own labor
                                </Grid>
                               
                                
                            </Grid>

                           




                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}


export default Services;