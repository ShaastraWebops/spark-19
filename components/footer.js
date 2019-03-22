import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="wrapper style1">
      <div className="title" data-aos="fade-up">
        Contact
      </div>
      <div className="wrapper-container">
        <div className="row" data-aos="fade-down">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6">
                <img
                  src="/static/images/logo1.svg"
                  alt="shaastra logo"
                  id="shaastra"
                />
              </div>
              <div className="col-6">
                <img
                  src="/static/images/outreach.png"
                  alt="outreach logo"
                  id="outreach"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-6">
                <p className="style1">
                  Indian Institute of Technology Madras
                  <br />
                  Adyar, Chennai - 600036
                </p>
                <div>For more info, visit</div>
                <p className="style1">www.shaastra.org</p>
              </div>
              <div className="col-6">
                <div className="social">
                  <a
                    href="https://www.facebook.com/Shaastra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="style1"
                  >
                    <img
                      src="/static/images/facebook.svg"
                      alt=""
                      className="icon"
                    />
                    @Shaastra
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.twitter.com/ShaastraIITM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="style1"
                  >
                    <img
                      src="/static/images/twitter.svg"
                      alt=""
                      className="icon"
                    />
                    @ShaastraIITM
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.instagram.com/shaastra_iitm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="style1"
                  >
                    <img
                      src="/static/images/instagram.svg"
                      alt=""
                      className="icon"
                    />
                    @shaastra_iitm
                  </a>
                </div>
                <div className="social">
                  <a
                    href="https://www.linkedin.com/company/shaastra-iit-madras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="style1"
                  >
                    <img
                      src="/static/images/linkedin.svg"
                      alt=""
                      className="icon"
                    />
                    @shaastra-iit-madras
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
