import React, {useEffect, useState} from "react";
import { Address} from '../../../../utils/ResponseSchema';
import AddressDetails from '../../../atoms/addressforms/AddressDetails';

interface WearehouseAddressProps {
    onWearehouseAddressUpdate?: (data: Address) => void;
    data?: Address;
    editMode?: boolean;
}

const WearehouseAddress = (props: WearehouseAddressProps) => {

    const [addressId, setAddressId] = useState('');

    useEffect(() => {
        if(props.data && props.data.addressId !== addressId) {
            setAddressId(props.data.addressId || '');
        }
    }, [props.data?.addressId]);

    const onAddressUpdate = (data: Address) => {
        const addressData = {} as Address;
        addressData.addressId = addressId;
        addressData.addressType = data.addressType;
        addressData.city = data.city;
        addressData.country = data.country;
        addressData.state = data.state;
        addressData.pincode = data.pincode;
        addressData.plotNo = data.plotNo;
        addressData.houseNo = data.houseNo;
        addressData.streetDetails = data.streetDetails;
        if(props?.onWearehouseAddressUpdate) {
            props.onWearehouseAddressUpdate(addressData);
        }
    }
    if(addressId || !props.editMode) {
        return (
            <div>
                <div className='primary-gradient'>
                    <div className='font-white p-sm f-18px f-bold'>Where's warehouse located?</div>
                </div>

                <div className='p-md'>
                    <AddressDetails
                        addressTypeHide={false}
                        onUpdate={onAddressUpdate}
                        data={props.data}
                    />
                </div>
            </div>
        )
    } else {
        return (<> </>)
    }
}

export default WearehouseAddress;