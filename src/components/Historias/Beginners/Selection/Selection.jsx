import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import BsButton from "react-bootstrap/Button";
import { GiGamepad, GiPencilBrush } from "react-icons/gi";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaLaptopCode, FaArrowRight } from "react-icons/fa";
import { MdWork } from "react-icons/md";

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
  .boton {
    background-color: #5a6978;
    border: none;
    height: 220px;
    width: 55%;
  }

  .main-title {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1.25px;
  }

  .img-boton {
    height: 120px;
  }

  p {
    font-weight: bold;
    letter-spacing: 1.25px;
  }
`;

const Selection = () => (
  <Container>
    <StyleDiv>
      <Row style={{ marginTop: "4rem" }}>
        <Col xs="7">
          <p className="main-title">What do you need?</p>
        </Col>
        <Col>
          <a href="/">
            <Button>&lt;Back</Button>
          </a>
        </Col>
        <Col>
          <Button primary>Next</Button>
        </Col>
      </Row>
      <Row style={{ width: "80%", margin: "auto" }}>
        <Row className="text-center" style={{ marginTop: "3rem" }}>
          <Col>
            <a href="/optimized-build">
              <BsButton className="boton">
                <Row className="img-boton">
                  <GiGamepad size="120px" />
                </Row>
                <Row>
                  <p>Gaming</p>
                </Row>
              </BsButton>
            </a>
          </Col>
          <Col>
            <a href="/optimized-build">
              <BsButton className="boton">
                <Row className="img-boton">
                  <GiPencilBrush size="90px" />
                </Row>
                <Row>
                  <p>Design</p>
                </Row>
              </BsButton>
            </a>
          </Col>
          <Col>
            <a href="/optimized-build-second">
              <BsButton className="boton">
                <Row className="img-boton">
                  <RiCodeBoxFill size="100px" />
                </Row>
                <Row>
                  <p>Coding</p>
                </Row>
              </BsButton>
            </a>
          </Col>
        </Row>
        <Row
          className="text-center"
          style={{ marginBottom: "8rem", marginTop: "3rem" }}
        >
          <Col>
            <a href="/optimized-build">
              <BsButton className="boton">
                <Row className="img-boton">
                  <FaLaptopCode size="90px" />
                </Row>
                <Row>
                  <p>Rendering</p>
                </Row>
              </BsButton>
            </a>
          </Col>
          <Col>
            <a href="/optimized-build-second">
              <BsButton className="boton">
                <Row className="img-boton">
                  <MdWork size="100px" />
                </Row>
                <Row>
                  <p>Office</p>
                </Row>
              </BsButton>
            </a>
          </Col>
          <Col>
            <a href="/optimized-build-second">
              <BsButton className="boton">
                <Row className="img-boton">
                  <FaArrowRight size="80px" />
                </Row>
                <Row>
                  <p>Other</p>
                </Row>
              </BsButton>
            </a>
          </Col>
        </Row>
      </Row>
    </StyleDiv>
  </Container>
);

export default Selection;
