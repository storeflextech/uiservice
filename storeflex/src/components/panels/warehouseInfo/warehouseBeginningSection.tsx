import React, {useState} from "react";
import { Grid } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import { InputError } from '../../atoms/textfield/InputError';
import GetCompany from "../../atoms/company/GetCompany";
import { objectData } from '../../../utils/ResponseSchema';
import { validateCharacterLength, validateGst } from "../../../utils/CommonUtils";


const WearehouseBeginningSection = () => {

    const [companyCode, setCompanyCode] = useState('');
    const [warehouseNameInfo, setWarehouseNameInfo] = useState<objectData>({});
    const [gstIdInfo, setGstIdInfo] = useState<objectData>({});
    const [warehouseDecInfo, setWarehouseDecInfo] = useState<objectData>({});

    const companyChange = (companyId: string) => {
        setCompanyCode(companyId);
    }

    const validateWarehouseName = (event: any) => {
        const obj = {
            val: event.target.value,
            error: '',
            isUpdated: true,
        } as objectData;
        if (validateCharacterLength(obj.val, 4, 50)) {
            obj.error = '';
        } else {
           obj.error = 'Please enter valid name ';
        }
        setWarehouseNameInfo(obj);
        // setonUpdateInfo(true);
    }

    const onGstIdChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: ''
        } as objectData;
        if (!obj.val) {
            obj.error = "*GST number is mandatory"
        } else if (!validateGst(obj.val)) {
            obj.error = "Enter a valid GST number"
        } else {
            obj.error = '';
        }
        setGstIdInfo(obj);
    }

    const validateWarehouseDec = (event: any) => {
        const obj = {
            val: event.target.value,
            error: '',
            isUpdated: true,
        } as objectData;
        if (validateCharacterLength(obj.val, 4, 100)) {
            obj.error = '';
        } else {
           obj.error = 'Please enter description ';
        }
        setWarehouseDecInfo(obj);
        // setonUpdateInfo(true);
    }

    return (
        <>
            <div className='m-bot-lg'>
                <div className='primary-gradient m-bot-md'>
                    <div className='font-white p-sm f-18px f-bold'>Warehouse Details</div>
                </div>
                <div className='p-md'>
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={4}>
                        <div> Company </div>
                        <div className='p-top-sm'>
                            {<GetCompany onCompanyChange={companyChange}/>}
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <InputBox data={{ name: 'clientid', label: 'Client ID*', value: companyCode, isDisabled: true }}
                        />
                    </Grid>
                </Grid>
                </div>

                <div className='p-md'>
                    <div>
                        <div>
                            <Grid container >
                            </Grid>
                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                            <Grid item xs={4}>
                                <div>Profile Photo</div>
                                <div className='p-top-sm'>
                                    <input type="file" className="form-control" />
                                </div>
                            </Grid>
                                
                                <Grid item xs={4}>
                                    <InputBox data={{ name: 'cityname', label: 'Warehouse Name*', value: '' }}
                                     onChange={validateWarehouseName}
                                    />
                                    <InputError errorText={warehouseNameInfo.error}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <InputBox data={{ name: 'gstid', label: 'GST Number*', value: '' }}
                                        onChange={onGstIdChange}
                                    />
                                    <InputError errorText={gstIdInfo.error}/>
                                </Grid>

                                <Grid item xs={12}>
                                    <InputBox data={{ name: 'whdescription', label: 'Warehouse Description*', value: '' }}
                                        onChange={validateWarehouseDec}
                                    />
                                     <InputError errorText={warehouseDecInfo.error}/>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WearehouseBeginningSection;