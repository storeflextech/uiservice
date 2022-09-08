import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
import './InputBox.css';

interface InputBoxProps {
    data?: Data;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(props?.onChange) {
            // console.log(' ### ' , JSON.stringify(e.currentTarget));
            props.onChange(e);
        }
    }
    const handelOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if(props?.onBlur) {
            props.onBlur(e);
        }
    }
    return (
        <>
        <div className='inputbox-container'>
            {data.label && <span className='inputbox-label'>{data.label}</span> }
            <input className='inputbox-field f-16px f-regular inputbox-bg' 
                type="text" 
                name={data.name}
                defaultValue={data.value}
                onChange={handleOnChange}
                onBlur={handelOnBlur}
            />
        </div>
        </>
    )
}

export default InputBox;