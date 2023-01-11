import React, { useEffect, useState } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent} from '@mui/material';
import { ROLE_TYPE } from '../../../utils/Constants';


const companyData = ['Store Flex', 'Global Warehouse'];

interface UserTypeProps {
  defaultUser?: string;
  onUpdate?:(userType: string) => void;
}

interface currentValue {
  state?: string;
  onUpdate?:(userType: string) => void;
}

export const UserType = (props?: UserTypeProps) => {

  const userData = [ { name: 'Administrator', code: ROLE_TYPE.admin}, {name:'Standard', code: ROLE_TYPE.guest}];
  const [selectedUser, setSelectedUser] = useState('');

  // useEffect(() => {
  //   setSelectedUser(props?.defaultUser || ROLE_TYPE.guest as string);
  // },[]);

  useEffect(() => {
    if(props?.onUpdate && selectedUser) {
      props.onUpdate(selectedUser);
    }
  },[selectedUser]);

  const handleChange = (event: SelectChangeEvent) => {
      const user = event.target.value as string;
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
