import React, {useState, useEffect} from "react";
import { Grid } from '@mui/material';

interface WarehouseHoursProps {
    onWarehouseHoursUpdate?: (data: any) => void;
}

const WarehouseHours = (props: WarehouseHoursProps) => {

    const [allDay, setAllDay] = useState(false);
    const [days, setDays] = useState({});
    const [onUpdateInfo , setonUpdateInfo] = useState(false);

    useEffect(() => {
        if(onUpdateInfo) {
            setonUpdateInfo(false);
            onChangeUpdateInfo();
        }
    }, [onUpdateInfo]);

    const onChangeUpdateInfo = () => {
        // if(props?.onWarehouseHoursUpdate) {
        //     const obj = {
        //     };
        //     // props.onWarehouseHoursUpdate(obj);
        // }
    }

    const selectDayRange = (day: string) => {
        if(day === 'alldays') {
            setAllDay(true);
        } else {
            setAllDay(false);
        }
    }
    const selectDays = (evn: any) => {
        const traget =  evn.target.value;
        const status = evn.target.checked || false;
        setDays({...days, [traget]: status})
    }

    const checkSelectedDays = () => {
        if(allDay) {
            return allDay;
        } 
        // else {
        //     return undefined;
        // }
    }
    return (
        <>
            <div className='m-bot-lg'>
                <div className='primary-gradient m-bot-md'>
                    <div className='font-white p-sm f-18px f-bold'>Facility Hours</div>
                </div>

                <div className='p-md'>
                    <div>
                        <div>

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={4}>
                                    <input type="radio" name="week" id="days" onChange={() => {selectDayRange('days')}}/> Select Days Of Works
                                </Grid>
                                <Grid item xs={4}>
                                    <input type="radio" name="week" id="alldays"  onChange={() => {selectDayRange('alldays')}}/> Available 7 days a week
                                </Grid>
                            </Grid>

                            <Grid container spacing={2}  columns={{ xs: 6, sm: 12, md: 12 }} sx={{ p: 2 }}>
                                <Grid item xs={1}>
                                <input type="checkbox" name="mon" id="mon" value='Mon' onChange={selectDays} checked={checkSelectedDays()}/> Mon
                                </Grid>

                                <Grid item xs={1}>
                                <input type="checkbox" name="tues" id="tues" value='Tues' onChange={selectDays} checked={checkSelectedDays()}/> Tues
                                </Grid>

                                <Grid item xs={1}>
                                <input type="checkbox" name="wed" id="wed" value='Wed' onChange={selectDays} checked={checkSelectedDays()}/> Wed
                                </Grid>

                                <Grid item xs={1}>
                                <input type="checkbox" name="thu" id="thu" value='Thu' onChange={selectDays} checked={checkSelectedDays()}/> Thu
                                </Grid>
                                <Grid item xs={1}>
                                <input type="checkbox" name="fri" id="fri" value='Fri' onChange={selectDays} checked={checkSelectedDays()}/> Fri
                                </Grid>
                                <Grid item xs={1}>
                                <input type="checkbox" name="sat" id="sat" value='Sat' onChange={selectDays} checked={checkSelectedDays()}/> Sat
                                </Grid>
                                <Grid item xs={1}>
                                <input type="checkbox" name="sub" id="sub" value='Sun' onChange={selectDays} checked={checkSelectedDays()}/> Sun
                                </Grid>
                            </Grid>

                            <br/>
                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                                <Grid item xs={4}>
                                <input type="radio" name="time" id="" /> Select Time Range

                                </Grid>
                                <Grid item xs={4}>
                                    <input type="radio" name="time" id="" /> Available 24x7
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }} sx={{ p: 2 }}>
                                <Grid item xs={2}>
                                    <label htmlFor="">From</label>
                                <input type="time" className="form-control" name="" id="" />    
                                </Grid>

                                <Grid item xs={2}>
                                    <label htmlFor="">To</label>
                                <input type="time" className="form-control" name="" id="" /> 
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default WarehouseHours;