import React from 'react';
import { useNavigate } from "react-router-dom";

const Dashboards = (props) => {
    // const userType = props.userType;
    const navigate = useNavigate();

    const handelOnClick = (path: string) => {
        navigate(path);
    }

    return (
           <div> Need to remove this file</div>
    )
}

export default Dashboards;