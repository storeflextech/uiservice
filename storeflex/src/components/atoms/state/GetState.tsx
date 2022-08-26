import React, { useState } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent} from '@mui/material';

const IndiaStates = ['Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'UP'];


interface storeState {
  state?: string;
}

const GetState = (props?: storeState) => {

    const [stateval, setStateval] = useState( props?.state ? props?.state : 'Select State');
    const handleChange = (event: SelectChangeEvent) => {
        setStateval(event.target.value as string);
      };
    

    return (
        <>
            <FormControl size="small" fullWidth={true}>
              <Select autoWidth={false} value={stateval} onChange={handleChange} displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={stateval}>
                  <em>{stateval}</em>
                </MenuItem>
                {IndiaStates.map((item, index) => {
                    return(
                        <MenuItem key={index+1} value={item}>{item}</MenuItem>
                    )
                })}
              </Select>
            </FormControl>
        </>
    )
}

export default GetState;