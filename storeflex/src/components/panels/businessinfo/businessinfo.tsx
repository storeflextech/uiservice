import React from 'react';
import AddBusiness from './addBusiness';
import ViewBusiness from './viewBusiness';
import EditBusiness from './editBusiness';
import {ACTIONS_TYPE} from '../../../utils/Constants';

interface BusinessInfoProps {
    onSave?(isSaved: boolean): void;
    action?: string;
}

const BusinessInfo = (props: BusinessInfoProps) => {
    if(ACTIONS_TYPE.add === props?.action) {
        return (
            <AddBusiness />
         );
    }else  if(ACTIONS_TYPE.edit === props?.action) {
        return (
            <EditBusiness />
         );
    } else {
        return (
            <ViewBusiness />
         );
    }
    
}

export default BusinessInfo;