import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import Api from '../../../api/Api';
import { objectData } from '../../../utils/ResponseSchema';

interface storeCompany {
    company?: string;
    onCompanyChange?(companyId?: string): void;
}

const GetCompany = (props?: storeCompany) => {

    const api = new Api();
    const [companyList, setCompanyList] = useState([]);
    const [companyCode, setCompanyCode] = useState<objectData>({val: 'Select Company'});

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

    const handleChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        setCompanyCode(obj);
        if(props?.onCompanyChange) {
            props.onCompanyChange(obj.val)
        }
    };


    return (
        <>
            <FormControl size="small" fullWidth={true}>
                <Select autoWidth={false} value={companyCode.val} onChange={handleChange}>
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