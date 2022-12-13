import React, { useState } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent} from '@mui/material';

const countries = [{code:'01',name:'India'}];


interface storeCountry {
  country?: string;
}

const GetCountry = (props?: storeCountry) => {
    // const [countryVal, setCountryVal] = useState( props?.country ? props?.country : 'Select Country');
    const [countryVal, setCountryVal] = useState(props?.country ? props?.country : 'Select Country');
    const handleChange = (event: SelectChangeEvent) => {
        setCountryVal(event.target.value as string);
      };
    

    return (
        <>
            <FormControl size="small" fullWidth={true}>
              <Select autoWidth={false} value={countryVal} onChange={handleChange} displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {/* <MenuItem value={countryVal}>
                  <em>{countryVal}</em>
                </MenuItem> */}
                {countries.map((item, index) => {
                    return(
                        <MenuItem key={index+1} value={item.code}>{item.name}</MenuItem>
                    )
                })}
              </Select>
            </FormControl>
        </>
    )
}

export default GetCountry;
