import React, { useState, useEffect } from "react";
import { Grid } from '@mui/material';
import InputBox from "../../../atoms/textfield/InputBox";
import { Hours } from "../../../../api/ApiConfig";

interface WarehouseHoursProps {
    onWarehouseHoursUpdate?: (data: any) => void;
}

const daysArry = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

const WarehouseHours = (props: WarehouseHoursProps) => {

    const [allDay, setAllDay] = useState(false);
    const [days, setDays] = useState({});
    const [fromTime, setFromTime] = useState('00:00');
    const [toTime, setToTime] = useState('00:00');

    const [onUpdateInfo, setOnUpdateInfo] = useState(false);

    useEffect(() => {
        if (onUpdateInfo) {
            setOnUpdateInfo(false);
            onChangeUpdateInfo();
        }
    }, [onUpdateInfo]);

    const onChangeUpdateInfo = () => {
        if(props?.onWarehouseHoursUpdate) {
            let selectedDays = '';
            if(allDay ) {
                selectedDays = 'alldays';
            } else {
                const dayArry: string[] = [];
                for (const status in days) {
                    if(days[status]) {
                        dayArry.push(status);
                    }
                }
                selectedDays = dayArry.join('|');
            }
            const obj = {} as Hours;
            obj.openall = allDay;
            obj.openday = allDay ? '' : selectedDays;
            obj.starttime = fromTime;
            obj.endtime = toTime;
            props.onWarehouseHoursUpdate(obj);
        }
    }

    const selectDayRange = (day: string) => {
        if (day === 'alldays') {
            setAllDay(true);
        } else {
            setAllDay(false);
        }
        setOnUpdateInfo(true);
    }
    const selectDays = (evn: any) => {
        const traget = evn.target.value;
        const status = evn.target.checked || false;
        setDays({ ...days, [traget]: status });
        setOnUpdateInfo(true);
    }

    const checkSelectedDays = (dayName: string) => {
        if (allDay) {
            return true;
        } else {
            return days[dayName] ? true : false;
        }
    }

    const getMeridian = (time: string) => {
        let timeVal = time;
        if(time) {
            const splitTime = timeVal.split(':');
            const hours = Number(splitTime[0]);
            // const minutes = Number(splitTime[1]);
            if(hours < 12 ) {
                timeVal = `${timeVal}:AM`;
                return timeVal;
            } else {
                timeVal = `${timeVal}:PM`; 
                return timeVal;
            }
        } else {
            return "0:00";
        }
    }

    const onToTimeChange = (event: any) => {
        if(event.target.value) {
            const time = getMeridian(event.target.value);
            setToTime(time);
            setOnUpdateInfo(true);
        }
    }
    const onFromTimeChange = (event: any) => {
        if(event.target.value) {
            const time = getMeridian(event.target.value)
            setFromTime(time);
            setOnUpdateInfo(true);
        }
    }

    const showTime = () => {
        const desabled = allDay;
        return(
            <div>
                <Grid className='mt-1' container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={3}>
                    <div> Select Time Range </div>
                </Grid>
                <Grid item xs={8}>
                    <div className='sf-flex'>
                        <div className="m-right-md">
                            <InputBox data={{ type: 'time',  name: 'fromdate', label: 'From', isDisabled: desabled}}
                                onChange={onFromTimeChange} 
                            />
                        </div>
                        <div>
                            <InputBox data={{ type: 'time',  name: 'todate', label: 'To', isDisabled: desabled}}
                                onChange={onToTimeChange}
                            />
                        </div>
                    </div>
                </Grid>
            </Grid>
            </div>
        )
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
                            <div className='sf-flex'>
                                <div className="m-right-md">
                                    <input type="radio" name="week" id="days" onChange={() => { selectDayRange('days') }} /> Select Days Of Works
                                </div>
                                <div>
                                    <input type="radio" name="week" id="alldays" onChange={() => { selectDayRange('alldays') }} /> Available 24x7
                                </div>
                            </div>
                            <div className='sf-flex sf-justify p-top-md'>
                            {
                                daysArry.map((item, index) => {
                                    const keyId =  item.toLowerCase();
                                    return (
                                        <div key={keyId}> 
                                            <input type="checkbox" name={keyId} id={keyId} value={item} onChange={selectDays} checked={checkSelectedDays(item)} /> {item}
                                        </div>  
                                    )
                                })
                            }
                            </div>
                            <br />
                            {showTime()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WarehouseHours;