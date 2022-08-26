import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import './InputBox.css';

interface InputBoxProps {
    data?: Data;
}

interface Data {
    size?: string;
    name?: string;
    value?: string | number;
    label?: string;
}

const InputBox = (props?: InputBoxProps) => {
    const data: Data = {
        name: props?.data?.name || 'inputbox',
        size: props?.data?.size || 'small',
        value: props?.data?.value || '',
        label: props?.data?.label
    } ;
    const handleChange = () => {
        // console.log();
    }
    return (
        <>
        <div className='inputbox-container'>
            {data.label && <span className='inputbox-label'>{data.label}</span> }
            <input className='inputbox-field f-16px f-regular inputbox-bg' 
                type="text" 
                name={data.name}
                defaultValue={data.value}
            />
        </div>
        </>
    )
}

export default InputBox;