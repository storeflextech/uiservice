import React from 'react';

const Subscription = () => {
  return (
    <>
      <section className="call-action-area call-action-four">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-action-content text-center">
                <h2 className="action-title">Don't miss any updates!</h2>
                <p className="text">
                  Get the latest directly to your inbox <br />
                  Unsubscribe at any time.
                </p>
                <div className="call-action-form">
                  <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <div className="action-btn rounded-buttons">
                      <button className="btn primary-btn rounded-full">
                        subscribe
                      </button>
                    </div>
                  </form>
                </div>
                {/* <!-- call action form --> */}
              </div>
              {/* <!-- call action content --> */}
            </div>
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </section>
    </>
  );
};
export default Subscription;