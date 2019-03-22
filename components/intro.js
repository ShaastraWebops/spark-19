import React from "react";

const Intro = () => {
  return (
    <section id="intro" className="wrapper style1">
      <div className="title" data-aos="fade-up">
        Introduction
      </div>
      <div className="wrapper-container">
        <p className="style1">Shaastra, IIT Madras proudly presents</p>
        <p className="style2" data-aos="fade" style={{ fontSize: "3em" }}>
          SPARK
        </p>
        <p className="style1">
          SPARK is Shaastra’s flagship event for school students, consisting of
          the Spark Junior Quiz conducted all over India and the prestigious
          national level Spark Junior Conference.
        </p>
        <p className="style1">
          Spark Junior Quiz is a unique quizzing journey that covers over 20
          cities across the country. Take on India’s brightest young minds to
          come on top!
        </p>
        <p className="style3">Who can participate?</p>
        <p className="style1">
          All students of class 8 to 12 are eligible to participate.
        </p>
        <p className="style3">Where?</p>
        <p className="style1">
          Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Maharashtra, Karnataka,
          Odisha, Gujarat, Delhi and West Bengal
        </p>
        <br />
        <div className="actions" data-aos="fade">
          <button
            className="button style1 large"
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
        </div>
      </div>
    </section>
  );
};

export default Intro;
