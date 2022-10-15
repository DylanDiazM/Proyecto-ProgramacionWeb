import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => (
  <Container className="px-0" fluid>
    <Row>
      <Col>
        <Header></Header>
      </Col>
    </Row>
    <Row>
      <Col>{props.main}</Col>
    </Row>
    <Row>
      <Col>
        <Footer></Footer>
      </Col>
    </Row>
  </Container>
);

export default Layout;
