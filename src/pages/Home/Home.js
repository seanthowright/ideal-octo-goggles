import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
//import { Col, Row, Container } from "../../components/Grid";

class Home extends Component {

  render() {
    return (
      <div>
        <Navbar />
            <h1>Hello World!</h1>
        <Footer />
      </div>
    );
  }
}

export default Home;