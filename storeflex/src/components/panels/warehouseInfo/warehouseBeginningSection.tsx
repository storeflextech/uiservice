import React from "react";
import { Grid, TextareaAutosize, Button } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import GetState from '../../atoms/state/GetState';
import GetCompany from "../../atoms/company/GetCompany";


const WearehouseBeginningSection = () => {
    return (
        <>

            <div className='m-bot-lg'>
                <div className='primary-gradient m-bot-md'>
                    <div className='font-white p-sm f-18px f-bold'>Warehouse Details</div>
                </div>
                {/* {showBusinessAddress()} */}
                <div className='p-md'>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={4}>
                        <div> Company </div>
                        <div className='p-top-md'>
                            {<GetCompany />}
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div>Profile Photo</div>
                        <div className='p-top-md'>
                            <input type="file" className="form-control" />
                        </div>
                    </Grid>
                    
                </Grid>
                    </div>

                <div className='p-md'>
                    <div>
                        <div>
                            <Grid container >
                            </Grid>
                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={4}>
                                    <InputBox data={{ name: 'clientid', label: 'Client ID*', value: '' }}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <InputBox data={{ name: 'cityname', label: 'Warehouse Name*', value: '' }}
                                    // onChange={validateCityName}
                                    />
                                    {/* {city && <p className="text-red">{city}</p>} */}
                                </Grid>
                                <Grid item xs={4}>
                                    <InputBox data={{ name: 'gstid', label: 'GST Number*', value: '' }}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <InputBox data={{ name: 'whdescription', label: 'Warehouse Description*', value: '' }}
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

export default WearehouseBeginningSection;