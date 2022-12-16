import React, {useState, useEffect} from "react";
import { Grid  } from '@mui/material';
import InputBox from '../../atoms/textfield/InputBox';
import Api from "../../../api/Api";
import { WarehouseCategories } from "../../../utils/ResponseSchema";


interface WarehouseLayoutProps {
    onWarehouseLayoutUpdate?: (data: any) => void;
}

const WarehouseLayout = (props: WarehouseLayoutProps) => {

    const api = new Api();
    const [industriesCategories, setIndustriesCategories] = useState({});
    const [storagesCategories, setStoragesCategories] = useState({});
    const [facilitiesCategories, setFacilitiesCategories] = useState({});
    const [onUpdateInfo , setonUpdateInfo] = useState(false);

    const [whCategories , setWhCategories] = useState<WarehouseCategories>();

    useEffect(() => {
        if(onUpdateInfo) {
            setonUpdateInfo(false);
            onChangeUpdateInfo();
        }
        if(!whCategories) {
            getWhCategories();
        }
    },[onUpdateInfo]);

    const filterCode = (obj: any) => {
        const codeArry: string[] = [];
        Object.entries(obj).forEach((item) => {
            if(item[1]) {
                codeArry.push(item[0]);
            }
        })
        if(codeArry.length > 0) {
            return codeArry.join('|');
        } else {
            return '';
        }
    }

    const onChangeUpdateInfo = () => {
        if(props?.onWarehouseLayoutUpdate) {
            const obj = {
                industryId: filterCode(industriesCategories),
                storagesId: filterCode(storagesCategories),
                facilitiesId: filterCode(facilitiesCategories)
            };
            props.onWarehouseLayoutUpdate(obj);
        }
    }
    const getWhCategories = () => {
        api.getWarehouseCategories().then((resp: WarehouseCategories ) => {
            if(resp?.methodReturnValue) {
                setWhCategories(resp);
            }
        }).catch((error)=>{
            console.log(' getWhCategories : getWarehouseCategories error >> ', error);
        });
      }

    const onChangeIndustriesCategories = (evn: any) => {
        const tragetCode =  evn?.target?.id || 'NA';
        const isSelected = evn?.target?.checked || false;
        setIndustriesCategories({...industriesCategories, [tragetCode]: isSelected});
        setonUpdateInfo(true);
    }

    const onChangeStoragesCategories = (evn: any) => {
        const tragetCode =  evn?.target?.id || 'NA';
        const isSelected = evn?.target?.checked || false;
        setStoragesCategories({...storagesCategories, [tragetCode]: isSelected});
        setonUpdateInfo(true);
    }

    const onChangeFacilitiesCategories = (evn: any) => {
        const tragetCode =  evn?.target?.id || 'NA';
        const isSelected = evn?.target?.checked || false;
        setFacilitiesCategories({...facilitiesCategories, [tragetCode]: isSelected});
        setonUpdateInfo(true);
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
                                        <input type="checkbox" id={item[0]} name={item[0]} onChange={onChangeIndustriesCategories}/>
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
                                        <input type="checkbox" id={item[0]} name={item[0]} onChange={onChangeStoragesCategories}/>
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
                                        <input type="checkbox" id={item[0]} name={item[0]} onChange={onChangeFacilitiesCategories}/>
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