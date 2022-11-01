import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { PAGES } from '../../../utils/Constants';

const Dashboards = (props) => {
    const userType = props.userType;
    const navigate = useNavigate();

    const handelOnClick = (path: string) => {
        navigate(path);
    }

    return (
        <>
            {userType === 'SL' && (
                <>
                    <div className='sf-flex-grid sf-justify'>
                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.BUSINESS_INFO.path) }}>
                            Add Business
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.PG_SEARCH.path) }}>
                            Search Bussiness
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.VIEW_USER.path) }}>
                            Add  user
                        </Button>
                    </div>
                    <div className='sf-flex-grid sf-justify'>
                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.ADD_INFO.path) }}>
                            Add  Location
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.ADD_INFO.path) }}>
                            Reports
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.ADD_INFO.path) }}>
                            Contact update
                        </Button>
                    </div>
                </>
            )}
            {userType === 'CL' && (
                <>
                    <div className='sf-flex-grid sf-justify'>
                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.BUSINESS_INFO.path) }}>
                           Business
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.PG_SEARCH.path) }}>
                            Warehouse
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.ADD_INFO.path) }}>
                            User Management
                        </Button>
                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.ADD_INFO.path) }}>
                            Payments
                        </Button>
                    </div>
                    <div className='sf-flex-grid sf-justify'>
                        <Button className='m-sm sf-btn w100' size="lg" active>
                            Location
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active>
                            View Reports
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active>
                            Contact update
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active>
                            Lease Establish
                        </Button>
                    </div>
                </>
            )}
            {userType === 'CU' && (
                <>
                    <div className='sf-flex-grid sf-justify'>
                        <Button className='m-sm sf-btn w100' size="lg" active>
                            Profile
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active onClick={() => { handelOnClick(PAGES.PG_SEARCH.path) }}>
                            Search Warehouse
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active>
                            Bookings
                        </Button>

                        <Button className='m-sm sf-btn w100' size="lg" active>
                            Payments
                        </Button>
                    </div>
                </>
            )}
        </>
    )
}

export default Dashboards;