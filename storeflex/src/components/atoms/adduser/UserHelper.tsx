import React, { useState } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent} from '@mui/material';

const companyData = ['Store Flex', 'Global Warehouse'];
const userData = ['Administrator', 'Standard'];


interface currentValue {
  state?: string;
}

export const UserType = (props?: currentValue) => {

    const [selectedUser, setSelectedUser] = useState( props?.state ? props?.state : 'Select');
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedUser(event.target.value as string);
      };
    

    return (
        <>
          <FormControl size="small" fullWidth={true}>
            <Select autoWidth={false} value={selectedUser} onChange={handleChange} displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={selectedUser}>
                <em>{selectedUser}</em>
              </MenuItem>
              {userData.map((item, index) => {
                  return(
                      <MenuItem key={index+1} value={item}>{item}</MenuItem>
                  )
              })}
            </Select>
            </FormControl>
        </>
    )
}

export const CompanyName = (props?: currentValue) => {

  const [stateval, setStateval] = useState( props?.state ? props?.state : 'Select Company');
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
              {companyData.map((item, index) => {
                  return(
                      <MenuItem key={index+1} value={item}>{item}</MenuItem>
                  )
              })}
            </Select>
          </FormControl>
      </>
  )
}
