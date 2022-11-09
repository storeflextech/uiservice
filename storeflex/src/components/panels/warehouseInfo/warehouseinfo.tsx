import React from 'react';
import {ACTIONS_TYPE} from '../../../utils/Constants';
import AddWarehouse from './AddWarehouse';


interface WarehouseInfoProps {
    onSave?(isSaved: boolean): void;
    action?: string;
}

const WarehouseInfo = (props: WarehouseInfoProps) => {
    if(ACTIONS_TYPE.add === props?.action) {
        return (
            <div>
                <AddWarehouse />
            </div>
         );
    } else {
        return (
            <div>
                View  
            </div>
         );
    }
    
}

export default WarehouseInfo;