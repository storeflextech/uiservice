import React from 'react';
import WearehouseAddress from './WearehouseAddress';
import WearehousePricing from './WearehousePricing';
import WarehouseHours from './WarehouseHours';
import WarehouseLayout from './WarehouseLayout';

const AddWarehouse = () => {
    return (
        <>
        { <WearehouseAddress />}
        {<WearehousePricing />}
        {<WarehouseHours />}
        {<WarehouseLayout />}
        </>
       
    )
}

export default AddWarehouse;
