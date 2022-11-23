import React from 'react';
import { Container } from '@mui/material';
import Footer from '../components/footer/footer';
import TopNavBar from '../components/navbar/TopNavBar';
import { AppContainer } from '../components/containers/containers';
import { SplitPaneContainer } from '../components/containers/containers';
import Accordion from 'react-bootstrap/Accordion'

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
                  <Accordion.Header>??????????????????????</Accordion.Header>
                  <Accordion.Body>
                  There will be answer for the question..
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>??????????????????</Accordion.Header>
                  <Accordion.Body>
                  There will be answer for the question..
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>??????????????</Accordion.Header>
                  <Accordion.Body>
                  There will be answer for the question..
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>????????????</Accordion.Header>
                  <Accordion.Body>
                  ANS ANS ANS ANS ANS
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