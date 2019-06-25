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
        Shaastra, IIT Madras proudly presents SPARK, 
        our annual flagship event for school students! 
        SPARK consists of the Spark Junior Quiz conducted all over 
        India and the prestigious national level Spark Junior Conference,
        held at IIT Madras. 
        </p>
        <p className="style1">
        The Spark Junior Quiz is a unique quizzing experience 
        conducted all across the country, encompassing 
        the brightest minds. Compete against the creme 
        de la creme, and emerge victorious!! 
        </p>
        <p className="style3">Who can participate?</p>
        <p className="style1">
        In order to participate, you must belong to 
        classes 8 to 12. Each team must have 2 participants each.
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
