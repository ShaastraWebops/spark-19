import React from "react";
import { eventDetails } from "../details";

const Schedule = () => {
  return (
    <section id="schedule" className="wrapper style2">
      <div className="title" data-aos="fade-up">
        Schedule
      </div>
      <div className="wrapper-container">
        <table className="table table-striped table-bordered table-responsive">
          <thead className="thead-dark" data-aos="fade-down">
            <tr>
              <th>City</th>
              <th>Venue</th>
              <th>Date</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {eventDetails.map(detail => {
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
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;
