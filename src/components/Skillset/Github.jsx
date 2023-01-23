import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <GitHubCalendar
        username="19sajib"
        blockSize={15}
        blockMargin={5}
        color="#ffee00"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
