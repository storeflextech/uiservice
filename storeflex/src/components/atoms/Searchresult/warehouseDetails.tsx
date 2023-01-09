import * as React from 'react';
import { useState, useEffect } from 'react';
import TopNavBar from '../../navbar/TopNavBar';
import { useNavigate, useLocation } from "react-router-dom"
import './searchresult.css';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';

const WarehouseDetails = () => {
  const [warehouse, setWarehouse] = useState<Array<any>>([]);
  const [office, setOffice] = useState<Array<any>>([]);

  useEffect(() => {

    const data = ([
      {
        id: 1,
        img: 'https://media.istockphoto.com/photos/warehouse-worker-picture-id1179825208',
        business: "AAA Self Storage",
        name: "Abc Office",
        address: "Six mile, Guwahati-01",
        rate: 58,

      }
    ])
    setOffice(data);
    console.log(office);


  }, [])


  const navigate = useNavigate();
  const addToCart = (e: any, selectedItem: any) => {
    console.log("Selected Item===", selectedItem);
    navigate('/cart');
  }




  return (
    <>
      <TopNavBar />
      <div className="col-md-12 col-xl-12 pt-5">
        <div className="card shadow-0 border rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-12 mb-4 mb-lg-0 border border-warning">
                <div className="row">
                  <div className="col-md-12 col-lg-8 col-xl-8 p-2">
                    <Carousel fade>
                      <Carousel.Item>
                        <img className="d-block  img-fluid border border-success" style={{ height: '50vh', width: '100%', objectFit: 'cover' }} src={'https://media.istockphoto.com/photos/warehouse-worker-picture-id1179825208'} />
                        <Carousel.Caption>

                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block  img-fluid border border-success" style={{ height: '50vh', width: '100%', objectFit: 'cover' }} src={'https://media.istockphoto.com/id/1165357335/photo/male-worker-working-in-warehouse.webp?s=612x612&w=is&k=20&c=zcBK2kcxFDIBbd_aKXh_-kek_MGX30smjx64GURYGAU='} />

                        <Carousel.Caption>

                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img className="d-block  img-fluid border border-success" style={{ height: '50vh', width: '100%', objectFit: 'cover' }} src={'https://media.istockphoto.com/id/980114338/photo/supervisor-and-employee-at-warehouse.webp?s=612x612&w=is&k=20&c=6TtBd269scsOMBrswgxy0tsa64_MsChdpXo_oBrz8yk='} />

                        <Carousel.Caption>

                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>

                  </div>


                  <div className="col-md-12 col-lg-4 col-xl-4 align-self-center p-2">
                    <div className="row">

                      <div className="col-6">
                        <div className="bg-image border border-success hover-zoom ripple rounded ripple-surface p-2">
                          <img src={'https://media.istockphoto.com/photos/warehouse-worker-picture-id1179825208'}
                            className="w-100" />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="bg-image border border-success hover-zoom ripple rounded ripple-surface p-2">
                          <img src={'https://media.istockphoto.com/photos/warehouse-worker-picture-id1179825208'}
                            className="w-100" />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="bg-image border border-success hover-zoom ripple rounded ripple-surface p-2">
                          <img src={'https://media.istockphoto.com/photos/warehouse-worker-picture-id1179825208'}
                            className="w-100" />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="bg-image border border-success hover-zoom ripple rounded ripple-surface p-2">
                          <img src={'https://media.istockphoto.com/photos/warehouse-worker-picture-id1179825208'}
                            className="w-100" />
                        </div>
                      </div>

                    </div>




                    <div className="text-center p-2" style={{ border: '0px' }}>
                      <button className='btn primary-btn-outline rounded-full btn-sm text-capitalize'>More Images</button>
                    </div>


                  </div>


                </div>




              </div>
              <div className="col-md-12 col-lg-12 col-xl-12 p-3">
                <h5><BeenhereIcon />{'AAA Self Storage'}</h5>
                <div className="d-flex flex-row">
                  {/* <div className="text-danger mb-1 me-2">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div> */}
                  <span>{'My Office Name'}</span>
                </div>
                <div className="mt-1 mb-0 text-muted small">
                  <span>{'Six Mile, Guwahati, Assam, 781036'}</span>
                  {/* <span className="text-primary"> • </span>
                                <span>Light weight</span>
                                <span className="text-primary"> • </span>
                                <span>Best finish<br /></span> */}
                </div>
                <div className="mb-2 text-muted small">
                  <span>Room Size</span>
                  <span className="text-primary"> • </span>
                  <span>24x24</span>
                  <span className="text-primary"> • </span>
                  <span>10x12<br /></span>
                </div>
                <p className="text-truncate mb-4 mb-md-0">
                  <h5> About </h5> There are many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable.
                </p>
              </div>


              <Table responsive>

                <tbody>
                  <tr>
                    <th>Status</th>
                    <td>Available</td>
                    <td>Mon - Saturday</td>
                    <td></td>
                  </tr>

                  <tr>
                    <th>Property Type</th>
                    <td>Warehouse</td>
                    <th>Clear Ceilling Height</th>
                    <td>10 ft</td>
                  </tr>
                  <tr>
                    <th>Available Space</th>
                    <td>9,452 Sq. Ft.</td>
                    <th>Minimum Order Quantity</th>
                    <td>1007135</td>
                  </tr>

                  <tr>
                    <th>Price/Sq.Ft.</th>
                    <td>&#x20B9; 240</td>
                    <th>#At Grade Doors</th>
                    <td>2</td>
                  </tr>

                  <tr>
                    <th>#Dock High Doors</th>
                    <td>5</td>
                  </tr>
                </tbody>
              </Table>





              <div className="col-md-12 col-lg-12 col-xl-12 border-sm-start-none border-start p-3">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">Industry Served</h4>
                </div>
                <li>Flooring: Carpet </li>
                <li>Heating features: Central</li>
                <li>Cooling features: Central Air</li>
                <li>Exterior features: Lighting, Private Yard</li>
                {/* <h6 className="text-success"> Few rooms left.</h6> */}

              </div>

              <div className="col-md-12 col-lg-12 col-xl-12 border-sm-start-none border-start p-3">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">Storage Layout</h4>
                </div>
                <li>Flooring: Carpet </li>
                <li>Heating features: Central</li>
                <li>Cooling features: Central Air</li>
                <li>Exterior features: Lighting, Private Yard</li>
                {/* <h6 className="text-success"> Few rooms left.</h6> */}

              </div>

              <div className="col-md-12 col-lg-12 col-xl-12 border-sm-start-none border-start p-3">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">Facility Qualifications</h4>
                </div>
                <li>Flooring: Carpet </li>
                <li>Heating features: Central</li>
                <li>Cooling features: Central Air</li>
                <li>Exterior features: Lighting, Private Yard</li>
                {/* <h6 className="text-success"> Few rooms left.</h6> */}

              </div>


              <div className="col-md-12 col-lg-12 col-xl-12 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">&#x20B9; {'155'}.00</h4>
                  <span className="text-danger"><s>&#x20B9; 200.99</s></span>
                </div>
                <h6 className="text-success"> Few space left.</h6>
                <div className="d-flex flex-column mt-4">

                  <button className="btn primary-btn rounded-full" style={{ marginTop: '5px' }} type="button" onClick={(e) => { addToCart(e, office) }}>
                    Proceed to Buy
                  </button>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default WarehouseDetails;