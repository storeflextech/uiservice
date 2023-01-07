import React, {useEffect, useState}  from 'react';
import { Button } from '@mui/material';
import swal from 'sweetalert';
import Api from '../../../../src/api/Api';
import { LoaderFull } from '../../atoms/loader/loader';
import WearehouseAddress from './component/WearehouseAddress';
import WearehousePricing from './component/WearehousePricing';
import WarehouseHours from './component/WarehouseHours';
import WarehouseLayout, {WarehouseLayoutObj} from './component/WarehouseLayout';
import WarehouseDetails from './component/WarehouseDetails';
import { WarehousePostData, Hours } from '../../../api/ApiConfig'; 
import { WhDetail } from './component/WarehouseDetails';
import { Address, objectData, Warehouseprice } from '../../../utils/ResponseSchema';
import { Value } from 'sass';
import { AddBusiness } from '@mui/icons-material';


const AddWarehouse = () => {

    const api = new Api();
    const [isLoader, setIsLoader] = useState(false);
    const [whDetails, setWhDetails] = useState<WhDetail>({});
    const [whAddress, setWhAddress] = useState<Address>({});
    const [pricing, setPricing] = useState<Warehouseprice>({});
    const [whHours, setWhHours] = useState<Hours>({});
    const [whLayout, setLayout] = useState<WarehouseLayoutObj>({});


    const onWarehouseDetailsUpdate = (data: WhDetail) => {
        setWhDetails(data);
        console.log(' onWarehouseDetailsUpdate >>> ', data);
    }
    const onWearehouseAddressUpdate = (data: Address) => {
        setWhAddress(data);
        console.log(' onWearehouseAddressUpdate >>> ', data);
    }
    const onWearehousePricingUpdate = (data: any) => {
        setPricing(data);
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
        
         if(!whDetails?.warehouseName){
            alert('Warehouse Name is Required');
        }
        else if(!whDetails?.descp){
            alert('Warehouse Description is required');
        }
        else if(!whDetails?.warehouseTaxId){
            alert('gst is required');
        }
        else if(!whDetails?.clientId){
            alert('Client id is required');
        }
        else if(!whAddress?.plotNo){
            alert('Plot No is required');
        }
        else if(!whAddress?.houseNo){
            alert('House No is required');
        }
        else if(!whAddress?.streetDetails){
            alert('Street No is required');
        }
        else if(!whAddress?.state){
            alert('State is required');
        }
        else if(!whAddress?.city){
            alert('City is required');
        }
        else if(!whAddress?.country){
            alert('country is required');
        }
        else if(!whAddress?.pincode){
            alert('Pincode is required');
        }
        else if(! whLayout?.dockhighdoors){
            alert('Dock high door is required');
        }
        else if(!whLayout?.atgradedoors){
            alert('At grade door is required');
        }
        else if(!whLayout?.ceillingheight){
            alert('Ceilling height is required');
        }
        else if(!whLayout?.forkliftcapacity){
            alert('Fork lift capacity is required');
        }
      
         else{
        const buildPostData = {} as WarehousePostData;
        buildPostData.clientId = whDetails?.clientId;
        buildPostData.warehouseName = whDetails?.warehouseName;
        buildPostData.warehouseTaxId = whDetails?.warehouseTaxId;
        buildPostData.descp = whDetails?.descp;
        buildPostData.address = [whAddress];
        buildPostData.hours = whHours;
        buildPostData.facilitiesId = whLayout.facilitiesId;
        buildPostData.industryId =  whLayout.industryId;
        buildPostData.storagesId = whLayout.storagesId;
        buildPostData.dockhighdoors = whLayout.dockhighdoors;
        buildPostData.atgradedoors = whLayout.atgradedoors;
        buildPostData.ceillingheight = whLayout.ceillingheight;
        buildPostData.forkliftcapacity = whLayout.forkliftcapacity;
       
        

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
            <Button className="btn primary-btn sf-btn" variant="contained" onClick={() => { addWarehouse ()}}> Save </Button>
        </div>
        </>
    )
}

export default AddWarehouse;
