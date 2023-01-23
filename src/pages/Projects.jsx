import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Lift-Buddy"
              description="It's an Online Ride Sharing Site, Designed with a responsive frontend, alongside an admin panel using React, and Material‑UI. Implemented Google Maps API to give user google map directions. Users can perform CURD operations on profiles and posts. Users can confirm and cancel a ride from a post. Users can message each other after confirming the ride. Also, Users can reset their password. Backend running on Node Express Server. Used MongoDB for the database."
              ghLink="https://github.com/19sajib/lift-buddy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Social Media"
              description="A responsive interface has been implemented using Reactjs and CSS where users can perform CRUD activities on their profiles and posts. Users can follow other users and like or dislike following users’ posts. Users get suggestions for following other users. User only sees post from their following users. Also, users only can chat with their following users. The backend was driven by Nodejs and Expressjs."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="Built REST API using Nodejs and Expressjs to perform CRUD operation for the user's profile, product, and admin panel.
              Designed interface for the user with the ability to perform CRUD operation with the product. Also, completed the full purchase process. Designed an admin panel with the ability to CRUD users and products, also used a chart to show statistics. Implemented stripe API to receive Payment from customers. MongoDB and Firebase have been used for the database."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="Implemented RESTful API server for blogging application using Nodejs & Expressjs. Fetched data from the backend API server and displayed it on a responsive interface that is built using React, Redux, and styled‑components."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 Project where An Ethereum Smart Contract has been created using Solidity and has implemented the feature of sending Ethereum where users can interact with their Metamask Wallet."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Project Krypto is a Web 3 Project where An Ethereum Smart Contract has been created using Solidity and has implemented all the functionality of Kickstart. Users can interact with their Metamask Wallet and transfer their Ethereum."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects