import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import Api from '../../../api/Api';
interface storeCompany {
    company?: string;
}

const GetCompany = (props?: storeCompany) => {

    const api = new Api();
    const [companyList, setCompanyList] = useState([]);

    useEffect(() => {
        getCompanies();
    }, [])

    const getCompanies =() => {
       api.getCompanyList().then((resp) => {
            console.log(' getCompanies success >> ', resp);
            if(resp?.methodReturnValue) {
                setCompanyList(resp.methodReturnValue);
            }
       }).catch((error)=>{
            console.log(' getCompanyList error >> ', error);
        });
    }

    const [companyval, setCompanyval] = useState(props?.company ? props?.company : 'Select Company');
    const handleChange = (event: SelectChangeEvent) => {
        setCompanyval(event.target.value as string);
    };


    return (
        <>
            <FormControl size="small" fullWidth={true}>
                <Select autoWidth={false} value={companyval} onChange={handleChange} displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value={companyval}>
                        <em>{companyval}</em>
                    </MenuItem>
                    {companyList.map((item, index) => {
                        const itemCode = Object.keys(item).toString();
                        const itemName = Object.values(item).toString();
                        return (
                            <MenuItem key={index + 1} value={itemCode}>{itemName}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </>
    )
}

export default GetCompany;