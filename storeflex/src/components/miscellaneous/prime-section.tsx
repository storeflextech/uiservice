import React, {useRef} from 'react';
import { useNavigate } from "react-router-dom";
import Api from '../../api/Api';
import Swal from 'sweetalert';

interface warehouse {
  city: any,
  clientId: any,
  houseNo: any,
  pincode:any, 
  plotNo: any,
  state: any,
  status: any,
  streetAddrs: any,
  warehouseName: any,
  warehouseId:any
}



const imgUrl = "assets/images/header/04.jpg";

const PrimeSection = () => {
  const navigate = useNavigate();
  const goToNextPage = (pagePath: string) => {

    navigate(pagePath);
  }
  
  const inputRef:any = useRef(null);
  
  const searchWarehouse=(data:any) =>{
    const api = new Api();
    console.log("====>",inputRef.current.value);
    const pin = inputRef.current.value;
    // const pin = '781036'
    api.warehouseSearch(pin).then((response) =>{ 
      console.log('Warehouse Search >>>>', response);
      const data:warehouse = response.data.methodReturnValue.warehouseViewBean
      ;
      
      if(response.data.status == 'SUCCESS'){
        navigate('/search-new', {state: data});
      }else{
        Swal({
          title: 'Not Found',
          text: 'Not Found any data with your details',
        }) 
      }
    })
    .catch((error)=>{
      console.log(error);
      Swal({
        title: 'Not Found',
        text: 'Not Found any data with your details',
      }) 
      
    })

  }

  return (
    <>
      <section id="hero-area" className="header-area header-ten">
        <div className="verticle-lines">
          <div className="vlines one"></div>
          <div className="vlines two"></div>
          <div className="vlines three"></div>
          <div className="vlines four"></div>
        </div>
        <div className="header-inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 co-12">
                <div className="home-slider">
                  <div className="header-text align-items-center">
                    <h1>
                      Smarter search for space at your fingertips under one roof
                      <br />
                      <h4>
                        <i>
                          {" "}
                          Global marketplace for warehouse & logistics
                          management solutions
                        </i>
                      </h4>
                      <div className="light-rounded-buttons">
                        <a
                          href="javascript:void(0)"
                          className="btn primary-btn"
                          onClick={() => goToNextPage("/discovermore")}
                        >
                          {" "}
                          Discover More{" "}
                        </a>
                      </div>
                    </h1>
                    <h6>LET’S FIND THE WAREHOUSE YOU ARE LOOKING FOR</h6>

                    <div className="form-group d-flex flex-row">
                      <input
                        className="input-search-size form-control p-2"
                        name="name"
                        type="text"
                        placeholder="Enter Pin or City"
                        style={{ height: "50px" }}
                      />

                      <input className="input-search-size form-control p-2" name="name" ref={inputRef} type="text" placeholder="Enter Pin or City" style={{ height: '50px' }} />

                      <div className="light-rounded-buttons float-end m-1">
                      <a href="javascript:void(0)" onClick={() => { goToNextPage('/search-new') }} className="btn primary-btn"><i className="lni-large lni-search-alt"></i> </a>
                    </div>
                      
                      <div className="light-rounded-buttons float-end m-1">
                      <a href="javascript:void(0)" onClick={searchWarehouse} className="btn primary-btn"><i className="lni-large lni-search-alt"></i> </a>
                    </div>


                    </div>

                    {/* <div className="light-rounded-buttons float-end">
                      <a href="javascript:void(0)" onClick={() => { goToNextPage('/search-new') }} className="btn primary-btn"><i className="lni-large lni-search-alt"></i> </a>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <Carousel
                  fade={true}
                  controls={false}
                  slide={false}
                  interval={2000}
                  pause={false}
                >
                  <Carousel.Item>
                    <img
                      className="d-block w-100 header-image"
                      src="assets/images/header/img1.png"
                      alt="Storeflex"
                    />

                    <Carousel.Caption>
                      <h3 style={{ color: "dark" }}>First slide label</h3>
                      <p>
                        <i> Nulla vitae elit libero </i>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 header-image"
                      src="assets/images/header/img2.png"
                      alt="Storeflex"
                    />

                    <Carousel.Caption>
                      <h3 style={{ color: "dark" }}>Second slide label</h3>
                      <p>
                        <i> Lorem adipiscing elit.</i>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100  header-image"
                      src="assets/images/header/img3.png"
                      alt="Storeflex"
                    />

                    <Carousel.Caption>
                      <h3 style={{ color: "dark" }}>Third slide label</h3>
                      <p>
                        <i> Praesents magna.</i>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100  header-image"
                      src="assets/images/header/img4.png"
                      alt="Storeflex"
                    />

                    <Carousel.Caption>
                      <h3 style={{ color: "dark" }}>Fourth slide label</h3>
                      <p>
                        <i>alosdbh ahgbdhv.</i>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100  header-image"
                      src="assets/images/header/img5.png"
                      alt="Storeflex"
                    />

                    <Carousel.Caption>
                      <h3 style={{ color: "dark" }}>Fourth slide label</h3>
                      <p>
                        <i>alosdbh ahgbdhv.</i>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100  header-image"
                      src="assets/images/header/img6.png"
                      alt="Storeflex"
                    />

                    <Carousel.Caption>
                      <h3 style={{ color: "dark" }}>Fourth slide label</h3>
                      <p>
                        <i>alosdbh ahgbdhv.</i>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100  header-image"
                      src="assets/images/header/img7.png"
                      alt="Storeflex"
                    />

                    <Carousel.Caption>
                      <h3 style={{ color: "dark" }}>Fourth slide label</h3>
                      <p>
                        <i>alosdbh ahgbdhv.</i>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

                {/* <div className="header-image" style={{ background: 'url(' + imgUrl + ')', float: 'right', height: '500px', width: '500px', display: 'block' }}>
                  <img className="shape3" src="assets/images/header/shape3.png" alt="#" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PrimeSection;
