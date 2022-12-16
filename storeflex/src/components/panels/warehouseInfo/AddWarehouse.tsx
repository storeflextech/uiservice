import React  from 'react';
import WearehouseAddress from './WearehouseAddress';
import WearehousePricing from './WearehousePricing';
import WarehouseHours from './WarehouseHours';
import WarehouseLayout from './WarehouseLayout';
import { Button } from '@mui/material';
import Footer from '../../footer/footer';
import WarehouseDetails from './WarehouseDetails';

const AddWarehouse = () => {

    const onWarehouseDetailsUpdate = (data: any) => {
        console.log(' onWarehouseDetailsUpdate >>> ', data);
    }
    const onWearehouseAddressUpdate = (data: any) => {
        console.log(' onWearehouseAddressUpdate >>> ', data);
    }
    const onWearehousePricingUpdate = (data: any) => {
        console.log(' onWearehousePricingUpdate >>> ', data);
    }
    const onWarehouseHoursUpdate = (data: any) => {
        console.log(' onWarehouseHoursUpdate >>> ', data);
    }
    const onWarehouseLayoutUpdate = (data: any) => {
        console.log(' onWarehouseLayoutUpdate >>> ', data);
    }
    return (
        <>
        {<WarehouseDetails onWarehouseDetailsUpdate={onWarehouseDetailsUpdate}/>}
        {<WearehouseAddress onWearehouseAddressUpdate={onWearehouseAddressUpdate}/>}
        {<WearehousePricing onWearehousePricingUpdate={onWearehousePricingUpdate}/>}
        {<WarehouseHours onWarehouseHoursUpdate={onWarehouseHoursUpdate}/>}
        {<WarehouseLayout onWarehouseLayoutUpdate={onWarehouseLayoutUpdate}/>}
        <div className='p-top-md align-c'>
            <Button className='sf-btn' variant="contained" onClick={() => { alert('Cancel') }}> Cancel </Button>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Button className="btn primary-btn sf-btn" variant="contained" onClick={() => {}}> Save </Button>
        </div>
        <Footer/>
        </>
    )
}

export default AddWarehouse;
