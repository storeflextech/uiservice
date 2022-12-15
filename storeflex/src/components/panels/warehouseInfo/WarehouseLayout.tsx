import React, {useState, useEffect} from "react";
import { Grid  } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import Api from "../../../api/Api";
import { WarehouseCategories } from "../../../utils/ResponseSchema";

const WarehouseLayout = () => {

    const api = new Api();
    const [industriesCategories, setIndustriesCategories] = useState({});
    const [storagesCategories, setStoragesCategories] = useState({});
    const [facilitiesCategories, setFacilitiesCategories] = useState({});

    const [whCategories , setWhCategories] = useState<WarehouseCategories>();

    useEffect(() => {
        getWhCategories();
    },[]) 

    const getWhCategories = () => {
        api.getWarehouseCategories().then((resp: WarehouseCategories ) => {
            if(resp?.methodReturnValue) {
                setWhCategories(resp);
            }
        }).catch((error)=>{
            console.log(' getWhCategories : getWarehouseCategories error >> ', error);
        });
      }

    const selectDays = (evn: any) => {
        const traget =  evn.target.value;
        const status = evn.target.checked || false;
        // setDays({...days, [traget]: status})
    }

    const showIndustriesCategories = () => {

        if(whCategories?.methodReturnValue?.industries) {
            const obj = Object.entries(whCategories?.methodReturnValue?.industries);
            return (
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={12}>
                    <label className="f-bold" htmlFor="">{whCategories?.methodReturnValue.industry}</label>
                </Grid>
                {
                    obj.map((item, index) => {
                        const keyId = item[0];
                        return(
                            <Grid key={keyId} item xs={4}>
                                <div>
                                    <label>
                                        <input type="checkbox" id={item[0]} name={item[0]} />
                                        <span className="p-left-sm">{item[1]}</span>
                                    </label>
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
            )
        } else {
            return (<> </>)
        }
    }
    const showStoragesCategories = () => {

        if(whCategories?.methodReturnValue?.storages) {
            const obj = Object.entries(whCategories?.methodReturnValue?.storages);
            return (
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={12}>
                    <label className="f-bold" htmlFor="">{whCategories?.methodReturnValue.storage}</label>
                </Grid>
                {
                    obj.map((item, index) => {
                        const keyId = item[0];
                        return(
                            <Grid key={keyId} item xs={4}>
                                <div>
                                    <label>
                                        <input type="checkbox" id={item[0]} name={item[0]} />
                                        <span className="p-left-sm">{item[1]}</span>
                                    </label>
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
            )
        } else {
            return (<> </>)
        }
    }
    const showFacilitiesCategories = () => {

        if(whCategories?.methodReturnValue?.facilities) {
            const obj = Object.entries(whCategories?.methodReturnValue?.facilities);
            return (
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={12}>
                    <label className="f-bold" htmlFor="">{whCategories?.methodReturnValue.facility}</label>
                </Grid>
                {
                    obj.map((item, index) => {
                        const keyId = item[0];
                        return(
                            <Grid key={keyId} item xs={4}>
                                <div>
                                    <label>
                                        <input type="checkbox" id={item[0]} name={item[0]} />
                                        <span className="p-left-sm">{item[1]}</span>
                                    </label>
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
            )
        } else {
            return (<> </>)
        } 
    }
    return (
        <>
            <div className='m-bot-lg'>
                <div className='primary-gradient m-bot-md'>
                    <div className='font-white p-sm f-18px f-bold'>Warehouse Layout (select all that apply)</div>
                </div>
                <div className='p-md'>
                    <div>
                        <div>
                            {showIndustriesCategories()}
                            <br />
                            <br />
                            {showStoragesCategories()}
                            <br />
                            <br />
                            {showFacilitiesCategories()}
                            <br />
                            <br />

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                            <Grid item xs={3}>
                                    <InputBox data={{ name: '', label: '#Dock High Doors', value: '' }}
                                    // onChange={validateAddress}
                                    />
                                    {/* {address && <p className="text-red">{address}</p>} */}
                                </Grid>
                                <Grid item xs={3}>
                                    <InputBox data={{ name: '', label: '#At Grade Doors', value: '' }}
                                    // onChange={validateAddress}
                                    />
                                    {/* {address && <p className="text-red">{address}</p>} */}
                                </Grid>

                                <Grid item xs={3}>
                                    <InputBox data={{ name: '', label: 'Clear Ceilling Height (feet)', value: '' }}
                                    // onChange={validateZipCode}
                                    />
                                   
                                </Grid>
                                <Grid item xs={3}>
                                    <InputBox data={{ name: '', label: 'Max Forklift Capacity (Lbs)', value: '' }}
                                    // onChange={validateZipCode}
                                    />
                                   
                                </Grid>
                            </Grid>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default WarehouseLayout;