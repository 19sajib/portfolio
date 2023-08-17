import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn, FaSchool, FaGlobe } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Dr. Sushil Kumar Singh </span>
                 and I'm working at <span className="yellow"> NIT Rourkela, India.</span>
                <br />
                <br />
                I am professionally employed as a <span className="yellow"> Food Engineering Technologist </span>in <span className="yellow"> Institute of Dairy Ingredient Processing</span> in USA before joining NIT Rourkela as an<span className="yellow"> Assistant Professor</span> in 2018.
                <br />
                <br />
                  I completed my
                  <b className="yellow"> Phd </b> in <b className="yellow"> Food Process Engineering</b> from <b className="yellow"> South Dakota State University</b>   
                  , USA in 2016 and was an R&D personnel for Vets Plus Inc., in Wisconsin, USA till early 2017.
                  <br />
                  <br />I received
                    <b className="yellow"> “Netaji Subhas-ICAR International Fellowship 2011-12” </b>
                    to pursue his PhD research in USA. I did my M.tech in 
                  <b className="yellow"> Food Process Engineering</b> from <b className="yellow"> IIT kharagpur</b> in 2011 and had received<b className="yellow"> DAAD Fellowship </b>to conduct my Master`s research in<b className="yellow"> KIT, Germany</b>.
                  <br />
                  <br />
                 
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://www.nitrkl.ac.in/FP/~singhsk/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="nitrkl"
                    >
                      <FaSchool />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://scholar.google.co.in/citations?user=GMgjO2YAAAAJ=en"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="google"
                    >
                      <FaGlobe />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="http://www.linkedin.com/in/sushil-singh-phd-6639641a"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.facebook.com/sksingh32325"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="facebook"
                    >
                      <AiFillFacebook />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About