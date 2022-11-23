import React from 'react';
import { Box, Container } from '@mui/material';
import Footer from '../components/footer/footer';
import { AppContainer } from '../components/containers/containers';
import TopNavbar from '../components/navbar/TopNavBar';

const DiscoverMore = () => {
    return (
        <AppContainer>
            <TopNavbar />
            <br></br><br></br><br></br><br></br>
            <Box className='m-top-md m-bot-md m-left-md m-right-md'>
                <div className='col-12 header-ten' style={{ backgroundImage: "url(/images/warehouse.webp)" }}>
                    <div className="text-center m-3"><h1>Logistics with perfect harmony</h1>
                        <p>When you need it, you need it right then! The warehouses go with huge unutilized and unsold spaces when there are customers who are unable to find the right space for their immediate need. This is an unstructured market, with no defined rules and lacks agility. StoreFlex technologies knows the short-comings and has come up with solutions to remove these gaps by making data driven decisions on behalf of the customers, augmented by artificial intelligence and machine learning automation.
                            This is the first true market place dedicated to the warehouse segment from industry insiders, connecting buyers and sellers directly in real time.
                            With a customer first mindset, our technology and customer care backbone gives delightful experience to both buyers and sellers of space.</p></div>
                    <div className='row'>
                        <div className='col-6 my-2 p-2'>
                            <div className="text-center"><h1>Looking for space?</h1>
                                <br></br><i><h3>Search, Compare, Book with peace of mind.</h3></i>
                                <br></br><p>Instant access to our digital network to search for the right space using our proprietary matching algorithm. The search results are curated and ranked based on your unique needs. The deal is sealed via a secured automated digitally signed virtual handshake. The whole process eliminates unresponsive manual middlemen with technology.
                                    To help you manage overflow and overcome unforeseen circumstances, we have a wide network of warehouse operators for you to connect directly. Our warehouse sellers provide a broad range of storage methods, inbound and outbound services, value added services and more. To learn how to find and reserve your space, please visit the tutorial videos.</p>
                            </div>
                        </div>

                        <div className='col-6 my-2 p-2'>
                            <div className="text-center"><h1>Space Owner?</h1></div>
                            <br></br><i><h3>Maximize Utilization & Revenue. Minimize idle time.</h3></i>
                            <br></br><p>Our unique platform allows warehouse owners and designated operators to configure facilities, publish space and manage availability and pricing.
                                StoreFlex offers you the opportunity to list your facilities and increase your return on assets by digitally managing your capacity over time. To maximize utilization and revenue potential, our automated system presents potential opportunities in the digital dashboard. Once a contract is nearing expiry, our proprietary algorithm recommends future listings.
                                To learn how to add your facility and publish in the platform, please visit the tutorial videos. </p>

                        </div>
                    </div>
                    <div className="text-center">
                        <iframe
                        className="modal__video-style"
                        width="800"
                        height="500"
                        src="https://www.youtube.com/embed/T07Ib_nTPoE"
                        title="StoreFlex Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </Box>
            <Footer />
        </AppContainer>
    )
}

export default DiscoverMore;
