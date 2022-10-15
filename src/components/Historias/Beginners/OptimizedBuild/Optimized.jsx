import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import BsButton from "react-bootstrap/Button";
import { IoMdCart } from "react-icons/io";

const Button = styled(BsButton)`
  /* Adaptar el color en base a una prop */
  background-color: ${(props) => (props.primary ? "#c35aea" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-weight: ${(props) => (props.primary ? "500" : "bold")};

  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  width: 200px;
  letter-spacing: 0.7px;
`;

const StyleDiv = styled.div`
  .main-title {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1.25px;
  }
`;

const Optimized = () => (
  <Container fluid>
    <StyleDiv>
      <Row style={{ marginTop: "4rem" }}>
        <Col xs="7">
          <p className="main-title">Your optimized build!</p>
        </Col>
        <Col>
          <a href="/">
            <Button>&lt;Back</Button>
          </a>
        </Col>
        <Col>
          <Button primary>
            <IoMdCart size="20px" />
            Checkout
          </Button>
        </Col>
      </Row>
    </StyleDiv>
  </Container>
);

export default Optimized;
