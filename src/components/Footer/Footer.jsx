import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn, FaSchool, FaGlobe } from "react-icons/fa";
import logo from "../../assets/sLogo.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            
          </Col>
          <Col md="4" className="footer-copywright">
            <span>Copyright © {year}</span>
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://www.nitrkl.ac.in/FP/~singhsk/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="nitrkl"
                >
                  <FaSchool />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://scholar.google.co.in/citations?user=GMgjO2YAAAAJ=en"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="google"
                >
                  <FaGlobe />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/sushil-singh-phd-6639641a"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/sksingh32325"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="facebook"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer