import React, {useState} from 'react';

const SignUpNew = () => {


  return (
   <>
   <section className='signup-area signup-one'>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="signin-form form-style-one rounded-button">
            <div className="row">
                
                <div className="col-md-12">
                  <div className="form-input">
                    <label>Enter first name:</label>
                    <div className="input-items default">
                      <input type="text" placeholder="First name" name="fname"/>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-input">
                    <label>Enter last name:</label>
                    <div className="input-items default">
                      <input type="text" placeholder="Last name" name="lname"/>
                    </div>
                  </div>
                </div>
               <div className="col-md-12 justify-content-center">
                  <div className="form-input justify-content-center">
                    {/* <img src="assets/images/white-logo.jpg" alt="Logo" style={{ height: '8vh' }} /> */}
                    <label>Enter email:</label>
                    <div className="input-items default">
                      <input type="text" placeholder="Email" name="email" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-input">
                    <label>Enter new password:</label>
                    <div className="input-items default">
                      <input type="password" placeholder="Password" name="password"/>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-input">
                    <label>Enter mobile no:</label>
                    <div className="input-items default">
                      <input type="nummber" placeholder="Phone Number" name="phone"/>
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
  )
}

export default SignUpNew;