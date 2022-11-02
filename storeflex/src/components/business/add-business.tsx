import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {BusinessDetails} from '../../utils/ResponseSchema';
import AddProfile from '../../components/panels/profile/addProfile';
const storeData = require('../../mockData/storeinfoData.json');


const AddBusiness = (props)=> {
    const data = storeData.BUSINESS_PROFILE;
    const profile = data.businessInfo as BusinessDetails;
    const [profileSaved, setProfileSaved] = useState(false);
    const onBusinessInfoSave = () =>  {
        setProfileSaved(true);
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{backgroundColor:'#f2f2f2'}}>
                <Modal.Title>
                    <h3>ADD BUSINESS</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <AddProfile profileData={profile} onSave={() => {onBusinessInfoSave()}}/>
            </Modal.Body>
        </Modal>
    );
}

export default AddBusiness;