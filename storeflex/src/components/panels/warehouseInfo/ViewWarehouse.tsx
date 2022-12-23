import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import swal from "sweetalert";
import Api from "../../../api/Api";
import { viewWarehouseAdminProps } from "../../../api/ApiConfig";
import { responseInterceptor } from "http-proxy-middleware";

const ViewWarehouse = () => {
  const api = new Api();
  const navigate = useNavigate();
  const [myWarehouse, setMyWarehouse] = useState<Array<any>>([]);
  var page: any = "0";
  var size: any = "6";

  useEffect(() => {
    getWarehouseAdmin(page, size);
  }, []);

  const getWarehouseAdmin = (page, size) => {
    const data: viewWarehouseAdminProps = { page: page, size: size };
    api.getWarehouseAdmin(data).then((response) => {
      console.log("Response=", response);
      if (response.status == 200) {
        setMyWarehouse(response.data.methodReturnValue.warehouseViewBean);
        // setValue(false);
      }
    });
  };

  const goToEditPage = (pagePath: any, record: object) => {
    navigate(pagePath, {
      state: { editRecord: record },
    });
  };

  const DeleteWarehouse = (warehouse: any) => {
    swal({
      title: "Are you sure?",
      text:
        ' You are about to delete the warehouse "' +
        warehouse.warehouseName +
        "(" +
        warehouse.warehouseId +
        ')". Once deleted, you will not be able to recover this warehouse!',
      icon: "success",
      buttons: [true, true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(
          'Success! Your warehouse "' +
            warehouse.warehouseName +
            "(" +
            warehouse.warehouseId +
            ')" has been deleted!',
          {
            icon: "success",
          }
        );
        let extractedArr = myWarehouse.filter((item, index) => {
          return item.warehouseId != warehouse.warehouseId;
        });
        setMyWarehouse(extractedArr);
      } else {
        // do something if required
      }
    });
  };

  return (
    <div className="c-box-shadow-blue">
      <Box className="m-top-md m-bot-md m-left-md m-right-md">
        <div>
          <div className="primary-gradient">
            <div className="font-white p-sm f-18px f-bold">Warehouses</div>
          </div>
          <Table striped bordered hover responsive="md">
            <thead>
              <tr>
                <th>ID</th>
                <th>Client ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>House No</th>
                <th>Plot No</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Pin</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {myWarehouse &&
                myWarehouse.map((item: any) => {
                  return (
                    <tr>
                      <td>{item.warehouseId}</td>
                      <td>{item.clientId}</td>
                      <td>{item.warehouseName}</td>
                      <td>{item.descp}</td>
                      <td>{item.houseNo}</td>
                      <td>{item.plotNo}</td>
                      <td>{item.streetAddrs}</td>
                      <td>{item.city}</td>
                      <td>{item.state}</td>
                      <td>{item.pincode}</td>
                      <td>
                        <button
                          onClick={() => DeleteWarehouse(item)}
                          className="primary-btn-outline"
                          style={{
                            fontSize: "14px",
                            float: "right",
                            borderRadius: 20,
                            padding: "8px 12px 8px 12px",
                          }}
                        >
                          <strong>
                            <i className="mdi mdi-cup menu-icon"></i> Delete
                          </strong>
                        </button>
                        &nbsp; &nbsp;
                        <button
                          onClick={() => goToEditPage("/warehouse/edit", item)}
                          className="primary-btn-outline"
                          style={{
                            fontSize: "14px",
                            float: "right",
                            borderRadius: 20,
                            padding: "8px 12px 8px 12px",
                            marginRight: "5px",
                          }}
                        >
                          <strong>
                            <i className="mdi mdi-pencil menu-icon"></i> Edit
                          </strong>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </Box>
    </div>
  );
};

export default ViewWarehouse;
