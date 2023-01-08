import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { GetCitiesProp } from '../../../api/ApiConfig';
import Api from '../../../../src/api/Api';

interface GetCityProps {
  stateCode?: string;
  defaultCity?: string;
  onChange?: (codeVal: string) => void;
}

const GetCity = (props: GetCityProps) => {
  const api = new Api();
  // const [state, setState] = useState(props?.state ? props?.state : '');
  const [citiesList, setCitiesList] = useState([]);
  const [cityCode, setCityCode] = useState('');
  const [cityName, setCityName] = useState('Select City');
  const [stateCode, setStateCode] = useState('');

  useEffect(() => {
    if(props.stateCode  && props.stateCode !== stateCode) {
      setStateCode(props.stateCode);
      setCityCode('');
      setCityName('Select City');
      setCitiesList([]);
      getCities(props.stateCode);
    }
  }, [props.stateCode]);

  useEffect(() => {
    if(citiesList.length > 0) {
      setCityNameAndCode(cityCode, false);
    }
  },[citiesList]);

  useEffect(() => {
    if(props?.defaultCity && props.defaultCity !== cityCode) {
      setCityCode(props.defaultCity);
    }
  },[props.defaultCity]);

  const getCities = (stateCode: string) => {
    const data: GetCitiesProp = { state: stateCode };
    api.getCitiesByState(data).then((response) => {
      setCitiesList(response.methodReturnValue); 
    }).catch((error)=>{
      setCitiesList([]);
      console.log(' getCitiesByState error >> ', error);
    });
  }
  const handleChange = (event: SelectChangeEvent) => {
    setCityNameAndCode(event.target.value, true);
  };
  const setCityNameAndCode = (dCityCode: string, event: boolean) => {
    citiesList.map(item => {
      const itemCode = Object.keys(item).toString();
      const itemName = Object.values(item).toString();
      if(itemCode === dCityCode) {
         setCityName(itemName);
         setCityCode(itemCode);
         if(props?.onChange && event) {
            props.onChange(itemCode);
         }
         return true;
      } else {
        return false;
      }
    })
  };


  return (
    <>
      <FormControl size="small" fullWidth={true}>
        <Select autoWidth={false} value={cityCode} onChange={handleChange} displayEmpty
          inputProps={{ 'aria-label': 'Select City' }}
        >
          <MenuItem value={cityCode}>
            <em>{cityName}</em>
          </MenuItem>
          {citiesList.map((item, index) => {
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

export default GetCity;
