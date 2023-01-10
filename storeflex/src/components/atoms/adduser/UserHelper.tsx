import React, { useState } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent} from '@mui/material';
import { ROLE_TYPE } from '../../../utils/Constants';

const companyData = ['Store Flex', 'Global Warehouse'];

interface currentValue {
  state?: string;
}

export const UserType = (props?: currentValue) => {

  const userData = [ { name: 'Administrator', code: ROLE_TYPE.admin}, {name:'Standard', code: ROLE_TYPE.guest}];
  const [selectedUser, setSelectedUser] = useState(ROLE_TYPE.guest as string);

    const handleChange = (event: SelectChangeEvent) => {
        const user = event.target.value as string;
        console.log(' event.target.value >>>  ', user);
        setSelectedUser(user);
      };
    
    return (
        <>
          <FormControl size="small" fullWidth={true}>
            <Select autoWidth={false} value={selectedUser} onChange={handleChange}>
              {userData.map((item, index) => {
                  return(
                      <MenuItem key={index+1} value={item.code}>{item.name}</MenuItem>
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
