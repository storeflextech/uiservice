import React from "react";
import { Grid, TextareaAutosize, Button } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import GetState from '../../atoms/state/GetState';





const Facility = () => {
    return (
        <>

            <div className='m-bot-lg'>
                <div className='primary-gradient m-bot-md'>
                    <div className='font-white p-sm f-18px f-bold'>Where's the facility located?</div>
                </div>
                {/* {showBusinessAddress()} */}

                <div className='p-md'>
                    <div>
                        <div>
                            <Grid container >
                                <Grid item xs={12}>
                                    <InputBox data={{ name: 'facilityAddress', label: 'Facility address *', value: '' }}
                                    // onChange={validateAddress}
                                    />
                                    {/* {address && <p className="text-red">{address}</p>} */}
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={4}>
                                    <InputBox data={{ name: 'cityname', label: 'City*', value: '' }}
                                    // onChange={validateCityName}
                                    />
                                    {/* {city && <p className="text-red">{city}</p>} */}
                                </Grid>
                                <Grid item xs={4}>
                                    <div> State </div>
                                    <div className='p-top-md'>
                                        {<GetState />}
                                    </div>
                                </Grid>

                                <Grid item xs={4}>
                                    <InputBox data={{ name: 'zipcode', label: 'Zip*', value: '' }}
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

export default Facility;