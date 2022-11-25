import React, { useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Api from '../../api/Api';
import Swal from 'sweetalert';
import Carousel from "react-bootstrap/Carousel";
import { CmsContext } from '../../context/ContextProvider';

interface warehouse {
  city: any,
  clientId: any,
  houseNo: any,
  pincode: any,
  plotNo: any,
  state: any,
  status: any,
  streetAddrs: any,
  warehouseName: any,
  warehouseId: any
}



const imgUrl = "assets/images/header/04.jpg";

const PrimeSection = () => {
  const navigate = useNavigate();

  const cmsContent = useContext(CmsContext);
  const homeContent = cmsContent['home'];

  const goToNextPage = (pagePath: string) => {

    navigate(pagePath);
  }

  const inputRef: any = useRef(null);

  const searchWarehouse = (data: any) => {
    const api = new Api();
    console.log("====>", inputRef.current.value);
    const pin = inputRef.current.value;
    // const pin = '781036'
    api.searchwarehouse(pin).then((response) => {
      console.log('Warehouse Search >>>>', response);
      const data: warehouse = response.data.methodReturnValue.warehouseViewBean
        ;

      if (response.data.status == 'SUCCESS') {
        navigate('/search-new', { state: data });
      } else {
        Swal({
          title: 'We are sorry',
          text: 'We were not able to find a match. Please try another Search Word',
        })
      }
    })
      .catch((error) => {
        console.log(error);
        Swal({
          title: 'We are sorry',
          text: 'We were not able to find a match. Please try another Search Word',
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
                    {homeContent?.homeTitleText}
                      <br />
                      <h4>
                        <i>
                        {" "}
                          {homeContent?.homeSubTitleText}
                        </i>
                      </h4>
                      <div className="light-rounded-buttons">
                        <a
                          href="javascript:void(0)"
                          className="btn primary-btn"
                          onClick={() => goToNextPage("/discovermore")}
                        >
                          
                          {homeContent?.discoverMoreBtn}
                        </a>
                      </div>
                    </h1>
                    <h6>{homeContent?.searchMsgText}</h6>

                    <div className="form-group d-flex flex-row">


                      <input className="input-search-size form-control p-2" name="name" ref={inputRef} type="text" placeholder={homeContent?.searchInputLabel} style={{ height: '50px' }} />


                      <div className="light-rounded-buttons float-end mt-0">
                        <a href="javascript:void(0)" onClick={searchWarehouse} className="btn primary-btn"><i className="lni-large lni-search-alt"></i> </a>
                      </div>
                    </div>

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

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PrimeSection;
