import React from "react";
import { Address} from '../../../utils/ResponseSchema';
import AddressDetails from '../../atoms/addressforms/AddressDetails';


const WearehouseAddress = () => {

    const onAddressUpdate = (data: Address) => {
        // const addressData = {} as Address;
        // addressData.addressType = data.addressType;
        // addressData.city = data.city;
        // addressData.country = data.country;
        // addressData.state = data.state;
        // addressData.pincode = data.pincode;
        // addressData.plotNo = data.plotNo;
        // addressData.houseNo = data.houseNo;
        // addressData.streetDetails = data.streetDetails;
        // console.log(addressData);
        // setCompanyAddressInfo(addressData);
    }
    return (
        <>

            <div>
                <div className='primary-gradient'>
                    <div className='font-white p-sm f-18px f-bold'>Where's warehouse located?</div>
                </div>

                <div className='p-md'>
                    <AddressDetails
                        addresLine1={'NA'}
                        city={'NA'}
                        state={'NA'}
                        zip={''}
                        country={'01'}
                        countryCode={'IND'}
                        addressTypeHide={true}
                        onUpdate={onAddressUpdate}
                    />
                </div>
            </div>
        </>
    )
}

export default WearehouseAddress;