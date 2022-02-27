import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.scss";


export default function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">CHOOSE EVENT TYPE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => props.select('THEATER')}>PSTheater</Nav.Link>
            <Nav.Link onClick={() => props.select('TOUR')}>PSTour</Nav.Link>
            <Nav.Link onClick={() => props.select('TWINSTAGE')}>PSTwinStage</Nav.Link>
            <Nav.Link onClick={() => props.select('TUNE')}>PSTune</Nav.Link>
            <Nav.Link onClick={() => props.select('TALE')}>PSTale</Nav.Link>
            <Nav.Link onClick={() => props.select('TREASURE')}>PSTreaure</Nav.Link>
            <Nav.Link onClick={() => props.select('TRUST')}>PSTrust</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};