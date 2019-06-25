import React from 'react';
import Head from "next/head";
import fetch from 'isomorphic-unfetch';

class Admin extends React.Component {
    static async getInitialProps(context) {
        const res = await fetch('http://localhost:4000/api/getParticipantData');
        const data = await res.json();

        console.log(data)
        return { data }
    }
    render() {
        return (
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    {/* <title>Spark 2019 | Shaastra 2020</title> */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
                    />
                    <link rel="stylesheet" href="/static/styles/styles.min.css" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" />
                </Head>
                
                <section id="admin" className="wrapper style2">
                    <div className="title" data-aos="fade-up">
                        <h1>Participant Data</h1>
                    </div>
                    <div className="wrapper-container">
                        <table className="table table-striped table-bordered table-responsive">
                            <thead className="thead-dark" data-aos="fade-down">
                                <tr>
                                    <th>Participant 1</th>
                                    <th>email id </th>
                                    <th>Phone Number </th>
                                    <th>School</th>
                                    <th>Participant 2</th>
                                    <th>email id </th>
                                    <th>Phone Number </th>
                                    <th>School</th>
                                    <th>City</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {eventDetails.map(detail => {
                                return (
                                    <tr key={detail.cityName} data-aos="fade-down">
                                        <td className="style1">{detail.cityName}</td>
                                        <td className="style1">{detail.address}</td>
                                        <td className="style1">{detail.date}</td>
                                        <td className="style1">
                                            {detail.name + " " + detail.email + " " + detail.no}
                                        </td>
                                    </tr>
                                );
                            })} */
                                    this.props.data.map(participant => {
                                        return (
                                            <tr key={participant._id}>
                                                <td>{participant.name1}</td>
                                                <td>{participant.email1}</td>
                                                <td>{participant.number1}</td>
                                                <td>{participant.school1}</td>
                                                <td>{participant.name2}</td>
                                                <td>{participant.email2}</td>
                                                <td>{participant.number2}</td>
                                                <td>{participant.school2}</td>
                                                <td>{participant.city}</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )

    }




}
export default Admin
