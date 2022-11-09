import React from "react";
import { Grid  } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';

const WarehouseLayout = () => {
    return (
        <>
            <div className='m-bot-lg'>
                <div className='primary-gradient m-bot-md'>
                    <div className='font-white p-sm f-18px f-bold'>Warehouse Layout (select all that apply)</div>
                </div>

                <div className='p-md'>
                    <div>
                        <div>

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={12}>
                                    <label htmlFor="">Industries Served*</label>

                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Agriculture & Prepared Products
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Consumer Products & Mass Merchandising
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Machinery
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Apparel, Footwear & Textiles
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Electronics
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Petroleum, Natural Gas & Minerals
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Automotive & Aerospace
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Industrial & Manufacturing Materials
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Pharmaceuticals, Health & Chemicals
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Base Metals
                                </Grid>

                            </Grid>

                            <br />
                            <br />

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={12}>
                                    <label htmlFor="">Storage Layouts*</label>

                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Floor Space
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Pick Module(s)
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Gated Access
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Security System
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Racking
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Dedicated Room(s)
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> On Site Guards
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Video Surveillance
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Secured Room(s)
                                </Grid>

                            </Grid>


                            <br />
                            <br />

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={12}>
                                    <label htmlFor="">Facility Qualifications</label>

                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Dry-Ambient
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> HazMat Certified
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Food Grade
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Temperature Controlled
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> AIB Certified
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> ISO 9001
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Frozen-Refrigerated
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> CBP Bonded
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> C-TPAT
                                </Grid>

                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> FDA Registered
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> Foreign Trade Zone (FTZ)
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="checkbox" name="week" id="" /> TAPA
                                </Grid>

                            </Grid>
                            
                            <br />
                            <br />

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                
                            <Grid item xs={3}>
                                    <InputBox data={{ name: '', label: '#Dock High Doors', value: '' }}
                                    // onChange={validateAddress}
                                    />
                                    {/* {address && <p className="text-red">{address}</p>} */}
                                </Grid>
                                <Grid item xs={3}>
                                    <InputBox data={{ name: '', label: '#At Grade Doors', value: '' }}
                                    // onChange={validateAddress}
                                    />
                                    {/* {address && <p className="text-red">{address}</p>} */}
                                </Grid>

                                <Grid item xs={3}>
                                    <InputBox data={{ name: '', label: 'Clear Ceilling Height (feet)', value: '' }}
                                    // onChange={validateZipCode}
                                    />
                                   
                                </Grid>
                                <Grid item xs={3}>
                                    <InputBox data={{ name: '', label: 'Max Forklift Capacity (Lbs)', value: '' }}
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


export default WarehouseLayout;