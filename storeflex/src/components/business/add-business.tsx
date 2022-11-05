import React, {useState} from 'react';
import {BusinessDetails} from '../../utils/ResponseSchema';
import AddStore from '../../pages/addstore';
import AddProfile from '../../components/panels/profile/addProfile';
import TopNavbar from '../../components/navbar/TopNavBar';
import SideNavBar from '../../components/navbar/SideNavBar';
import { AppContainer, SplitPaneContainer } from '../../components/containers/containers';
import { getUserType } from '../../utils/CommonUtils';

const storeData = require('../../mockData/storeinfoData.json');

const AddBusiness = () => {

  const data = storeData.BUSINESS_PROFILE;
  const profile = data.businessInfo as BusinessDetails;
  const [profileSaved, setProfileSaved] = useState(false);

  const showStoreDetails = () => {
    if(profileSaved) {
      return(
        <>
          <AddStore />
        </>
      )
    } else {
      return(<> </>);
    }
   
  }

  const onBusinessInfoSave = () =>  {
    setProfileSaved(true);
  }
    return(
      <AppContainer>
      <TopNavbar />
      <SplitPaneContainer
          left={<SideNavBar userType={getUserType()} />}
          right={
              <div className='c-box-shadow-blue m-left-md'>
                  <AddProfile profileData={profile} onSave={() => {onBusinessInfoSave()}}/>
                    {showStoreDetails()}
              </div>    
          }
      />
  </AppContainer>
  )
}

export default AddBusiness;




// import React, {useState} from 'react';
// import Modal from 'react-bootstrap/Modal';
// import {BusinessDetails} from '../../utils/ResponseSchema';
// import AddProfile from '../../components/panels/profile/addProfile';
// const storeData = require('../../mockData/storeinfoData.json');


// const AddBusiness = (props)=> {
//     const data = storeData.BUSINESS_PROFILE;
//     const profile = data.businessInfo as BusinessDetails;
//     const [profileSaved, setProfileSaved] = useState(false);
//     const onBusinessInfoSave = () =>  {
//         setProfileSaved(true);
//     }
//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Header closeButton style={{backgroundColor:'#f2f2f2'}}>
//                 <Modal.Title>
//                     <h3>ADD BUSINESS</h3>
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//             <AddProfile profileData={profile} onSave={() => {onBusinessInfoSave()}}/>
//             </Modal.Body>
//         </Modal>
//     );
// }

// export default AddBusiness;