import React from 'react';

interface DeleteProps {
    onBtnClick(item?: any): void;
}

interface EditProps {
    onBtnClick(item?: any): void;
}
export const DeletsButton = (props: DeleteProps) => {
    return (
        <>
            <button onClick={() => {
                if(props.onBtnClick) {
                    props.onBtnClick();
                }
            }} className='primary-btn-outline' style={{ fontSize: '12px', borderRadius: 5, padding: '5px', marginBottom: '5px' }}>
                <strong><i className='mdi mdi-cup menu-icon'></i> Delete</strong>
            </button>
        </>
    )
}

export const EditButton = (props: EditProps) => {
    return (
        <>
            <button onClick={() => {
                if(props.onBtnClick) {
                    props.onBtnClick();
                }
            }} className='primary-btn-outline' style={{ fontSize: '12px', borderRadius: 5, padding: '5px', marginBottom: '5px' }}>
                <strong><i className='mdi mdi-pencil menu-icon'></i> Edit </strong>
            </button>
        </>
    )
}