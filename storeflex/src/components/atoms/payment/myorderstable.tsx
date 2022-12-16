import React from "react";
import { Box } from '@mui/material';
import Table from 'react-bootstrap/Table';
// import './myorders.css'




const OrderTable = () => {

    const orderData = ([
        {
            orderID: 12387,
            product_name: "ABC House",
            size: "12x12",
            price: 1500,
            orderDate: "12-02-2022",
            from: "10th Jan, 20 - 20th Jan, 20",
            status: "success"
        },
        {
            orderID: 12687,
            product_name: "JHJGC House",
            size: "14x17",
            price: 1100,
            orderDate: "17-01-2022",
            from: "14th Jan, 20 - 27th Jan, 20",
            status: "Failed"
        },
        {
            orderID: 4542,
            product_name: "KUJT House",
            size: "12x12",
            price: 1900,
            orderDate: "12-02-2022",
            from: "10th Jan, 20 - 20th Jan, 20",
            status: "success"
        },
        {
            orderID: 12387,
            product_name: "ABC House",
            size: "12x12",
            price: 1500,
            orderDate: "12-02-2022",
            from: "10th Jan, 20 - 20th Jan, 20",
            status: "success"
        },
    ])


    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <div className="container mt-4">
                <div className='c-box-shadow-blue'>
                    <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                        <div>
                            <div className='primary-gradient'>
                                <div className='font-white p-sm f-18px f-bold'>
                                    My Orders
                                   
                                </div>
                            </div>
                            <Table striped bordered hover responsive="sm">
                            <thead>
                                        <tr>

                                            <th>Order #</th>
                                            <th>Product name</th>
                                            <th>Area Size</th>
                                            <th>Price</th>
                                            <th>Order Date</th>
                                            <th>From - TO</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-body">

                                        {orderData.map((data) => (

                                            <tr className="cell-1" key={data.orderID}>

                                                <td>{data.orderID}</td>
                                                <td>{data.product_name}</td>
                                                <td>{data.size}</td>
                                                <td>{data.price}</td>
                                                <td>{data.orderDate}</td>
                                                <td>{data.from}

                                                </td>
                                                <td><span className={data.status == 'success' ? 'badge badge-success' : 'badge badge-danger'}>{data.status}</span></td>
                                            </tr>
                                        ))}

                                    </tbody>
                            </Table>
                        </div>
                    </Box>
                </div>

            </div>


        </>
    )
}

export default OrderTable;