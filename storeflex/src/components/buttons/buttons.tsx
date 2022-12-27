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

interface ChevronProps {
    onBtnClick?(): void;
}
export const ChevronRight = (props: ChevronProps) => {
    
    return(
        <button  onClick={() => {
            if(props.onBtnClick) {
                props.onBtnClick();
            }
        }} className='no-border chevron-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
    )
}

export const ChevronLeft = (props: ChevronProps)  => {
    return(
        <button onClick={() => {
            if(props.onBtnClick) {
                props.onBtnClick();
            }
        }} className='no-border chevron-btn rotate180d'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
    )
}