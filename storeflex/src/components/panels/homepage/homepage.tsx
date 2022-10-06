import React from 'react';
import './homepage.scss';
export const HpSearchSpace = () => {
    return (
        <div>
            <div>
                <img className='space-img' src='../static/images/search.jpeg' alt='search warehouse'
                />
            </div>
            <div>
                <div className='f-40px align-c p-top-md p-bot-sm'>SEARCH SPACE</div>
                <ul className='square-list'>
                    <li>Best Match</li>
                    <li>Automated Booking</li>
                    <li>Easy Payment Terms</li>
                    <li>Modern and Secured</li>
                    <li>Value for Money</li>
                </ul>
            </div>
        </div>
    )
}

export const HpListSpace = () => {
    return (
        <div>
            <div>
                <img className='space-img'  src='../static/images/list.jpeg' alt='list warehouse'
                />
            </div>
            <div>
                <div className='f-40px align-c p-top-md p-bot-sm'>LIST SPACE</div>
                <ul className='square-list'>
                    <li >Free Listing</li>
                    <li>Hassle-free Payments</li>
                    <li>Customer Background Check</li>
                    <li>Build Customer Base</li>
                    <li>Maximize Earnings for your space</li>
                </ul>
            </div>
        </div>
    )
}

export const HomePageNavBar = () => {
    return (
        <div className='m-top-md'>
            <div className='homeNavContainer'>
                <div className='homeNavConent f-bold'> Home </div>
                <div className='homeNavConent f-bold'> Search Space </div>
                <div className='homeNavConent f-bold'>List Space </div>
                <div className='homeNavConent f-bold'> How To/FAQs </div>
                <div className='homeNavConent f-bold'> Contact Us </div>
            </div>
        </div>
    )
}