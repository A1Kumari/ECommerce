import React from 'react';
import {Link} from 'react-router-dom';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Skills">Skills</Nav.Link>
                <Nav.Link href="/Contact">Contact me</Nav.Link>&nbsp; &nbsp; 
                <button className='btn'>Download CV <FontAwesomeIcon icon={faDownload}/> </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default CollapsibleExample;
