import React from 'react';
import AddBusiness from './addUser';
import ViewBusiness from './viewUser';
import EditBusiness from './editUser';
import { ACTIONS_TYPE } from '../../utils/Constants';

interface UserInfoProps {
    onSave?(isSaved: boolean): void;
    action?: string;
}

const UserInfo = (props: UserInfoProps) => {
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
export default UserInfo;