import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { PAGES } from '../../../utils/Constants';

const Dashboards = () => {

    const navigate = useNavigate();

    const handelOnClick = (path: string) => {
        navigate(path);
    }

    return(
        <>
            <div className='sf-flex-grid sf-justify'>
                <Button className='m-sm sf-btn w100' size="lg" active onClick={() => {handelOnClick(PAGES.BUSINESS_INFO.path)}}>
                    Add Business
                </Button>
               
                <Button className='m-sm sf-btn w100' size="lg" active onClick={() => {handelOnClick(PAGES.PG_SEARCH.path)}}>
                Search Bussiness
                </Button>
                
                <Button className='m-sm sf-btn w100' size="lg" active onClick={() => {handelOnClick(PAGES.ADD_INFO.path)}}>
                Add  user
                </Button>
            </div>
            <div className='sf-flex-grid sf-justify'>
                <Button  className='m-sm sf-btn w100' size="lg" active onClick={() => {handelOnClick(PAGES.ADD_INFO.path)}}>
                Add  Location
                </Button>
                
                <Button className='m-sm sf-btn w100' size="lg" active onClick={() => {handelOnClick(PAGES.ADD_INFO.path)}}>
                    Reports 
                </Button>
                
                <Button className='m-sm sf-btn w100' size="lg" active onClick={() => {handelOnClick(PAGES.ADD_INFO.path)}}>
                    Contact update 
                </Button>
            </div>
        </>
    )
}

export default Dashboards;