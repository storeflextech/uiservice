import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './searchresult.css';
import { Container, Button, AppBar, Toolbar } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import {officeData} from '../../../utils/ResponseSchema';


interface filterData {
    allData: officeData;
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function filterRange(value: number) {
    return `${value}°C`;
}


const filterHeader = () => {
    return (
        <>
            <Box sx={{
                p: 1,
                bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                // fontSize: '0.875rem',
                fontSize: '1rem',
                fontWeight: '700',

            }}>
                <span>
                    Filter And Sort Locations
                </span>
            </Box>
        </>
    )
}

const FIlterRadioButtons = () => {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: '0.875rem', }}>Sort Results By:</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Distance" control={<Radio size="small" />} label="Distance" />
                <FormControlLabel value="Price" control={<Radio size="small" />} label="Price (Lowest to Highest)" />
            </RadioGroup>
        </FormControl>
    );
}

const FIlterSliderRange = () => {

    const [value, setValue] = React.useState<number[]>([150, 537]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <Box>
            <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: '0.875rem', }}>Sort By Range:</FormLabel>
            <Slider
                getAriaLabel={() => 'Price Range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={filterRange}
                min={100}
                max={1000}
            />

        </Box>


    );
}

const CheckboxLabels = () => {
    return (
        <FormGroup>
            <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: '0.875rem', }}>Storage Layout:</FormLabel>

            <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Floor Space" />
            <FormControlLabel control={<Checkbox size="small" />} label="Racking" />
            <FormControlLabel control={<Checkbox size="small" />} label="Secured Room" />
            <FormControlLabel control={<Checkbox size="small" />} label="Pick Module" />
            <FormControlLabel control={<Checkbox size="small" />} label="Pick Dedicated Room" />
        </FormGroup>
    );
}



export default function Filter() {
    return (
        <>
            <Grid item xs={2}>

                <Item sx={{ p: 0 }}>
                    <Grid item xs={12}>

                        {filterHeader()}

                        <Grid container spacing={2} sx={{ p: 1 }}>
                            <Grid item sm={12}>
                                <div className='card'>
                                    <div className='text-left'>
                                        {FIlterRadioButtons()}
                                        <Divider sx={{ m: 2 }} />
                                        {FIlterSliderRange()}
                                        <Divider sx={{ m: 2 }} />

                                        {CheckboxLabels()}
                                        <Divider sx={{ m: 2 }} />
                                    </div>
                                    <div className='text-right'>
                                        <Button variant="contained" color="info" size="small"> Apply </Button>
                                    </div>

                                </div>
                            </Grid>

                        </Grid>
                    </Grid>
                </Item>


            </Grid>
        </>
    )
}











