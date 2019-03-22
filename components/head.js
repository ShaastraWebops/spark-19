import React from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/styles.css";

class Head extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      delay: 100
    });
  }
  render() {
    return (
      <Helmet>
        <title>Spark 2019 | Shaastra 2020</title>
      </Helmet>
    );
  }
}

export default Head;
