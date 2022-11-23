import React, { useState } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

const IndiaCompanies = ['Skaplink Technologies (CL-101)', 'Catla (CL-102)', 'Royal Rides (CL-103)', 'TechVariable (CL-120)', 'XopunTech (CL-420)', 'MJSONS (CL-404)'];


interface storeCompany {
    company?: string;
}

const GetCompany = (props?: storeCompany) => {

    const [companyval, setCompanyval] = useState(props?.company ? props?.company : 'Select Company');
    const handleChange = (event: SelectChangeEvent) => {
        setCompanyval(event.target.value as string);
    };


    return (
        <>
            <FormControl size="small" fullWidth={true}>
                <Select autoWidth={false} value={companyval} onChange={handleChange} displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={companyval}>
                        <em>{companyval}</em>
                    </MenuItem>
                    {IndiaCompanies.map((item, index) => {
                        return (
                            <MenuItem key={index + 1} value={item}>{item}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </>
    )
}

export default GetCompany;