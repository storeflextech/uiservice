import React, {useEffect, useState}  from 'react';
import { useNavigate, useLocation } from "react-router-dom";
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
import { Address, Warehouseprice, EditWarehouseDetails } from '../../../utils/ResponseSchema';

interface EditWarehouseProps {
  profileData?: EditWarehouseDetails;
  onSave?(isSaved: boolean): void;
  action?: string;
}
const EditWarehouse = (props: EditWarehouseProps) => {

  const profile = {} as EditWarehouseDetails;
  const location = useLocation();
  const navigate = useNavigate();
  const [warehouseDetails, setWarehouseDetails] = useState<WarehousePostData>({});
  const api = new Api();
  const [isLoader, setIsLoader] = useState(false);
  const [whDetails, setWhDetails] = useState<WhDetail>({});
  const [whAddress, setWhAddress] = useState<Address>({});
  const [pricing, setPricing] = useState<Warehouseprice>({});
  const [whHours, setWhHours] = useState<Hours>({});
  const [whLayout, setLayout] = useState<WarehouseLayoutObj>({});

    useEffect(() => {
      const whId = location.state.editRecord;
      getWarehouseDataById(whId);
    }, []);

    const getWarehouseDataById = (whId: string) => {
      setIsLoader(true);
      api.getWarehouseById(whId).then((resp) => {
          setIsLoader(false);
          if(resp.methodReturnValue) {
            warehouseDataFormatter(resp.methodReturnValue);
          }
         
      }).catch((error) => {
          setIsLoader(false);
          console.log(' addWarehouse creation erroor ', error);
      });
    }

    const warehouseDataFormatter = (data: WarehousePostData) => {
      console.log(' >>>>> warehouseDataFormatter ' , data);
      // setWarehouseDetails(warehouseData);
      const whDetailObj = {} as WhDetail;
      whDetailObj.clientId = data?.clientId;
      whDetailObj.clientName = data?.clientName;
      whDetailObj.warehouseId = data?.warehouseId;
      whDetailObj.warehouseName = data?.warehouseName;
      whDetailObj.warehouseTaxId = data?.warehouseTaxId;
      whDetailObj.descp = data.descp;
      onWarehouseDetailsUpdate(whDetailObj);

      const address = data?.address?.[0];
      const whAddressObj = {} as Address;
      whAddressObj.addressId = address?.addressId;
      whAddressObj.addressType = address?.addressType;
      whAddressObj.city = address?.city;
      whAddressObj.country = address?.country;
      whAddressObj.houseNo = address?.houseNo;
      whAddressObj.pincode = address?.pincode;
      whAddressObj.plotNo = address?.plotNo;
      whAddressObj.state = address?.state;
      whAddressObj.streetDetails = address?.streetDetails;
      onWearehouseAddressUpdate(whAddressObj);
    };

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
        buildPostData.warehouseprice = pricing;

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
        {<WarehouseDetails data={whDetails} onWarehouseDetailsUpdate={onWarehouseDetailsUpdate} isDisabled={true}/>}
        {<WearehouseAddress data={whAddress} onWearehouseAddressUpdate={onWearehouseAddressUpdate}/>}
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

export default EditWarehouse;
