import React from "react";

const Structure = () => {
  return (
    <section id="structure" className="wrapper style1">
      <div className="title" data-aos="fade-up">
        Structure
      </div>
      <div className="wrapper-container">
        <div className="row">
          <p className="style1">
            SPARK is a three-tier mega event, with the first phase being the
            SPARK Junior Quiz, a pan-India quiz competition to be conducted in
            over 20 cities, far and wide across the nation. With 4000+
            participants, the SPARK Junior Quiz is indeed one epic quizzing
            Journey. The winners stand a chance to travel all the way to IIT
            Madras free of cost to compete in the national finals and experience
            what Shaastra has to offer.
          </p>
          <div className="col-lg-4" data-aos="fade-left">
            <p className="style3">SPARK Prelims</p>
            <ul>
              <li className="style1">
                General Tech Quiz - science facts, logic, tech and how things
                work
              </li>
              <li className="style1">
                Written Round 40 questions - one word answer
              </li>
              <li className="style1">Teams of 2</li>
              <li className="style1">Top 3 teams get prizes</li>
              <li className="style1">
                Top 5 teams from each city qualify for Nationals Screening round
              </li>
            </ul>
          </div>
          <div className="col-lg-4" data-aos="fade">
            <p className="style3">Screening Round</p>
            <ul>
              <li className="style1">
                Questionnaire - 1 Page report on given topic (case study
                competition
              </li>
              <li className="style1">Online submission</li>
              <li className="style1">
                Participants will be guided by the Shaastra team
              </li>
              <li className="style1">
                Top 25 go for the National finals - the Spark Junior Conference
              </li>
            </ul>
          </div>
          <div className="col-lg-4" data-aos="fade-right">
            <p className="style3">Spark Finals</p>
            <ul>
              <li className="style1">
                Presentation - based on the report submitted for screening round
              </li>
              <li className="style1">Keynote and lectures</li>
              <li className="style1">Workshops & Events</li>
              <li className="style1">Sponsored trip to IIT Madras</li>
              <li className="style1">Top 3 teams as National Winners</li>
              <li className="style1">Date: TBA(During Shaastra)</li>
            </ul>
          </div>
        </div>
        <div className="actions" data-aos="fade">
          <a
            href="https://res.cloudinary.com/shaastra-apps/image/upload/v1533862128/Brochure-Spark_.tech.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="d-none"
          >
            <button className="button style3">
              <em>Download Brochure</em>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Structure;
