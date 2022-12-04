import React, { useState } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface storeState {
  countryCode?: string;
  state?: string;
  stateList?: any;
  onSelectState?: (e: SelectChangeEvent<string>) => void;
}

const GetState = (props?: storeState) => {
  // const api = new Api();
  // const [stateList, setStateList] = useState([]);
  const [stateCode, setStateCode] = useState('Select State');
  const [stateName, setStateName] = useState('');

  // const countryCode = props?.countryCode || '01';
  const stateList = props?.stateList || []

  const handleChange = (event: SelectChangeEvent) => {
    setStateCode(event.target.value as string);
    stateList.map(item => {
      if (Object.keys(item)[0] === event.target.value) {
        setStateName(Object.values(item)[0] as string);
      }
    });
    if (props?.onSelectState) {
      props.onSelectState(event);
    }

  };
  return (
    <>
      <FormControl size="small" fullWidth={true}>
        <Select autoWidth={false} value={stateCode} onChange={handleChange} displayEmpty
          inputProps={{ 'aria-label': 'Select City' }}
        >
          <MenuItem value={stateCode}>
            <em>{stateName}</em>
          </MenuItem>
          {stateList.map((item, index) => {
            return (
              <MenuItem key={index + 1} value={Object.keys(item)}>{Object.values(item)}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </>
  )
}

export default GetState;