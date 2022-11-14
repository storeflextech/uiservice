import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { PAGES } from '../../../utils/Constants';
import DashboardChart from '../chart/dashboardChart';
import { CmsContext } from '../../../context/ContextProvider';

const UserDashboard = (props) => {
    const userType = props?.userType;
    const navigate = useNavigate();

    const cmsContent = useContext(CmsContext);
    const dashboardContent = cmsContent['dashboard'];

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
                        Add Company
                    </Button>

                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.PgSearch.path) }}>
                        Search Company
                    </Button>

                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.VIEW_USER.path) }}>
                        View  user
                    </Button>
                </div>
                <div className='sf-flex-grid sf-justify'>
                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.AddInfo.path) }}>
                        Add  Location
                    </Button>

                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.AddInfo.path) }}>
                        Reports
                    </Button>

                    <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.AddInfo.path) }}>
                        Add User
                    </Button>
                </div>
            </div>
            
        </>
    )
}

export default UserDashboard;