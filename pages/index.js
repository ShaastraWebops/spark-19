import React from "react";
import Head from "next/head";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../styles/styles.css";
import "../styles/styles.css";
import Header from "../components/header";
import Intro from "../components/intro";
import About from "../components/about";
import Terms from "../components/terms";
import Structure from "../components/structure";
import Schedule from "../components/schedule";
import Register from "../components/register";
import Footer from "../components/footer";
import AOS from "aos";

class Index extends React.Component {
  componentDidMount() {
    AOS.init({
      delay: 100,
      duration: 800
    });
  }

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Spark 2019 | Shaastra 2020</title>
        </Head>
        <Header />
        <Intro />
        <About />
        <Terms />
        <Structure />
        <Schedule />
        <Register />
        <Footer />
      </div>
    );
  }
}

export default Index;
