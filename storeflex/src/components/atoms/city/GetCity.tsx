import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { GetCitiesProp } from '../../../api/ApiConfig';
import Api from '../../../../src/api/Api';

interface storeState {
  state?: string;
}

const GetCity = (props?: storeState) => {
  const api = new Api();
  const [state, seState] = useState(props?.state ? props?.state : '');
  const [citiesList, setCitiesList] = useState([]);
  const [cityVal, setCityVal] = useState('Select City');
  const [cityCode, setCityCode] = useState('Select State');
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    getCitiesByState(state);
  }, []);

  const getCitiesByState = (state) => {
    const data: GetCitiesProp = { state: state };
    api.getCitiesByState(data).then((response) => {
      if (response.status == 200) {
        setCitiesList(response.data.methodReturnValue);       
      }
    });
  }
  const handleChange = (event: SelectChangeEvent) => {
    setCityVal(event.target.value as string);
    citiesList.map(item=>{ 
      if(Object.keys(item)[0]==event.target.value){
        setCityName(Object.values(item)[0] as string);
      }
    })
  };


  return (
    <>
      <FormControl size="small" fullWidth={true}>
        <Select autoWidth={false} value={cityCode} onChange={handleChange} displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={cityCode}>
            <em>{cityName}</em>
          </MenuItem>
          {citiesList.map((item, index) => {
            return (
              <MenuItem key={index + 1} value={Object.keys(item)}>{Object.values(item)}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </>
  )
}

export default GetCity;
