import React from 'react';
import Swal from 'sweetalert2';


const Services = () => {

  const handleCard=(data)=>{
    console.log(data);

  switch(data){
    case 'one':
      console.log("Clicked on 1st card");
      return;

    case 'two':
      console.log("clicked on 2nd card");
      return;

    case 'three':
      console.log("clicked on 3rd card");
      return;

    case 'four':
      console.log("clicked on 4th card");
      return;

    default: console.log("erro");
    return;
    
      
      
      
  }
    
  

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
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form.
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
                    onClick={()=>Swal.fire({
                      title: 'Listing Platform',
                      text: 'We empower consumers with data, inspiration & knowledge. You can be a part of our family by simply clicking on register',
                    }) 
                  }
                    className="btn primary-btn btn-sm"> Read More </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="single-service">
                  <span className="serial">02</span>
                  <h4>Resource Management</h4>
                  <p>
                    We enjoy working with discerning clients, people & company...
                  </p>
                  <div className="light-rounded-buttons">
                  <button onClick={()=>handleCard("two")} className="btn primary-btn btn-sm"> Read More </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12">
                <div className="single-service">
                  <span className="serial">03</span>
                  <h4>Technology backed warehousing solution</h4>
                  <p>
                    Browse rentals with clients, people...
                  </p>
                  <div className="light-rounded-buttons">
                  <button onClick={()=>handleCard("three")} className="btn primary-btn btn-sm"> Read More </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-12" >
                <div className="single-service">
                  <span className="serial">04</span>
                  <h4>Accounting & Transaction Services</h4>
                  <p>
                    We take care of the lease and...
                  </p>
                  <div className="light-rounded-buttons">
                  <button onClick={()=>handleCard("four")} className="btn primary-btn btn-sm"> Read More </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
};
  
  export default Services;