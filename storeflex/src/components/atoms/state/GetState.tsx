import React, { useState, useEffect } from 'react';
import Api from '../../../../src/api/Api';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface storeState {
  countryCode?: string;
  stateCodeDefault?: string;
  onChange?: (val: string) => void;
}

const GetState = (props?: storeState) => {
  const api = new Api();
  const [stateArry, setStateArry] = useState([]);
  const [countryCode, setCountryCode] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [stateName, setStateName] = useState('Select State');

  useEffect(() => {
    if(props?.countryCode &&  props.countryCode !== countryCode) {
        setCountryCode(props.countryCode);
        getStatesList(props.countryCode);
    }
    if(stateArry.length > 0) {
      setStateNameAndCode(stateCode, false);
    }
    if(props?.stateCodeDefault && !stateCode) {
      setStateCode(props?.stateCodeDefault);
    }
  },[countryCode, stateArry]);

  const getStatesList = (countryCode) => {
    api.getStatesByCountry({countryCode}).then((response) => {
        setStateArry(response?.methodReturnValue);
    }).catch((error)=>{
        console.log(' getCitiesByState error >> ', error);
    });
  }

  const setStateNameAndCode = (stateCode: string, event: boolean) => {
    stateArry.map(item => {
      const itemCode = Object.keys(item).toString();
      const itemName = Object.values(item).toString();
      if(itemCode === stateCode) {
        setStateName(itemName);
        setStateCode(itemCode);
         if(props?.onChange && event) {
            props.onChange(itemCode);
         }
         return true;
      } else {
        return false;
      }
    })
  }

  const handleChange = (event: SelectChangeEvent) => {
    setStateNameAndCode(event.target.value, true);
  };

  return (
    <>
      <FormControl size="small" fullWidth={true}>
        <Select autoWidth={false} value={stateCode} onChange={handleChange} displayEmpty
          inputProps={{ 'aria-label': 'Select State' }}
        >
          <MenuItem value={stateCode}>
            <em>{stateName}</em>
          </MenuItem>
          {stateArry.map((item, index) => {
            const itemCode = Object.keys(item).toString();
            const itemName = Object.values(item).toString();
            return (
              <MenuItem key={index + 1} value={itemCode}>{itemName}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  )
}

export default GetState;