import React from "react";
const Contact = () => {
  return (
    <section id="contact" className="wrapper style2">
      <div className="title" data-aos="fade-up">
        Contact Us
      </div>
      <div className="wrapper-container">
        <table className="table table-striped table-bordered table-responsive d-none">
          <thead className="thead-dark" data-aos="fade-down">
            <tr>
              <th style={{ width: "20vw" }}>City</th>
              <th style={{ width: "20vw" }}>Coordinator</th>
              <th style={{ width: "20vw" }}>Email ID</th>
              <th style={{ width: "20vw" }}>Phone Number</th>
            </tr>
          </thead>
        </table>
        <div className="text-center">
          <h2>
            Contact us at <br />
            <br />
            <a href="mailto:">outreach@shaastra.org</a>
          </h2>
        </div>
      </div>
    </section>
  );
};
export default Contact;
