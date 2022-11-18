import React from 'react';
import Footer from '../components/footer/footer';
import Services from '../components/miscellaneous/services';
import AboutStoreflex from '../components/miscellaneous/about-storeflex';
import Pricing from '../components/miscellaneous/pricing';
import DemoVideo from '../components/miscellaneous/demo-video';
import Brand from '../components/miscellaneous/brand';
// import Team from '../components/miscellaneous/team';
import Subscription from '../components/miscellaneous/subscription';
import Contact from '../components/miscellaneous/contact';
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
                  {<Brand />}
                  {/* {<Team />} */}
                  {<Subscription />}
                  {<Contact />}
                </div>
            }
          />
        <Footer />
    </AppContainer>
  );
};

export default HomePage;