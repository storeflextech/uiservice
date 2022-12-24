import React, {useEffect, useState}  from 'react';
import { Button } from '@mui/material';
import swal from 'sweetalert';
import Footer from '../../footer/footer';
import Api from '../../../../src/api/Api';
import { LoaderFull } from '../../atoms/loader/loader';
import WearehouseAddress from './component/WearehouseAddress';
import WearehousePricing from './component/WearehousePricing';
import WarehouseHours from './component/WarehouseHours';
import WarehouseLayout from './component/WarehouseLayout';
import WarehouseDetails from './component/WarehouseDetails';
import { AddWarehousePostData } from '../../../api/ApiConfig'; 
import { WhDetail } from './component/WarehouseDetails';
import { Address } from '../../../utils/ResponseSchema';

const AddWarehouse = () => {

    const api = new Api();
    const [isLoader, setIsLoader] = useState(false);
    const [whDetails, setWhDetails] = useState<WhDetail>({});
    const [whAddress, setWhAddress] = useState<Address>({});
    const [whPricing, setWhPricing] = useState();
    const [whHours, setWhHours] = useState();
    const [whLayout, setLayout] = useState();

    const onWarehouseDetailsUpdate = (data: WhDetail) => {
        setWhDetails(data);
        console.log(' onWarehouseDetailsUpdate >>> ', data);
    }
    const onWearehouseAddressUpdate = (data: Address) => {
        setWhAddress(data);
        console.log(' onWearehouseAddressUpdate >>> ', data);
    }
    const onWearehousePricingUpdate = (data: any) => {
        setWhPricing(data);
        console.log(' onWearehousePricingUpdate >>> ', data);
    }
    const onWarehouseHoursUpdate = (data: any) => {
        setWhHours(data);
        console.log(' onWarehouseHoursUpdate >>> ', data);
    }
    const onWarehouseLayoutUpdate = (data: any) => {
        setLayout(data);
        console.log(' onWarehouseLayoutUpdate >>> ', data);
    }

    const addWarehouse = () => {

        const buildPostData = {} as AddWarehousePostData;
        buildPostData.clientId = whDetails?.clientId;
        buildPostData.warehouseName = whDetails?.warehouseName;
        buildPostData.warehouseTaxId = whDetails?.warehouseTaxId;
        buildPostData.descp = whDetails?.descp;
        buildPostData.addresse = [whAddress];
        buildPostData.facilitiesId = '';
        buildPostData.industryId = '';
        buildPostData.storagesId = '';

        setIsLoader(true);
        api.addWarehouse(buildPostData).then((resp) => {
            setIsLoader(false);
            if(resp && resp.methodReturnValue.clientId) {
                  // upladPhoto(imageData, resp.methodReturnValue.clientId);
            }
            swal('Success! Your warehouse has been added successfully!', {
                icon: "success",
            });
        }).catch((error) => {
            setIsLoader(false);
            console.log(' addWarehouse creation erroor ', error);
        });
    }
    return (
        <>
        {isLoader && <LoaderFull />}
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
