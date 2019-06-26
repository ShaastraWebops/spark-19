import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <section id="header" className="wrapper">
      <div id="logo" data-aos="fade">
        <Navbar />
        <p>
          <span>DOES YOUR GREY MATTER??</span>
        </p>
        <br />
        <div>
          <img src="/static/images/logo.svg" alt="" />
        </div>
        <p>presents</p>
        <h1>SPARK</h1>
        <p>
          Make your mark, It's the <strong>spark</strong>
        </p>
        <div className="row justify-content-center mt-5">
          <div className="col-9">
            <p>
              Its that time of the year again - Compete against the brightest
              minds of the country and earn the chance to go on an all expenses
              paid trip to IIT Madras!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
