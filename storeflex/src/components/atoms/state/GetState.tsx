import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { GetStatesProp } from '../../../api/ApiConfig';
import Api from '../../../../src/api/Api';

interface storeState { 
  country?: string;
  state?: string;
}

const GetState = (props?: storeState) => {
  const api = new Api();
  const [country, setCountry] = useState(props?.country ? props?.country : '01');
  const [stateList, setStateList] = useState([]);
  const [stateCode, setStateCode] = useState('Select State');
  const [stateName, setStateName] = useState('');

  useEffect(() => {
    getStatesByCountry(country);
  }, []);

  const getStatesByCountry = (country) => {
    const data: GetStatesProp = { country: country };
    api.getStatesByCountry(data).then((response) => {
      if (response.status == 200) {
        setStateList(response.data.methodReturnValue);       
      }
    });
  }

  const handleChange = (event: SelectChangeEvent) => {
    setStateCode(event.target.value as string);
    stateList.map(item=>{ 
      if(Object.keys(item)[0]==event.target.value){
        setStateName(Object.values(item)[0] as string);
      }
    })
  };


  return (
    <>
      <FormControl size="small" fullWidth={true}>
        <Select autoWidth={false} value={stateCode} onChange={handleChange} displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
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