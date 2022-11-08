import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar'>
          <Container>
            <Navbar.Brand href="#home" className='diffFont'>LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">

              </Nav>
              <Nav>
                <Nav.Link href="#deets">Home</Nav.Link>
                <Nav.Link href="#deets">About</Nav.Link>
                <Nav.Link href="#deets">Skills</Nav.Link>
                <Nav.Link href="#deets">Contact me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default CollapsibleExample;
