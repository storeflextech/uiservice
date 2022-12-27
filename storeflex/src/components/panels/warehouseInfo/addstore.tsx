import React, { useState } from 'react';
import { Box, Container, Button } from '@mui/material';
import StoreInfo from '../storeInfo/storeInfo';
import Accordian from '../../atoms/accordian/Accordian';
import { StoreDetails } from '../../../utils/ResponseSchema';
const storeData = require('../../../mockData/storeinfoData.json');

const storeInfo = {
  "businessid": "",
  "storeid": "",
  "name": "",
  "address": "",
  "phone": '',
  "gstn": "",
  "city": "",
  "state": "",
  "zip": ''
}

const AddStore = () => {
  const data = storeData.ADDED;
  // const data = storeData.EMPTY;
  const storeList = data.storeList as StoreDetails[];
  const [totalStore, setTotalStore] = useState(storeList);

  const saveStoreInfo = () => {
    // const newStore = t;
    // storeList.push(newStore);
    console.log(storeList);
    setTotalStore(storeList);
    console.log(totalStore);

  }

  const addWarehouse = () => {
    // const data = storeData.ADDED;
    const data = {
      name: 'Warehouse Name',
      city: ''
    } as StoreDetails;
    const storeList = [data];
    setTotalStore(storeList);
  }

  const showStore = () => {
    if (totalStore.length > 0) {
      return (
        <div>
          {
            totalStore.map((item: StoreDetails, index) => {
              const storeName = `${item.name} : ${item.city}`
              const acIsOpen = !item.storeid;
              return (
                <div key={'store_' + index}>
                  <Accordian summaryTxt={storeName} isOpen={acIsOpen}>
                    {
                      <>
                        <StoreInfo data={item} />
                        <div className='p-sm align-c'>
                          <Button variant="contained" onClick={() => { alert('Add') }}> Add </Button>
                          <span className='m-left-md'>
                            <Button variant="contained" onClick={() => { alert('Cancel') }}> Cancel </Button>
                          </span>
                        </div>
                      </>
                    }
                  </Accordian>
                </div>
              )
            })}
        </div>
      )
    } else {
      return (
        <>
        </>
      )
    }
  }

  return (
    <>
      <Container component="div" maxWidth="md" className='c-box-shadow p-no'>
        <div className='blue-gradient sf-flex sf-justify'>
          <div className='font-white p-md f-18px f-bold'>Warehouse Details</div>
          <div className='p-sm align-c'>
            <Button variant="contained" color="success" onClick={() => { addWarehouse() }}> Add </Button>
          </div>
        </div>
        <Box sx={{ backgroundColor: '#F8F9F9' }} className='p-top-sm'>
          <div> {showStore()}</div>
        </Box>
      </Container>
    </>
  );
};

export default AddStore;