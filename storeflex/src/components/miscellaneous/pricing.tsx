import React from 'react';
import Carousel from "../carousel/carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Pricing = () => {
    return (
      <>
      <section id="pricing" className="pricing-area pricing-fifteen">
        <div className="section-title-three">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h5>Pricing Plan</h5>
                  <h2 className="fw-bold">Our Best Pricing</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Custom Carousel*/}
        <div
          style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 64,
          }}
        >
          <Carousel show={3} slide={true}>
          <Card border="warning" style={{ width: "18rem", marginRight: "25px", boxShadow: '1px 3px 9px #F4AAB9'}}>
              <Card.Img variant="top" src="static\images/royal-palace.jpg"/>
              <Card.Body className="text-center">
                <Card.Title>WAREHOUSE_GUWAHATI</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  GUWAHATI,ASSAM
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <h6 className="amount">
                  &#x20B9; 85,000.00 <span className="duration">/month</span>
                </h6><br/>
                <button className="btn primary-btn btn-sm" >Details</button>
                <p className="pt-1"><Card.Link href="#"><u>Add to Wishlist</u></Card.Link></p>
              </Card.Body>
            </Card>
            <Card border="warning" style={{ width: "18rem", marginRight: "25px", boxShadow: '1px 3px 9px #F4AAB9'}}>
              <Card.Img variant="top" src="static\images/palace-1.jpg"/>
              <Card.Body className="text-center">
                <Card.Title>WAREHOUSE_SIXMILE</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  SIXMILE,GUWAHATI
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <h6 className="amount">
                  &#x20B9; 85,000.00 <span className="duration">/month</span>
                </h6><br/>
                <button className="btn primary-btn btn-sm" >Details</button>
                <p className="pt-1"><Card.Link href="#"><u>Add to Wishlist</u></Card.Link></p>
              </Card.Body>
            </Card>
            <Card border="warning" style={{ width: "18rem", marginRight: "25px", boxShadow: '1px 3px 9px #F4AAB9'}}>
              <Card.Img variant="top" src="static\images/02.jpg"/>
              <Card.Body className="text-center">
                <Card.Title>WAREHOUSE_DELHI</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  DELHI, INDIA
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <h6 className="amount">
                  &#x20B9; 85,000.00 <span className="duration">/month</span>
                </h6><br/>
                <button className="btn primary-btn btn-sm" >Details</button>
                <p className="pt-1"><Card.Link href="#"><u>Add to Wishlist</u></Card.Link></p>
              </Card.Body>
            </Card>
            <Card border="warning" style={{ width: "18rem", marginRight: "25px", boxShadow: '1px 3px 9px #F4AAB9'}}>
              <Card.Img variant="top" src="static\images/palace-3.jpg"/>
              <Card.Body className="text-center">
                <Card.Title>WAREHOUSE_MUMBAI</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  MUMBAI_INDIA
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <h6 className="amount">
                  &#x20B9; 85,000.00 <span className="duration">/month</span>
                </h6><br/>
                <button className="btn primary-btn btn-sm" >Details</button>
                <p className="pt-1"><Card.Link href="#"><u>Add to Wishlist</u></Card.Link></p>
              </Card.Body>
            </Card>
            <Card border="warning" style={{ width: "18rem", marginRight: "25px", boxShadow: '1px 3px 9px #F4AAB9'}}>
              <Card.Img variant="top" src="static\images/01.jpg"/>
              <Card.Body className="text-center">
                <Card.Title>RIVER_VALLEY PALACE</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Greenwich, London
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <h6 className="amount">
                  &#x20B9; 85,000.00 <span className="duration">/month</span>
                </h6><br/>
                <button className="btn primary-btn btn-sm" >Details</button>
                <p className="pt-1"><Card.Link href="#"><u>Add to Wishlist</u></Card.Link></p>
              </Card.Body>
            </Card>
            <Card border="warning" style={{ width: "18rem", marginRight: "25px", boxShadow: '1px 3px 9px #F4AAB9'}}>
              <Card.Img variant="top" src="static\images/03.jpg"/>
              <Card.Body className="text-center">
                <Card.Title>WAREHOUSE_KOLKATA</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  KOLKATA, WEST BANGAL
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <h6 className="amount">
                  &#x20B9; 85,000.00 <span className="duration">/month</span>
                </h6><br/>
                <button className="btn primary-btn btn-sm" >Details</button>
                <p className="pt-1"><Card.Link href="#"><u>Add to Wishlist</u></Card.Link></p>
              </Card.Body>
            </Card>

            {/* <div>
              <div style={{ padding: 8 }}>
                <img
                  src="https://via.placeholder.com/300/09f/fff.png"
                  alt="placeholder"
                  style={{ width: "100%" }}
                />
              </div>
            </div> */}
          </Carousel>
        </div>
      </section>
      </>
    );
};
export default Pricing;