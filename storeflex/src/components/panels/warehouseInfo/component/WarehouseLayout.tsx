import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material';
import InputBox from '../../../atoms/textfield/InputBox';
import Api from "../../../../api/Api";
import { WarehouseCategories } from "../../../../utils/ResponseSchema";
export interface WarehouseLayoutObj {
    industryId?: string;
    storagesId?: string;
    facilitiesId?: string;
    dockhighdoors?: string;
    atgradedoors?: string;
    ceillingheight?: string;
    forkliftcapacity?: string;
};
interface WarehouseLayoutProps {
    onWarehouseLayoutUpdate?: (data: any) => void;
}

const WarehouseLayout = (props: WarehouseLayoutProps) => {
    const api = new Api();
    const [industriesCategories, setIndustriesCategories] = useState({});
    const [storagesCategories, setStoragesCategories] = useState({});
    const [facilitiesCategories, setFacilitiesCategories] = useState({});
    const [onUpdateInfo, setonUpdateInfo] = useState(false);
    const [dockHighDoors, setDockHighdoors] = useState('');
    const [atGradeDoors, setAtGradeDoors] = useState('');
    const [ceillingHeight, setCeillingHeight] = useState('');
    const [forkLiftCapacity, setForkLiftCapacity] = useState('');
    const [whCategories, setWhCategories] = useState<WarehouseCategories>();

    useEffect(() => {
        if (onUpdateInfo) {
            setonUpdateInfo(false);
            onChangeUpdateInfo();
        } if (!whCategories) {
            getWhCategories();
        }
    }, [onUpdateInfo]);

    const filterCode = (obj: any) => {
        const codeArry: string[] = [];
        Object.entries(obj).forEach((item) => {
            if (item[1]) {
                codeArry.push(item[0]);
            }
        })
        if (codeArry.length > 0) {
            return codeArry.join('|');
        } else {
            return '';
        }
    }

    const onChangeUpdateInfo = () => {
        if (props?.onWarehouseLayoutUpdate) {
            const obj = {
                industryId: filterCode(industriesCategories),
                storagesId: filterCode(storagesCategories),
                facilitiesId: filterCode(facilitiesCategories),
                dockhighdoors: dockHighDoors,
                atgradedoors: atGradeDoors,
                ceillingheight: ceillingHeight,
                forkliftcapacity: forkLiftCapacity
            } as WarehouseLayoutObj
            props.onWarehouseLayoutUpdate(obj);
        }
    }
    const getWhCategories = () => {
        api.getWarehouseCategories().then((resp: WarehouseCategories) => {
            if (resp?.methodReturnValue) {
                setWhCategories(resp);
            }
        }).catch((error) => {
            console.log(' getWhCategories : getWarehouseCategories error >> ', error);
        });
    }

    const onChangeIndustriesCategories = (evn: any) => {
        const tragetCode = evn?.target?.id || 'NA';
        const isSelected = evn?.target?.checked || false;
        setIndustriesCategories({ ...industriesCategories, [tragetCode]: isSelected });
        setonUpdateInfo(true);
    }

    const onChangeStoragesCategories = (evn: any) => {
        const tragetCode = evn?.target?.id || 'NA';
        const isSelected = evn?.target?.checked || false;
        setStoragesCategories({ ...storagesCategories, [tragetCode]: isSelected });
        setonUpdateInfo(true);
    }

    const onChangeFacilitiesCategories = (evn: any) => {
        const tragetCode = evn?.target?.id || 'NA';
        const isSelected = evn?.target?.checked || false;
        setFacilitiesCategories({ ...facilitiesCategories, [tragetCode]: isSelected });
        setonUpdateInfo(true);
    }
    const [errorMessage0, setErrorMessage0] = React.useState("");
    const [errorMessage1, setErrorMessage1] = React.useState("");
    const [errorMessage2, setErrorMessage2] = React.useState("");
    const [errorMessage3, setErrorMessage3] = React.useState("");

    const onChangeFearureChange = (evt: any) => {
        if (evt?.target?.value) {
            const name = evt.target.name;
            const value = evt.target.value;
            if (name === 'dockhighdoors') {
                setDockHighdoors(value);
                if (value > 10 || value < 1)
                    setErrorMessage0("Dock High Doors should be between 1-10")
                else {
                    setErrorMessage0("")
                }
            } else if (name === 'atgradedoors') {
                setAtGradeDoors(value);
                if (value > 3 || value < 1)
                    setErrorMessage1("At Grade Doors should be between 1-3")
                else {
                    setErrorMessage1("")
                }
            } else if (name === 'ceillingheight') {
                setCeillingHeight(value);
                if (value < 10 || value > 60)
                    setErrorMessage2("Clear Ceiling Height should be between 10ft.-60ft.")
                else {
                    setErrorMessage2("")
                }
            } else if (name === 'forkliftcapacity') {
                setForkLiftCapacity(value);
                if (value < 3000 || value > 70000)
                    setErrorMessage3("Max Forklift Capacity should be between 3,000 Lbs-70,000 Lbs")
                else {
                    setErrorMessage3("")
                }
            } else {
                return false;
            }
            setonUpdateInfo(true);
        }
    }

    const showIndustriesCategories = () => {
        if (whCategories?.methodReturnValue?.industries) {
            const obj = Object.entries(whCategories?.methodReturnValue?.industries);
            return (
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={12}>
                        <label className="f-bold" htmlFor="">{whCategories?.methodReturnValue.industry}</label>
                    </Grid>
                    {
                        obj.map((item, index) => {
                            const keyId = item[0];
                            return (
                                <Grid key={keyId} item xs={4}>
                                    <div>
                                        <label>
                                            <input type="checkbox" id={item[0]} name={item[0]} onChange={onChangeIndustriesCategories} />
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

        if (whCategories?.methodReturnValue?.storages) {
            const obj = Object.entries(whCategories?.methodReturnValue?.storages);
            return (
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={12}>
                        <label className="f-bold" htmlFor="">{whCategories?.methodReturnValue.storage}</label>
                    </Grid>
                    {
                        obj.map((item, index) => {
                            const keyId = item[0];
                            return (
                                <Grid key={keyId} item xs={4}>
                                    <div>
                                        <label>
                                            <input type="checkbox" id={item[0]} name={item[0]} onChange={onChangeStoragesCategories} />
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

        if (whCategories?.methodReturnValue?.facilities) {
            const obj = Object.entries(whCategories?.methodReturnValue?.facilities);
            return (
                <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                    <Grid item xs={12}>
                        <label className="f-bold" htmlFor="">{whCategories?.methodReturnValue.facility}</label>
                    </Grid>
                    {
                        obj.map((item, index) => {
                            const keyId = item[0];
                            return (
                                <Grid key={keyId} item xs={4}>
                                    <div>
                                        <label>
                                            <input type="checkbox" id={item[0]} name={item[0]} onChange={onChangeFacilitiesCategories} />
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
                                    <InputBox data={{ name: 'dockhighdoors', label: '#Dock High Doors', value: '' }}
                                        onChange={onChangeFearureChange}
                                    />
                                    {errorMessage0 && <div className="text-red"> {errorMessage0} </div>}
                                </Grid>
                                <Grid item xs={3}>
                                    <InputBox data={{ name: 'atgradedoors', label: '#At Grade Doors', value: '' }}
                                        onChange={onChangeFearureChange}
                                    />
                                    {errorMessage1 && <div className="text-red"> {errorMessage1} </div>}
                                </Grid>
                                <Grid item xs={3}>
                                    <InputBox data={{ name: 'ceillingheight', label: 'Clear Ceilling Height (feet)', value: '' }}
                                        onChange={onChangeFearureChange}
                                    />
                                    {errorMessage2 && <div className="text-red"> {errorMessage2} </div>}
                                </Grid>
                                <Grid item xs={3}>
                                    <InputBox data={{ name: 'forkliftcapacity', label: 'Max Forklift Capacity (Lbs)', value: '' }}
                                        onChange={onChangeFearureChange}
                                    />
                                    {errorMessage3 && <div className="text-red"> {errorMessage3} </div>}
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