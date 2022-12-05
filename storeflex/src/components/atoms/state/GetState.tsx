import React, { useState, useEffect } from 'react';
import Api from '../../../../src/api/Api';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface storeState {
  countryCode?: string;
  state?: string;
  onSelectState?: (e: SelectChangeEvent<string>) => void;
}

const GetState = (props?: storeState) => {
  const api = new Api();
  const [stateArry, setStateArry] = useState([]);
  const [countryCode, setCountryCode] = useState('');
  const [stateCode, setStateCode] = useState('Select State');
  const [stateName, setStateName] = useState('');

  useEffect(() => {
    if(props?.countryCode &&  props.countryCode !== countryCode) {
        setCountryCode(props.countryCode);
        getStates(props.countryCode);
    }
  },[]);

  const getStates = (countryCode) => {
    api.getStatesByCountry({countryCode}).then((response) => {
        setStateArry(response?.methodReturnValue);
    }).catch((error)=>{
        console.log(' getCitiesByState error >> ', error);
    });
  }
  const handleChange = (event: SelectChangeEvent) => {
    setStateCode(event.target.value as string);
    stateArry.map(item => {
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
          {stateArry.map((item, index) => {
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