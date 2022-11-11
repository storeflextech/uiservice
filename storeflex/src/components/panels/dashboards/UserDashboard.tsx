import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { PAGES } from '../../../utils/Constants';
import DashboardChart from '../chart/dashboardChart';

const UserDashboard = (props) => {
    const userType = props.userType;
    const navigate = useNavigate();

    const handelOnClick = (path: string) => {
        navigate(path);
    }

    return (
        <>
            <div>
                <div className='p-bot-lg'>
                    <DashboardChart userType/>
                </div>
            </div>
            <div>
                <div className='sf-flex-grid sf-justify'>
                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.Business.path) }}>
                        Add Business
                    </Button>

                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.PgSearch.path) }}>
                        Search
                    </Button>

                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.VIEW_USER.path) }}>
                        Add  User
                    </Button>
                </div>
                <div className='sf-flex-grid sf-justify'>
                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.Warehouse.ADD.path) }}>
                        Add  Warehouse
                    </Button>

                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.AddInfo.path) }}>
                        Reports
                    </Button>

                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.AddInfo.path) }}>
                        Contact Update
                    </Button>
                </div>
            </div>
            
        </>
    )
}

export default UserDashboard;