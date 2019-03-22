import React from "react";

const Terms = () => {
  return (
    <section id="terms" className="wrapper style3">
      <div className="title" data-aos="fade-up">
        Rules and Regulations
      </div>
      <div className="wrapper-container">
        <ul>
          <li className="style3">
            A team should consist of two members and any bonafide team from a
            school can take part by registering online. The team members need
            not be from the same school/branch. Cross teams are allowed, subject
            to the eligibility criterion that both participants are students of
            class 8 to 12.
          </li>
          <li className="style3">
            The participants must carry a valid ID for verification.
          </li>
          <li className="style3">
            There are no limitations on the number of teams participating from a
            particular school.
          </li>
          <li className="style3">
            The participation for the Spark Junior Quiz 2018 is totally FREE and
            hence there is NO registration fee.
          </li>
          <li className="style3">
            The registration would have to be completed on or before the
            deadline indicated.
          </li>
          <li className="style3">
            On-spot registrations are only available subject to availability of
            seats.
          </li>
          <li className="style3">
            The team members should be from the same school/branch. No cross
            teams allowed.
          </li>
          <li className="style3">
            The quiz will consist of only one round - A common written round.
            The winners will be decided based on the marks scored.
          </li>
          <li className="style3">
            The organiser's decision on any matter pertaining to the quiz would
            be final and binding. The organisers can amend the eligibility and
            rules of participation as deemed fit.
          </li>
        </ul>
        <br />
        <div className="actions" data-aos="fade">
          <button
            className="button style3"
            onClick={() => {
              const elem = document.getElementById("register");
              window.scrollTo({
                top: elem.offsetTop - 120,
                left: elem.offsetLeft,
                behavior: "smooth"
              });
            }}
          >
            <em>Register</em>
          </button>
          <a
            href="https://res.cloudinary.com/shaastra-apps/image/upload/v1533862128/Brochure-Spark_.tech.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button style3">
              <em>Download Brochure</em>
            </button>
          </a>
          <button
            className="button style3"
            onClick={() => {
              const elem = document.getElementById("schedule");
              window.scrollTo({
                top: elem.offsetTop - 120,
                left: elem.offsetLeft,
                behavior: "smooth"
              });
            }}
          >
            <em>Schedule</em>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Terms;
