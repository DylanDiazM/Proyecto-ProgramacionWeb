import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Acordion from "./Acordion/Acordion";

const RankingBuild = () => (
  <Container fluid style={{ marginLeft: "2.5rem" }}>
    <Row>
      <Col>
        <p
          style={{
            fontSize: "1.8rem",
            marginTop: "4rem",
            marginLeft: "0.6rem",
            marginBottom: "2rem",
          }}
        >
          Ranking best sellers builds
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Acordion />
      </Col>
    </Row>
  </Container>
);

export default RankingBuild;
