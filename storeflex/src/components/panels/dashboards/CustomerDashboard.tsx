import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { PAGES } from '../../../utils/Constants';

const CustomerDashboard = (props) => {
    const userType = props.userType;
    const navigate = useNavigate();

    const handelOnClick = (path: string) => {
        navigate(path);
    }

    return (
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
    )
}

export default CustomerDashboard;