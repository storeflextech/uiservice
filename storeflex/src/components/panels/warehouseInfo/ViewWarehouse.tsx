import React, { useState, useEffect } from "react";
import { Box, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Api from "../../../api/Api";
import { viewWarehouseAdminProps } from "../../../api/ApiConfig";
import { LoaderFull } from "../../atoms/loader/loader";

import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

let recordLabel = '';

const ViewWarehouse = () => {
  const warehouseView = window.location.hash;
  const api = new Api();
  const navigate = useNavigate();
  const [myWarehouse, setMyWarehouse] = useState<Array<any>>([]);
  const [isLoader, setIsLoader] = useState(false);
  const [currentView, setCurrentView] = useState('');

  var page: any = "0";
  var size: any = "6";

  useEffect(() => {
    if (warehouseView !== currentView)
      getWarehouseAdmin(page, size);
    setCurrentView(warehouseView);
  }, [warehouseView]);

  const getWarehouseAdmin = (page, size) => {
    //IN-PROGRESS, IN-ACTIVE, ACTIVE
    let warehouseStatus = 'ACTIVE'
    if (warehouseView === '#inactive') {
      warehouseStatus = 'IN-ACTIVE';
      recordLabel = 'Inactive Warehouses'
    } else if (warehouseView === '#pending') {
      warehouseStatus = 'IN-PROGRESS';
      recordLabel = 'Pending Warehouses'
    } else {
      warehouseStatus = 'ACTIVE';
      recordLabel = 'Active Warehouses'
    }
    setIsLoader(true);

    const data: viewWarehouseAdminProps = { page: page, size: size, status: warehouseStatus };
    api.getWarehouseAdmin(data).then((response) => {
      setIsLoader(false);
      setMyWarehouse(response.methodReturnValue.warehouseViewBean);

    }).catch((error) => {
      setIsLoader(false);
      console.log('getMyWarhouses', error);
    });
  };

  const goToEditPage = (warehouse: any) => {
    const pagePath = '/warehouse/edit'
    navigate(pagePath,
      {
        state: { editRecord: warehouse },
      }
    );
  }

  const DeleteWarehouse = (warehouse: any) => {
    swal({
      title: "Are you sure?",
      text:
        ' You are about to delete the warehouse "' +
        warehouse.warehouseName +
        "(" +
        warehouse.id +
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
          warehouse.id +
          ')" has been deleted!',
          {
            icon: "success",
            buttons: {
              buttonOne: {
                text: "OK",
                visible: true,
                className: "sf-btn",
              }
            }
          }
        );
        let extractedArr = myWarehouse.filter((item, index) => {
          return item.warehouseId != warehouse.id;
        });
        setMyWarehouse(extractedArr);
      } else {
        // do something if required
      }
    });
  };

  const [hoveredRow, setHoveredRow] = useState(null);
  const onMouseEnterRow = (event) => {
    const id = event.currentTarget.getAttribute("data-id");
    setHoveredRow(id);
  };
  const onMouseLeaveRow = () => {
    setHoveredRow(null);
  };
  const [deleteLogoStatus, setDeleteLogoStatus] = useState(false);
  const [editLogoStatus, setEditLogoStatus] = useState(false);

  const columns = [
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 100,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tooltip
              title="Edit"
              placement="left"
              arrow
              enterDelay={100}
              leaveDelay={100}
            >
              <IconButton
                style={{
                  backgroundColor:
                    editLogoStatus && params.id === hoveredRow ? "#008CBA" : "",
                  color:
                    editLogoStatus && params.id === hoveredRow ? "white" : "",
                }}
                onMouseEnter={() => {
                  setEditLogoStatus(true);
                }}
                onMouseLeave={() => {
                  setEditLogoStatus(false);
                }}
                onClick={() => {
                  goToEditPage(params.id);
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Delete"
              placement="top"
              arrow
              enterDelay={100}
              leaveDelay={100}
            >
              <IconButton
                style={{
                  backgroundColor:
                    deleteLogoStatus && params.id === hoveredRow
                      ? "#f44336"
                      : "",
                  color:
                    deleteLogoStatus && params.id === hoveredRow ? "white" : "",
                }}
                onMouseEnter={() => {
                  setDeleteLogoStatus(true);
                }}
                onMouseLeave={() => {
                  setDeleteLogoStatus(false);
                }}
                onClick={() => {
                  DeleteWarehouse(params.row)
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
    },
    { field: "id", headerName: "ID", width: 80 },
    { field: "clientId", headerName: "Client ID", width: 100 },
    { field: "warehouseName", headerName: "Warehouse Name", width: 150 },
    { field: "descp", headerName: "Description", width: 250 },
    { field: "houseNo", headerName: "House No", width: 100 },
    { field: "plotNo", headerName: "Plot No", width: 100 },
    { field: "streetAddrs", headerName: "Street Address", width: 150 },
    { field: "city", headerName: "City", width: 100 },
    { field: "state", headerName: "State", width: 100 },
    { field: "pincode", headerName: "Pin Code", width: 100 },
  ];

  const showWarehouseList = () => {
    return (
      <div className="c-box-shadow-blue">
        <Box className="m-top-md m-bot-md m-left-md m-right-md">
          <div className="primary-gradient">
            <div className="font-white p-sm f-18px f-bold">{recordLabel}</div>
          </div>
          <div style={{ height: 370, width: "100%" }}>
            <DataGrid getRowHeight={() => 'auto'}
              rows={myWarehouse && myWarehouse.map((item: any) => ({
                id: item.warehouseId,
                clientId: item.clientId,
                warehouseName: item.warehouseName,
                descp: item.descp,
                houseNo: item.houseNo,
                plotNo: item.plotNo,
                streetAddrs: item.streetAddrs,
                city: item.city,
                state: item.state,
                pincode: item.pincode,
                itemObj: item,
              }))}
              componentsProps={{
                row: {
                  onMouseEnter: onMouseEnterRow,
                  onMouseLeave: onMouseLeaveRow,
                },
              }}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
        </Box>
      </div>
    );
  }
  return (
    <>
      {isLoader && <LoaderFull />}
      <div className='c-box-shadow-blue'>
        {myWarehouse.length > 0 && showWarehouseList()}
      </div>
    </>

  )
};

export default ViewWarehouse;
