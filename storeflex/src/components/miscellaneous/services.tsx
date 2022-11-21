import React from "react";
import Modal from "react-bootstrap/Modal";

const Services = () => {

  const [modalShow, setModalShow] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({
    Header:'',
    Text:''
  });

  const showModal = (modalName:any) =>{
    let contents:any={
      Header:"No header",
      Text: "No content available"
    }
    switch(modalName){
      case 'ListingPlatform': 
        contents={
          Header:"ListingPlatform",
          Text: " Empowering Consumers with data,inspiration & knowlwdge..."
        }
        break;
      case 'ResourceManagement':  
      contents={
        Header:"ResourceManagement",
        Text: " Empowering Consumers with data,inspiration & knowlwdge..."
      }
        break;
      case 'Technology':  
      contents={
        Header:"Technology",
        Text: " Empowering Consumers with data,inspiration & knowlwdge..."
      }
        break;
      case 'Accounting':  
      contents={
        Header:"Accounting",
        Text: " Empowering Consumers with data,inspiration & knowlwdge..."
      }
        break;
    }
    setModalContent(contents);
    setModalShow(true);
  }

  const DiscoverMoreModal=(props)=> {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Services We Provide
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{modalContent.Header}</h4>
          <p>
            {modalContent.Text}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn primary-btn btn-sm" onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <section id="services" className="services-area services-seven">
        <div className="section-title-four">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h5>Our Services</h5>
                  <h2 className="fw-bold">Services We Provide</h2>
                  <p>
                    We help find you meet your warehousing requirements at the
                    best possible rate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="single-head">
            <div className="row">
              <div className=" col-lg-3 col-md-4 col-12">
                <div className="single-service">
                  <span className="serial">01</span>
                  <h4>Listing Platform</h4>
                  <p>
                    Empowering Consumers with data,inspiration & knowlwdge...
                  </p>
                  <div className="light-rounded-buttons">
                    <button
                     onClick={() => {showModal('ListingPlatform')}}
                      className="btn primary-btn btn-sm"
                    >
                      {" "}
                      Read More{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="single-service">
                  <span className="serial">02</span>
                  <h4>Resource Management</h4>
                  <p>
                    We enjoy working with discerning clients, people &
                    company...
                  </p>
                  <div className="light-rounded-buttons">
                    <button
                      className="btn primary-btn btn-sm"
                      onClick={() => {showModal('ResourceManagement')}}
                    >
                      {" "}
                      Read More{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="single-service">
                  <span className="serial">03</span>
                  <h4>Technology backed warehousing solution</h4>
                  <p>Browse rentals with clients, people...</p>
                  <div className="light-rounded-buttons">
                    <button
                      className="btn primary-btn btn-sm"
                      onClick={() => {showModal('Technology')}}
                    >
                      {" "}
                      Read More{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="single-service">
                  <span className="serial">04</span>
                  <h4>Accounting & Transaction Services</h4>
                  <p>We take care of the lease and...</p>
                  <div className="light-rounded-buttons">
                    <button
                      className="btn primary-btn btn-sm"
                      onClick={() => {showModal('Accounting')}}
                    >
                      {" "}
                      Read More{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DiscoverMoreModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Services;
