import React from 'react';
import AddBusiness from './addBusiness';
import ViewBusiness from './viewBusiness';
import {ACTIONS_TYPE} from '../../../utils/Constants';

// const storeData = require('../mockData/storeinfoData.json');


interface BusinessInfoProps {
    onSave?(isSaved: boolean): void;
    action?: string;
}

const BusinessInfo = (props: BusinessInfoProps) => {
    if(ACTIONS_TYPE.add === props?.action) {
        return (
            <AddBusiness />
         );
    } else {
        return (
            <ViewBusiness />
         );
    }
    
}

export default BusinessInfo;