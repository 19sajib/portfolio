import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn, FaSchool, FaGlobe } from "react-icons/fa";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://www.nitrkl.ac.in/FP/~singhsk/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaSchool />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://scholar.google.co.in/citations?user=GMgjO2YAAAAJ=en"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaGlobe />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="http://www.linkedin.com/in/sushil-singh-phd-6639641a"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://www.facebook.com/sksingh32325"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color contact-social-icons"
                    >
                      <AiFillFacebook />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social