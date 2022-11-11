import React from 'react';

interface ContactsProps {
    contact : {
        country: string,
        countryFlag: string,
        address: string,
        tel : string,
    }
}

export const Contacts = (props: ContactsProps) => {

    const {country , countryFlag,  address, tel } = props?.contact;

    return (
        <div className='sf-contact-container'>
            <div className='sf-contact-holder'>
                <div className='sf-contact-img'>
                    <img src={countryFlag} alt={country} />
                </div>
                <div className='sf-contact-text'>
                    <h5 className='p-bot-xm'><span>{country}</span></h5>
                    <p className='line-h-sm p-bot-xm'>
                        <span><b>Address: </b></span>
                        <span>{address}</span>
                    </p>
                    <p>
                        <span><b>Tel: </b></span>
                        <span>{tel}</span>
                    </p>
                </div>
            </div>
        </div>
    )
} 

