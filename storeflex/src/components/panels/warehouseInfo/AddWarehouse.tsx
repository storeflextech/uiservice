import React from 'react';
import WearehouseAddress from './WearehouseAddress';
import WearehousePricing from './WearehousePricing';
import WarehouseHours from './WarehouseHours';
import WarehouseLayout from './WarehouseLayout';
import { Button } from '@mui/material';

const AddWarehouse = () => {
    return (
        <>
        { <WearehouseAddress />}
        {<WearehousePricing />}
        {<WarehouseHours />}
        {<WarehouseLayout />}
        <div className='p-top-md align-c'>
                        <Button className='sf-btn' variant="contained" onClick={() => { alert('Cancel') }}> Cancel </Button>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Button className="btn primary-btn sf-btn" variant="contained" onClick={() => {}}> Save </Button>
                    </div>
        </>
       
    )
}

export default AddWarehouse;
