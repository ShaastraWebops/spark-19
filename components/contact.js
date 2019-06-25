import React from 'react';
const Contact = () => {
    return (
        <section id="contact" className="wrapper style2">
            <div className="title" data-aos="fade-up">
                Contact Us
          </div>
            <div className="wrapper-container">

                <table className="table table-striped table-bordered table-responsive">
                    <thead className="thead-dark" data-aos="fade-down">
                        <tr>
                            <th>City</th>
                            <th>Coordinator</th>
                            <th>Email ID</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                </table>

            </div>
        </section>
    )
}
export default Contact;