import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import BsButton from "react-bootstrap/Button";
import styled from "styled-components";

const Button = styled(BsButton)`
  /* Adaptar el color en base a una prop */
  background-color: #c35aea;
  color: white;
  text-align: start;
  padding: 0.6em 1em;
  border: none;
  border-radius: 5px;
  width: 250px;
`;

const Home = () => (
  <Container
    style={{ marginBottom: "15rem", overflow: "hidden", marginLeft: "2rem" }}
  >
    <Row>
      <p
        style={{ fontSize: "2.5rem", fontWeight: "bold", letterSpacing: "1px" }}
      >
        Build your PC!
      </p>
    </Row>
    <Row>
      <p style={{ fontSize: "1.5rem", letterSpacing: "0.5px" }}>
        Just for what you need
      </p>
    </Row>
    <Row xs lg={5}>
      <Col>
        <Button className="text-start">Build for begginers</Button>
      </Col>
      <Col>
        <Button>Advanced building</Button>
      </Col>
    </Row>
  </Container>
);

export default Home;
