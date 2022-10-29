import React from "react";

import './myorders.css'




const OrderTable=()=>{

    const orderData=([
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
            status: "Faild"
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


    return(
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="card container mt-5">
            <div className="text-center m-2 bg-gray"><h3>My Orders</h3></div>
        <div className="d-flex justify-content-center row">
            <div className="col-md-12">
                <div className="rounded">
                    <div className="table-responsive table-borderless">
                        <table className="table">
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

                                {orderData.map((data)=>(

                                <tr className="cell-1" key={data.orderID}>
                                    
                                    <td>{data.orderID}</td>
                                    <td>{data.product_name}</td>
                                    <td>{data.size}</td>
                                    <td>{data.price}</td>
                                    <td>{data.orderDate}</td>
                                    <td>{data.from}
                                    
                                    </td>
                                    <td><span className={data.status=='success'? 'badge badge-success':'badge badge-danger'}>{data.status}</span></td>
                                </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
        </>
    )
}

export default OrderTable;