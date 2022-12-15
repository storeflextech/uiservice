import React, {useState} from "react";
import { Grid, TextareaAutosize, Button } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import { validateCharacterLength, validatePhone, validateWebUrl, validateGst } from '../../../utils/CommonUtils';
import { objectData } from '../../../utils/ResponseSchema';
import { InputError } from '../../atoms/textfield/InputError';

interface WearehousePricingProps {
    space?: number;
    rate?: number;
    quantity?: number;

}

const WearehousePricing=(props: WearehousePricingProps) => {

    const [spaceInfo, setSpaceInfo] = useState<objectData>({});
    const [rateInfo, setRateInfo] = useState<objectData>({});
    const [quantityInfo, setQuantityInfo] = useState<objectData>({});


    const validateSpaceInfo = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        if (!obj.val) {
            obj.error = " *Company Name is required. ";
        } else if (!validateCharacterLength(obj.val, 4, 50)) {
            obj.error = " Company Name must be between 4 characters to 50 characters."
        } else {
            obj.error = '';
        }
        setSpaceInfo(obj);
    }

    const validateRateInfo = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        if (!obj.val) {
            obj.error = " *Company Name is required. ";
        } else if (!validateCharacterLength(obj.val, 4, 50)) {
            obj.error = " Company Name must be between 4 characters to 50 characters."
        } else {
            obj.error = '';
        }
        setRateInfo(obj);
    }
    const validateQuantityInfo = (event: any) => {
        const obj = {
            val: event.target.value || '',
            error: '',
            isUpdated: true,
        } as objectData;
        if (!obj.val) {
            obj.error = " *Company Name is required. ";
        } else if (!validateCharacterLength(obj.val, 4, 50)) {
            obj.error = " Company Name must be between 4 characters to 50 characters."
        } else {
            obj.error = '';
        }
        setQuantityInfo(obj);
    }
    


    return (
        <>
            <div>
                <div className='primary-gradient'>
                    <div className='font-white p-sm f-18px f-bold'>Pricing</div>
                </div>
                <div className='p-md'>
                        <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
                            <Grid item xs={4}>
                                <InputBox data={{ name: 'availablespace', label: 'Total Available Space (sq.ft)*', value: '' }}
                                    onChange={validateSpaceInfo}
                                />
                                <InputError errorText={spaceInfo.error}/>
                            </Grid>
                            <Grid item xs={4}>
                                <InputBox data={{ name: 'rate', label: 'Rate(Rs)/sq.ft/month *', value: '' }}
                                    onChange={validateRateInfo}
                                />
                            <InputError errorText={rateInfo.error}/>
                            </Grid>
                            <Grid item xs={4}>
                                <InputBox data={{ name: 'quantity', label: 'Minimum Order Quantity (sq.ft)*', value: '' }}
                                    onChange={validateQuantityInfo}
                                />
                                <InputError errorText={quantityInfo.error}/>
                            </Grid>
                        </Grid>
                </div>
            </div>
        </>
    )
}


export default WearehousePricing;