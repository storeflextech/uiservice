import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material';
import InputBox from '../../../atoms/textfield/InputBox';
import { InputError } from '../../../atoms/textfield/InputError';
import GetCompany from "../../../atoms/company/GetCompany";
import { objectData } from '../../../../utils/ResponseSchema';
import { validateCharacterLength, validateGst } from "../../../../utils/CommonUtils";
import { UploadImage } from "../../../atoms/image/image";


interface WarehouseDetailsProps {
    onWarehouseDetailsUpdate?: (data: WhDetail) => void;
    isDisabled?: boolean;
    data?: WhDetail;
}

export interface WhDetail {
    clientName?: string;
    clientId?: string;
    warehouseName?: string;
    descp?: string;
    warehouseTaxId?: string;
    warehouseId?: string;
}
const WarehouseDetails = (props: WarehouseDetailsProps) => {
    const [companyCode, setCompanyCode] = useState('');
    const [warehouseNameInfo, setWarehouseNameInfo] = useState<objectData>({});
    const [gstIdInfo, setGstIdInfo] = useState<objectData>({});
    const [warehouseDecInfo, setWarehouseDecInfo] = useState<objectData>({});
    const [onUpdateInfo, setonUpdateInfo] = useState(false);
    const [imageData, setImageData] = useState<File>();

    useEffect(() => {
        if (onUpdateInfo) {
            setonUpdateInfo(false);
            onChangeUpdateInfo();
        }
    }, [onUpdateInfo]);

    const getVal = (obj: objectData) => {
        if (obj.isUpdated) {
            return obj.val
        } else {
            return undefined;
        }
    }
    const onChangeUpdateInfo = () => {
        if (props?.onWarehouseDetailsUpdate) {
            const obj = {
                clientId: companyCode,
                warehouseName: getVal(warehouseNameInfo),
                descp: getVal(warehouseDecInfo),
                warehouseTaxId: getVal(gstIdInfo)
            } as WhDetail;
            props.onWarehouseDetailsUpdate(obj);
        }
    }

    const companyChange = (companyId: string) => {
        setCompanyCode(companyId);
        setonUpdateInfo(true);
    }

    const validateWarehouseName = (event: any) => {
        const obj = {
            val: event.target.value,
            error: '',
            isUpdated: true,
        } as objectData;
        if (!obj.val) {
            obj.error = 'This field can not be empty';
        } else if (validateCharacterLength(obj.val, 4, 50)) {
            obj.error = '';
        } else {
            obj.error = 'Please enter valid name ';
        }
        setWarehouseNameInfo(obj);
        setonUpdateInfo(true);
    }

    const onGstIdChange = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        if (!obj.val) {
            obj.error = "*GST number is mandatory"
        } else if (!validateGst(obj.val)) {
            obj.error = "Enter a valid GST number"
        } else {
            obj.error = '';
        }
        setGstIdInfo(obj);
        setonUpdateInfo(true);
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
        setonUpdateInfo(true);
    }

    const onPhotoUploadChange = (file: any) => {
        if (file) {
            setImageData(file);
        }
    }

    return (
        <>
            <div className='m-bot-lg'>
                <div className='primary-gradient m-bot-md'>
                    <div className='font-white p-sm f-18px f-bold'>Warehouse Details</div>
                </div>
                <div className='p-md'>
                    <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                        <Grid item xs={9}>
                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={6}>
                                    {props.isDisabled &&
                                        <InputBox data={{
                                            name: 'company', label: 'Company*',
                                            value: props?.data?.clientName, isDisabled: props.isDisabled
                                        }}
                                        />
                                    }
                                    {!props.isDisabled &&
                                        <div>
                                            <div> Company* </div>
                                            <div className='p-top-sm'>
                                                {<GetCompany onCompanyChange={companyChange} />}
                                            </div>
                                        </div>
                                    }
                                </Grid>
                                <Grid item xs={6}>
                                    <InputBox data={{
                                        name: 'clientid', label: 'Client ID*',
                                        value: props?.data?.clientId, isDisabled: props.isDisabled
                                    }}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={6}>
                                    <InputBox data={{
                                        name: 'cityname', label: 'Warehouse Name*',
                                        value: props?.data?.warehouseName
                                    }}
                                        onChange={validateWarehouseName}
                                    />
                                    <InputError errorText={warehouseNameInfo.error} />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputBox data={{
                                        name: 'gstid', label: 'GST Number*',
                                        value: props?.data?.warehouseTaxId, isDisabled: props.isDisabled
                                    }}
                                        onChange={onGstIdChange}
                                    />
                                    <InputError errorText={gstIdInfo.error} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                {props.isDisabled &&
                                    <Grid item xs={6}>
                                        <InputBox data={{
                                            name: 'Warehouseid', label: 'Warehouse Id*',
                                            value: props?.data?.warehouseId, isDisabled: props.isDisabled
                                        }}
                                            onChange={validateWarehouseDec}
                                        />
                                        <InputError errorText={warehouseDecInfo.error} />
                                    </Grid>
                                }
                                <Grid item xs={6}>
                                    <InputBox data={{
                                        name: 'whdescription', label: 'Warehouse Description*',
                                        value: props?.data?.descp
                                    }}
                                        onChange={validateWarehouseDec}
                                    />
                                    <InputError errorText={warehouseDecInfo.error} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <UploadImage name={'companyphoto'} onImageChange={onPhotoUploadChange} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default WarehouseDetails;