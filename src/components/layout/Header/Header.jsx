import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGamepad, FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => (
  <Container fluid>
    <Row>
      <Col>
        <Navbar variant="dark" expand="lg">
          <Container fluid>
            {/* Ícono */}
            <Navbar.Brand as={Link} to="/">
              <FaGamepad size="4rem" />
            </Navbar.Brand>
            {/* / */}
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mx-auto " navbarScroll>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/support">
                  Support
                </Nav.Link>
                <Nav.Link as={Link} to="/review">
                  Reviews
                </Nav.Link>
                <Nav.Link as={Link} to="/ranking">
                  Ranking
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className="me-2" as={Link} to="/about">
                  <FaSearch size="1.2rem" />
                </Nav.Link>
                <Nav.Link className="me-2" as={Link} to="/about">
                  <FaUser size="1.8rem" color="white" />
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  <FaShoppingCart size="1.8rem" color="white" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
    </Row>
  </Container>
);

export default Header;
