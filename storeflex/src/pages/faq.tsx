import React from 'react';
import { AccordionActions, AccordionDetails, Container } from '@mui/material';
import Footer from '../components/footer/footer';
import TopNavBar from '../components/navbar/TopNavBar';
import { AppContainer } from '../components/containers/containers';
import { SplitPaneContainer } from '../components/containers/containers';
import Accordion from 'react-bootstrap/Accordion'
import { Action } from '@remix-run/router';

const faq = () => {
    return (
        <>
         <AppContainer>
        <TopNavBar />
        <SplitPaneContainer
            left={<></>}
            right={
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What is the benefit of choosing Store flex ?</Accordion.Header>
                  <Accordion.Body>
                    There will be answer for the question..
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Why Store flex ?</Accordion.Header>
                  <Accordion.Body>
                  There will be answer for the question..
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Is it easy to use Store flex ?</Accordion.Header>
                  <Accordion.Body>
                  There will be answer for the question..
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header> Q. So,how does this work ? </Accordion.Header>
                  <Accordion.Body>
                  Ans: StoreFLEX has built a network of more than 300 warehouses across INDIA to
                  connect companies that need additional warehousing space and services to
                  companies who can provide these services. The StoreFLEX software platform
                  matches shippers with warehousing providers that meet their desired project scope
                  and criteria, and then all parties use the StoreFLEX platform to work together;
                  scheduling deliveries and pickups, managing inventory, legal agreements, and
                  billing.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Q. How will the price be fixed on "StoreFLEX" ?</Accordion.Header>
                  <Accordion.Body>
                  Ans: StoreFLEX believe in open and transparent mechanism. Warehouse Operators
                  will be free to decide and changes the prices on their “StoreFLEX” dashboard.
                  However, our Warehouse operators offers “Lowest Guaranteed Price” on
                  StoreFLEX. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Q. Are there minimum requirements utilize to StoreFLEX facility ?</Accordion.Header>
                  <Accordion.Body>
                  Ans: Yes,StoreFLEX has a minimum of 30 days of storage.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Q. What does the handling fee include ?</Accordion.Header>
                  <Accordion.Body>
                  Ans: The handling fee covers the warehouse’s handling of full pallets/SKU when they
                  arrive and leave a warehouse. Handling fee given on the StoreFLEX includes one
                  unloading & one loading charges only. The handling fee is paid upfront on a per
                  pallet/SKU basis. Any other services provided at the warehouse will be charged
                  separately.

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>Q. How can I be sure my goods will be safe inside StoreFLEX partner warehouses?</Accordion.Header>
                  <Accordion.Body>
                  Ans: All our warehouse partners are audited by “StoreFLEX” to ensure that their
                  facilities and teams meet our quality standards before their warehouse space is
                  made available to our clients in the StoreFLEX marketplace. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>Q. How do you handle liability for the goods that are stored through the StoreFLEX marketplace?</Accordion.Header>
                  <Accordion.Body>
                  Q. Each of our warehouse partners is required to have insurance and assumes
                    liability for loss or damage that they cause to the goods that they store, or for
                    damage caused due to their negligence. The owners of the goods stored maintain
                    coverage for any damage that is caused due to Acts of God/Acts of Nature.
                    Warehouse partners can also get access to additional Warehouse Legal Liability
                    insurance through StoreFLEX.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>Q. How would a claim be handled if the facility were to damage one or several of my pallets?</Accordion.Header>
                  <Accordion.Body>
                  Ans: If one of your pallets/SKU is damaged, please contact your StoreFLEX operations
                  contact. The operations team will initiate the process to investigate any claims that
                  may arise regarding damage to goods.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>Q. Are the prices listed on this page accurate?</Accordion.Header>
                  <Accordion.Body>
                  Ans: The pricing is upto date , accurate and committed by the warehouse operator.
                  Every reservation includes a scope online document to which both parties (shippers
                  and warehouses) agree before the transaction. Any additional scope of work and
                  related pricing will be part of the Scope Document.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>Q. Can I have access to my “Product” at the warehouse?</Accordion.Header>
                  <Accordion.Body>
                  Ans: NO. Since the warehouses are multi-client facility and for security and
                  confidentiality reasons, physical access to the product is not permitted. In case of
                  inventory audit, StoreFLEX Operations team to will do the needful upon request. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>Q. Do you provide transportation services to or from your warehouse locations?</Accordion.Header>
                  <Accordion.Body>
                  Ans: Transportation of goods to and from StoreFLEX warehouse partner locations is
                  typically arranged by the owner/depositor of the goods. StoreFLEX can assist in first
                  / last mile delivery. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>Q. What are the Value-Added Services on the StoreFLEX platform ?</Accordion.Header>
                  <Accordion.Body>
                  Ans: StoreFLEX mission is to create 360° logistics solution. While services related to
                  warehousing are on-line available on StoreFLEX other services like Consultancy,
                  Designing, Engineering, Construction, Audit, Operations & Maintenance (O&M),
                  WMS / WCS, HSEQ, 3PL, Consultancy, automation & international connectivity are
                  available offline. Please get in touch with us at support@storeflex.in to know more
                  about these services. Some of the finest brands and service providers are helping
                  “StoreFLEX” to provide world-class service to our clients.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            }
          />
        <Footer />
    </AppContainer>
    </>
    )
  };
  <Footer/>
  
  export default faq;