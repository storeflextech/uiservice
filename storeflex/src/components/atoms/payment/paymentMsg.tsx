import React from 'react';
import './paymentMsg.css';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

interface parentProps {
    // officeData?: Array<any>;
    txStatus: any;
    orderAmount: any;
    referenceId: any;
}


const PaymentMsg = (props: parentProps) => {

    const [status, setStatus] = useState('')

    useEffect(() => {
        setStatus(props.txStatus)
    }, [])


    const navigate = useNavigate();
    const goToNextPage = (pagePath: string) => {
        navigate(pagePath);
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto mt-5">
                        <div className="payment mt-5">
                            <div className="payment_header" style={{ backgroundColor: props.txStatus == "success" ? "green" : "red" }}>
                                {props.txStatus == "success" ? <div className="check"><i className="fa fa-check" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                </i></div> : <div className="check"><i className="fa fa-times" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                    </svg>
                                </i></div>}

                                {/* <div className="check"><i className="fa fa-times" aria-hidden="true"></i></div> */}
                            </div>
                            <div className="content">
                                <h1>Payment {status} !</h1>
                                {props.txStatus == "success" ?
                                    <p>Your 100 RS payment has been received with reference number 123456 and Order ID 987654.</p>
                                    : <p>Somthing went Wrong</p>}
                                <p>Thank You</p>
                                <button className='btn btn-info' onClick={() => { goToNextPage('/myorders') }} >Go My Orders
                                     </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default PaymentMsg;