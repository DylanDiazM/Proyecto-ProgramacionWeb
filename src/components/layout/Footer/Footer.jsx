import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/";
import ListGroup from "react-bootstrap/ListGroup";

const FooterContainer = styled.footer`
  * {
    background-color: transparent;
  }

  .footer-middle {
    background-image: url(https://cdn.shopify.com/s/files/1/0408/5792/7834/files/Footer_Background_1920x.jpg?v=1614336455);
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 1.5rem;
  }

  .footer-bottom {
    width: 100%;
    font-size: 0.8125em;
    padding-top: 4rem;
    text-align: center;
    bottom: 0;
  }

  .container {
    margin: auto;
    padding: 0;
  }

  .ad {
    font-size: calc(1.175rem + 0.3vw);
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-bottom: 2rem;
  }

  button,
  button:hover,
  button:focus {
    background-color: #c35aea;
    border: none;
    margin-left: 10px;
    font-weight: bold;
    font-size: 0.9rem;
    letter-spacing: 2.5px;
    margin-bottom: 3rem;
    margin-top: 0.5rem;
  }

  .form-control {
    box-sizing: border-box;
    background-color: transparent;
    padding: 10px;
    width: 70%;
    border: 1.5px solid white;
    border-radius: 2px;
    color: white;
    margin-bottom: 3rem;
    margin-top: 0.5rem;
  }

  .list-group-item {
    color: white;
    border: none;
    margin-bottom: 0.5rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <div className="footer-middle">
      <Container fluid>
        <Row>
          <Col xs={5} md="5 ">
            <p className="ad">
              Sign up to our newsletter for the latest PC news.
            </p>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Email" />

              <Button size="md">SUBSCRIBE</Button>
            </Form>
            <IconContext.Provider value={{ size: "1.5625rem" }}>
              <FaFacebookF />
              <FaTwitter style={{ marginLeft: "30px", marginRight: "30px" }} />
              <FaInstagram />
            </IconContext.Provider>
          </Col>
          <Col md="2">
            <ListGroup>
              <ListGroup.Item>Build your PC</ListGroup.Item>
              <ListGroup.Item>Why Redux</ListGroup.Item>
              <ListGroup.Item>Support</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="2">
            <ListGroup>
              <ListGroup.Item>Good.</ListGroup.Item>
              <ListGroup.Item>Better.</ListGroup.Item>
              <ListGroup.Item>Best.</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="2">
            <ListGroup>
              <ListGroup.Item>Terms & Conditions</ListGroup.Item>
              <ListGroup.Item>Privacy Policy</ListGroup.Item>
              <ListGroup.Item>Refund Policy</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        {/* Footer bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            Copyright &copy; {new Date().getFullYear()} Build Redux. All Rights
            Reserved.
          </p>
        </div>
      </Container>
    </div>
  </FooterContainer>
);

export default Footer;
