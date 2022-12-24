import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import InputBox from "../../atoms/textfield/InputBox";

import { EditWarehouseDetails } from "../../../utils/ResponseSchema";

interface EditWarehouseProps {
  profileData?: EditWarehouseDetails;
  onSave?(isSaved: boolean): void;
  action?: string;
}

const EditWarehouse = (props: EditWarehouseProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const profile = {} as EditWarehouseDetails;
  const [warehouseDetails, setWarehouseDetails] = useState(profile);

  useEffect(() => {
    companyDataFormatter(location.state.editRecord);
  }, []);

  const goToNextPage = (pagePath: string) => {
    navigate(pagePath);
  };

  const companyDataFormatter = (data: any) => {
    console.log(data);
    let warehouseData: EditWarehouseDetails = {
      city: data.city,
      clientId: data.clientId,
      descp: data.descp,
      houseNo: data.houseNo,
      pincode: data.pincode,
      plotNo: data.plotNo,
      profilePicName: data.profilePicName,
      state: data.state,
      status: data.status,
      streetAddrs: data.streetAddrs,
      warehouseId: data.warehouseId,
      warehouseName: data.warehouseName,
      country: "IND",
      companyName: "ABC",
    };
    setWarehouseDetails(warehouseData);
  };

  const onUpdate = () => {
    console.log("hi");
    // const postData = {} as AddCompanyPostData ;
    // postData.clientId = businessProfile.clientId;
    // postData.compyName = getVal(companyNameInfo);
    // postData.compyDesc = getVal(companyDescription);
    // postData.url = getVal(companyUrlInfo);
    // postData.gstNo = getVal(gstIdInfo);
    // if( Object.keys(companyAddressInfo).length > 0) {
    //     postData.addresses = [companyAddressInfo];
    //     postData.addresses[0].addressId = businessProfile.addressId;
    // }
    // // postData.contact = [ buildContactInfo()];

    // setLoader(true);
    // api.updateCompany(postData).then((response) => {
    //     setLoader(false);
    //     swal('Great! Information updated successfully!', {
    //         icon: "success",
    //     }).then(willUpdate => {
    //         if (willUpdate) {
    //             goToNextPage('/business/view');
    //         }
    //     });
    //     console.log(' Company creation res >>>>>> ', response);
    // }).catch((error) => {
    //     setLoader(false);
    //     console.log(' Company Edit Inforamtion erroor ', error);
    // });
  };

  const showWarehouseDetails = () => {
    return (
      <>
        <div className="m-bot-lg">
          <div className="p-md">
            <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
              <Grid item xs={4}>
                <InputBox
                  data={{
                    name: "compnayName",
                    label: "Company Name*",
                    value: warehouseDetails.companyName,
                    isDisabled: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <InputBox
                  data={{
                    name: "warehouseId",
                    label: "Warehouse Id",
                    value: warehouseDetails.warehouseId,
                    isDisabled: true,
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <InputBox
                  data={{
                    name: "clientid",
                    label: "Client ID*",
                    value: warehouseDetails.clientId,
                  }}
                />
              </Grid>
            </Grid>
          </div>

          <div className="p-md">
            <div>
              <Grid container></Grid>
              <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
                <Grid item xs={4}>
                  <div>Profile Photo</div>
                  <div className="p-top-sm">
                    <InputBox
                      data={{
                        name: "profilePhotoName",
                        value: warehouseDetails.profilePicName,
                      }}
                    />
                  </div>
                </Grid>

                <Grid item xs={4}>
                  <InputBox
                    data={{
                      name: "cityname",
                      label: "Warehouse Name*",
                      value: warehouseDetails.warehouseName,
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <InputBox
                    data={{ name: "gstid", label: "GST Number*", value: "" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputBox
                    data={{
                      name: "whdescription",
                      label: "Warehouse Description*",
                      value: warehouseDetails.descp,
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </>
    );
  };
  const showWarehouseLocation = () => {
    return (
      <div className="m-bot-lg">
        <div className="p-md">
          <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
            <Grid item xs={4}>
              <InputBox
                data={{
                  name: "plotNo",
                  label: "Plot No*",
                  value: warehouseDetails.plotNo,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <InputBox
                data={{
                  name: "houseNo",
                  label: "House No*",
                  value: warehouseDetails.houseNo,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <InputBox
                data={{
                  name: "street",
                  label: "Street*",
                  value: warehouseDetails.streetAddrs,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputBox
                data={{
                  name: "state",
                  label: "State*",
                  value: warehouseDetails.state,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputBox
                data={{
                  name: "city",
                  label: "City*",
                  value: warehouseDetails.city,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputBox
                data={{
                  name: "country",
                  label: "Country*",
                  value: warehouseDetails.country,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <InputBox
                data={{
                  name: "pincode",
                  label: "Pin Code*",
                  value: warehouseDetails.pincode,
                }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };
  const showWarehousePricing = () => {
    return (
      <div className="m-bot-lg">
        <div className="p-md">
          <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
            <Grid item xs={4}>
              <InputBox
                data={{
                  name: "totalAvailableSpace",
                  label: "Total Available Space (sq.ft)*",
                  value: "ABC",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <InputBox
                data={{
                  name: "ratePerMonth",
                  label: "Rate(Rs)/sq.ft/month*",
                  value: "123",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <InputBox
                data={{
                  name: "minimumOrderQty",
                  label: "Minimum Order Quantity(sq.ft)*",
                  value: "123",
                }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  };
  const showFacilityHour = () => {
    return (
      <div className="p-md">
        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
          <Grid item xs={4}>
            <input type="radio" name="week" id="days" /> Select Days Of Works
          </Grid>
          <Grid item xs={4}>
            <input type="radio" name="week" id="alldays" /> Available 7 days a
            week
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          columns={{ xs: 6, sm: 12, md: 12 }}
          sx={{ p: 2 }}
        >
          <Grid item xs={1}>
            <input type="checkbox" name="mon" id="mon" value="Mon" /> Mon
          </Grid>

          <Grid item xs={1}>
            <input type="checkbox" name="tues" id="tues" value="Tues" /> Tues
          </Grid>

          <Grid item xs={1}>
            <input type="checkbox" name="wed" id="wed" value="Wed" /> Wed
          </Grid>

          <Grid item xs={1}>
            <input type="checkbox" name="thu" id="thu" value="Thu" /> Thu
          </Grid>
          <Grid item xs={1}>
            <input type="checkbox" name="fri" id="fri" value="Fri" /> Fri
          </Grid>
          <Grid item xs={1}>
            <input type="checkbox" name="sat" id="sat" value="Sat" /> Sat
          </Grid>
          <Grid item xs={1}>
            <input type="checkbox" name="sub" id="sub" value="Sun" /> Sun
          </Grid>
        </Grid>

        <br />
        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
          <Grid item xs={4}>
            <input type="radio" name="time" id="" /> Select Time Range
          </Grid>
          <Grid item xs={4}>
            <input type="radio" name="time" id="" /> Available 24x7
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          columns={{ xs: 6, sm: 12, md: 12 }}
          sx={{ p: 2 }}
        >
          <Grid item xs={2}>
            <label htmlFor="">From</label>
            <input type="time" className="form-control" name="" id="" />
          </Grid>

          <Grid item xs={2}>
            <label htmlFor="">To</label>
            <input type="time" className="form-control" name="" id="" />
          </Grid>
        </Grid>
      </div>
    );
  };
  const showWarehouseLayout = () => {
    return (
      <div className="p-md">
        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
          <Grid item xs={12}>
            <label htmlFor="">Industries Served*</label>
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Agriculture & Prepared
            Products
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Consumer Products & Mass
            Merchandising
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Machinery
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Apparel, Footwear &
            Textiles
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Electronics
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Petroleum, Natural Gas &
            Minerals
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Automotive & Aerospace
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Industrial &
            Manufacturing Materials
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Pharmaceuticals, Health
            & Chemicals
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Base Metals
          </Grid>
        </Grid>

        <br />
        <br />

        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
          <Grid item xs={12}>
            <label htmlFor="">Storage Layouts*</label>
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Floor Space
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Pick Module(s)
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Gated Access
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Security System
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Racking
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Dedicated Room(s)
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> On Site Guards
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Video Surveillance
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Secured Room(s)
          </Grid>
        </Grid>

        <br />
        <br />

        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
          <Grid item xs={12}>
            <label htmlFor="">Facility Qualifications</label>
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Dry-Ambient
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> HazMat Certified
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Food Grade
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Temperature Controlled
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> AIB Certified
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> ISO 9001
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Frozen-Refrigerated
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> CBP Bonded
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> C-TPAT
          </Grid>

          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> FDA Registered
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> Foreign Trade Zone (FTZ)
          </Grid>
          <Grid item xs={4}>
            <input type="checkbox" name="week" id="" /> TAPA
          </Grid>
        </Grid>

        <br />
        <br />

        <Grid container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
          <Grid item xs={3}>
            <InputBox
              data={{ name: "", label: "#Dock High Doors", value: "" }}
              // onChange={validateAddress}
            />
            {/* {address && <p className="text-red">{address}</p>} */}
          </Grid>
          <Grid item xs={3}>
            <InputBox
              data={{ name: "", label: "#At Grade Doors", value: "" }}
              // onChange={validateAddress}
            />
            {/* {address && <p className="text-red">{address}</p>} */}
          </Grid>

          <Grid item xs={3}>
            <InputBox
              data={{
                name: "",
                label: "Clear Ceilling Height (feet)",
                value: "",
              }}
              // onChange={validateZipCode}
            />
          </Grid>
          <Grid item xs={3}>
            <InputBox
              data={{
                name: "",
                label: "Max Forklift Capacity (Lbs)",
                value: "",
              }}
              // onChange={validateZipCode}
            />
          </Grid>
        </Grid>
      </div>
    );
  };
  return (
    <>
      <div className="m-bot-md">
        <div className="primary-gradient">
          <div className="font-white p-sm f-18px f-bold">
            Edit Warehouse Details
          </div>
        </div>
        {showWarehouseDetails()}
        <div className="primary-gradient">
          <div className="font-white p-sm f-18px f-bold">
            Edit Warehouse Location
          </div>
        </div>
        {showWarehouseLocation()}
        <div className="primary-gradient">
          <div className="font-white p-sm f-18px f-bold">Edit Pricing</div>
        </div>
        {showWarehousePricing()}
        <div className="primary-gradient">
          <div className="font-white p-sm f-18px f-bold">
            Edit Facility Hours
          </div>
        </div>
        {showFacilityHour()}
        <div className="primary-gradient">
          <div className="font-white p-sm f-18px f-bold">
            Edit Warehouse Layout
          </div>
        </div>
        {showWarehouseLayout()}
        <div className="row justify-content-end">
          <div className="col-md-3 col-lg-3 col-xl-3">
            <button
              className="btn primary-btn rounded-full sf-btn"
              onClick={() => {
                goToNextPage("/warehouse/view");
              }}
              style={{ marginRight: "5px", color: "#fff" }}
            >
              {" "}
              Cancel{" "}
            </button>
            <button
              className="btn primary-btn rounded-full sf-btn"
              onClick={() => {
                onUpdate();
              }}
              style={{ color: "#fff" }}
            >
              {" "}
              Update{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditWarehouse;
