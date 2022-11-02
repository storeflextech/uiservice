import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './searchresult.css';
import { Container, Button, AppBar, Toolbar } from '@mui/material';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import Filter from './filter';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Searchresult() {

  const [office, setOffice] = useState<Array<any>>([]);
  const [filter, setFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const data = ([
      {
        id: 1,
        img: 'https://media.istockphoto.com/photos/warehouse-worker-picture-id1179825208',
        business: "AAA Self Storage",
        name: "Abc Office",
        address: "Six mile, Guwahati-01",
        rate: 58,

      },
      {
        id: 2,
        img: 'https://media.istockphoto.com/id/1165357335/photo/male-worker-working-in-warehouse.webp?s=612x612&w=is&k=20&c=zcBK2kcxFDIBbd_aKXh_-kek_MGX30smjx64GURYGAU=',
        business: "BBB Self Storage",
        name: "Cde Office",
        address: "Dispur, Guwahati-02",
        rate: 56,
      },
      {
        id: 3,
        img: 'https://media.istockphoto.com/id/980114338/photo/supervisor-and-employee-at-warehouse.webp?s=612x612&w=is&k=20&c=6TtBd269scsOMBrswgxy0tsa64_MsChdpXo_oBrz8yk=',
        business: "CCC Self Storage",
        name: "Efg office",
        address: "Ganesguri, Guwahati-01",
        rate: 59,
      },
      {
        id: 4,
        img: 'https://media.istockphoto.com/id/1210741114/photo/warehouse-staff-meeting-workers-with-mnagers.webp?s=612x612&w=is&k=20&c=HRcjLXsBF9tLCn765rrncx4Ij9xfwn7IT-S-8kVHD3o=',
        business: "DDD Self Storage",
        name: "Hij Office",
        address: "Pan bazar, Guwahati-01",
        rate: 54,
      },
      {
        id: 5,
        img: 'https://media.istockphoto.com/id/516206444/photo/coworkers-carrying-cardboard-box-in-warehouse.webp?s=612x612&w=is&k=20&c=fqcKbzb0ncXSenuko63xHER_ksQaIlkCC63h-3_Ya1M=',
        business: "EEE Self Storage",
        name: "Klm office",
        address: "Paltan Bazar, Guwahati-01",
        rate: 64,
      }
    ])

    setOffice(data);
    console.log(office)
    console.log('load');

  }, [])



  const addToCart = (e: any, selectedItem: any) => {
    console.log("Selected Item===", selectedItem);
    navigate('/cart');
  }



  const handleFilte = (data: any, filter: any) => {

    setFilter(filter);
    setOffice(data);

  }

  return (

    <>


      <div className="row">

      <Filter officeData={office} handleFilte={handleFilte} />
        {/* <div className="col-md-2 pr-1" style={{ backgroundColor: '#eee' }}>
          <div className="card m-0">
            <div className="col-md-12 p-1">
              <span>
                Filter And Sort Locations
              </span>
              <hr />

              <div className="card-group-item">

                <header className="card-header p-0">
                  <h6 className="title">Sorts By Price:</h6>
                </header>


                <div className="filter-content ml-2">
                  <div className="card-body">
                    <label className="form-check">
                      <input className="form-check-input" type="radio" name="price" value="ascending" />
                      <span className="form-check-label m-0">
                      Lowest to Highest
                      </span>
                    </label>

                    <label className="form-check">
                      <input className="form-check-input" type="radio" name="price" value="descending" />
                      <span className="form-check-label m-0">
                      Highest to Lowest
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <article className="card-group-item">
                <header className="card-header p-0">
                  <h6 className="title">Choose by Storage Layout: </h6>
                </header>
                <div className="filter-content  ml-2">
                  <div className="card-body">
                    <form>
                      <label className="form-check">
                        <input className="form-check-input" type="checkbox" value="Floor Space" />
                        <span className="form-check-label m-0">
                        Floor Space
                        </span>
                      </label>
                      <label className="form-check">
                        <input className="form-check-input" type="checkbox" value="Racking" />
                        <span className="form-check-label m-0">
                        Racking
                        </span>
                      </label>
                      <label className="form-check">
                        <input className="form-check-input" type="checkbox" value="Secured Room" />
                        <span className="form-check-label m-0">
                        Secured Room
                        </span>
                      </label>
                      <label className="form-check">
                        <input className="form-check-input" type="checkbox" value="Pick Module" />
                        <span className="form-check-label m-0">
                        Pick Module
                        </span>
                      </label>
                      <label className="form-check">
                        <input className="form-check-input" type="checkbox" value="Pick Dedicated Room" />
                        <span className="form-check-label m-0">
                        Pick Dedicated Room
                        </span>
                      </label>
                    </form>

                  </div>
                </div>
              </article>


            </div>
          </div>

        </div> */}



        <div className="col-md-10 p-0">

          <div className=' d-flex justify-content-center'>
            <div className="input-group">
              <select className="input-group-text">
                <option value="">All</option>
                <option value="">Search By Location</option>
                <option value="">Search By Warehouse</option>
                <option value="">Search By Company</option>
              </select>
              {/* </span> */}
              {/* </div> */}
              <input type="text" className="form-control" placeholder='ABC Company' />
              {/* <div className="input-group-append"> */}
              <span className="input-group-text btn btn-primary py-0 d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
              {/* </div> */}
            </div>
          </div>

          <section>
            <div className="container">

              {office.map((data) => (
                <div className="row justify-content-center mb-3">
                  <div className="col-md-12 col-xl-12">
                    <div className="card shadow-0 border rounded-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                            <div className="bg-image hover-zoom ripple rounded ripple-surface">
                              <img src={data.img}
                                className="w-100" />
                              <a href="#!">
                                <div className="hover-overlay">
                                  <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="col-md-6 col-lg-6 col-xl-6">
                            <h5><BeenhereIcon />{data.business}</h5>
                            <div className="d-flex flex-row">
                              {/* <div className="text-danger mb-1 me-2">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </div> */}
                              <span>{data.name}</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted small">
                              <span>{data.address}</span>
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
                              There are many variations of passages of Lorem Ipsum available, but the
                              majority have suffered alteration in some form, by injected humour, or
                              randomised words which don't look even slightly believable.
                            </p>
                          </div>
                          <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                            <div className="d-flex flex-row align-items-center mb-1">
                              <h4 className="mb-1 me-1">{data.rate} Rs</h4>
                              <span className="text-danger"><s> 200.99 Rs</s></span>
                            </div>
                            <h6 className="text-success"> Few rooms left.</h6>
                            <div className="d-flex flex-column mt-4">
                              <button className="btn btn-primary btn-sm" type="button">Details</button>
                              <button className="btn btn-outline-primary btn-sm mt-2" type="button" onClick={(e) => { addToCart(e, data) }}>
                                Add to wishlist
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </section>

        </div>

      </div>





    </>
  );
}