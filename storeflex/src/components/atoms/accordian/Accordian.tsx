import React, { useState, useEffect } from 'react';
import './Accordian.css';

interface AccordianProps {
    summaryTxt?: string;
    isOpen?: boolean;
    children?: React.ReactNode;
}

const Accordian = (props: AccordianProps) => {

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const open = !!props.isOpen;
        setExpanded(open);
    }, []);
    const handleChange = () => {
        setExpanded(!expanded);
    }

    const acSummary = () => {
        return(
            <button className='accsummary ac-gradient p-md' onClick={handleChange}>{props?.summaryTxt}</button>
        )
    }

    const acDetails = () => {
        if(expanded) {
            return(
                <div className='ac-details p-md'>{props.children}</div>
            )
        } else {
            return (<> </>)
        }
    } 

    return(
        <>
            <div>
                <div>{acSummary()}</div>
                <div>{acDetails()}</div>
            </div>
        </>
    )
}

export default Accordian