import React, { useState } from 'react';
import swal from 'sweetalert';
import { Contacts } from '../atoms/contact/contacts';

const Contact = () => {

    const contactList = [
        {
            country: 'India',
            countryFlag: '/images/country/india.png',
            address: 'S 3061, Akshar Business Park , Sector 25, Vashi, Navi Mumbai, Maharastra, India 400703',
            tel: '000 800 050 1417'
        },
        {
            country: 'USA',
            countryFlag: '/images/country/usa.png',
            address: 'PO Box: 234, Round Rock, Texas, USA - 78681',
            tel: '000 800 050 1417'
        }
    ];

    const [values, setValues] = useState({
        name: "",
        subject: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        firstNameError: "",
        subjectError: "",
        emailError: "",
        phoneError: "",
        messageError: ""
    });

    const handleChange = (event: any) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const sendMessage = () => {
        if (!values.name) {
            setErrors({ ...errors, firstNameError: " *First Name is required. " });
        } else if (!values.subject) {
            setErrors({ ...errors, subjectError: " *Subject is required. " });
        } else if (!values.email) {
            setErrors({ ...errors, emailError: " *Email is required. " });
        } else if (!values.phone) {
            setErrors({ ...errors, phoneError: " *Phone is required. " });
        } else if (!values.message) {
            setErrors({ ...errors, messageError: " *Message is required. " });
        }
        else {
            swal('Your message has been sent successfully!', {
                icon: "success",
            });
        }
    }

    return (
        <>
            <section id="contact" className="contact-us">
                {/* <!--======  Start Section Title Three ======--> */}
                <div className="section-title-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="content">
                                    <h5>Contact Us</h5>
                                    <h2 className="fw-bold">Need Any Help?</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- container --> */}
                </div>
                {/* <!--====== End Section Title Three ======--> */}
                <div className="container">
                    <div className="contact-head">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <div className="form-main">
                                        <form action="https://formsubmit.co/support@storeflex.com" method="POST">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input name="firstName" type="text" placeholder="First Name" onChange={handleChange} />
                                                        {errors.firstNameError && <p className="text-red">{errors.firstNameError}</p>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input name="middleName" type="text" placeholder="Middle Name" onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input name="subject" type="text" placeholder="Subject" onChange={handleChange} />
                                                        {errors.subjectError && <p className="text-red">{errors.subjectError}</p>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
                                                        {errors.emailError && <p className="text-red">{errors.emailError}</p>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="form-group">
                                                        <input name="phone" type="text" placeholder="Phone" onChange={handleChange} />
                                                        {errors.phoneError && <p className="text-red">{errors.phoneError}</p>}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group message">
                                                        <textarea name="message" placeholder="Message" onChange={handleChange} />
                                                        {errors.messageError && <p className="text-red">{errors.messageError}</p>}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group light-rounded-buttons">
                                                        <button onClick={() => { sendMessage() }} type="submit" className="btn primary-btn">
                                                            Send Message
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="contact-info">
                                        <div className="single-head">
                                            <div className='p-bot-md'>
                                                <div>
                                                    {
                                                        contactList.map((list, index) => {
                                                            return (
                                                                <div key={`contact_${index}`} className='p-bot-md'>
                                                                    <Contacts contact={list} />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="single-info">
                                                <a href="mailto:support@storeflex.com"><i className="lni lni-envelope"></i></a>
                                                <ul>
                                                    <li><span>Mail Us</span></li>
                                                    <li>
                                                        <a href="mailto:support@storeflex.com"> support@storeflex.com</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Contact;