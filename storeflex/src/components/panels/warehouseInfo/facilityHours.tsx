import React from "react";
import { Grid, TextareaAutosize, Button } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import GetState from '../../atoms/state/GetState';

const FacilityHours = () => {
    return (
        <>
            <div className='m-bot-lg'>
                <div className='primary-gradient m-bot-md'>
                    <div className='font-white p-sm f-18px f-bold'>Facility Hours</div>
                </div>

                <div className='p-md'>
                    <div>
                        <div>

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={3}>
                                <input type="radio" name="week" id="" /> Select Days Of Works

                                </Grid>
                                <Grid item xs={3}>
                                    <input type="radio" name="week" id="" /> Available 7 days a week
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={1}>
                                <input type="checkbox" name="" id="" /> Mon
                                </Grid>

                                <Grid item xs={1}>
                                <input type="checkbox" name="" id="" /> Tues
                                </Grid>

                                <Grid item xs={1}>
                                <input type="checkbox" name="" id="" /> Wed
                                </Grid>

                                <Grid item xs={1}>
                                <input type="checkbox" name="" id="" /> Thu
                                </Grid>
                                <Grid item xs={1}>
                                <input type="checkbox" name="" id="" /> Fri
                                </Grid>
                                <Grid item xs={1}>
                                <input type="checkbox" name="" id="" /> Sat
                                </Grid>
                                <Grid item xs={1}>
                                <input type="checkbox" name="" id="" /> Sun
                                </Grid>


                            </Grid>


                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}


export default FacilityHours;