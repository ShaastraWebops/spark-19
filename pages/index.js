import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Intro from "../components/intro";
import About from "../components/about";
import Terms from "../components/terms";
import Structure from "../components/structure";
import Schedule from "../components/schedule";
import Register from "../components/register";
import Footer from "../components/footer";

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
          <link rel="stylesheet" href="/static/styles/styles.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/static/styles/custom-aos.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" />
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
