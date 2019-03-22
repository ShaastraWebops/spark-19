import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <section id="header" className="wrapper">
      <div id="logo" data-aos="fade">
        <Navbar />
        <div>
          <img src="/static/images/logo.svg" alt="" />
        </div>
        <p>presents</p>
        <h1>SPARK</h1>
        <p>
          Make your mark, It's the <strong>spark</strong>
        </p>
        <p>Battle of India's Brightest Young Minds!</p>
      </div>
    </section>
  );
};

export default Header;
