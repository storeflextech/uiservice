import React from 'react';
import Footer from '../components/miscellaneous/footer';
import Services from '../components/miscellaneous/services';
import AboutStoreflex from '../components/miscellaneous/about-storeflex';
import Pricing from '../components/miscellaneous/pricing';
import DemoVideo from '../components/miscellaneous/demo-video';
import Team from '../components/miscellaneous/team';
import Subscription from '../components/miscellaneous/subscription';
import Testimonial from '../components/miscellaneous/testimonial';
import Contact from '../components/miscellaneous/contact';
import Brand from '../components/miscellaneous/brand';
import TopNavbar from '../components/navbar/TopNavBar';
// import SideNavBar from '../components/navbar/SideNavBar';
import PrimeSection from '../components/miscellaneous/prime-section';
import { AppContainer, SplitPaneContainer } from '../components/containers/containers';


const HomePage = () => {
  return (
    <AppContainer>
        <TopNavbar />
        <SplitPaneContainer
            left={<></>}
            right={
              <div>
                  {<PrimeSection />}
                  {<Services />}
                  {<AboutStoreflex />}
                  {<DemoVideo />}
                  {<Pricing />}
                  {<Team />}
                  {<Subscription />}
                  {<Testimonial />}
                  {<Contact />}
                  {<Brand />}
                  {<Footer />}
                  <div className="made-in-ayroui mt-4">
                    <ul>
                      <li>
                      <a className="btn primary-btn" href="https://ayroui.com" target="_blank" rel="nofollow">ß
                      List Your Warehouse
                    </a>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="scroll-top btn-hover">
                    <i className="lni lni-chevron-up"></i>
                  </a>
                </div>
            }
        />
    </AppContainer>
  );
};

export default HomePage;