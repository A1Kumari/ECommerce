import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
      <>
        <Container className='footer'>
          <Row>
            <Col>
              hi<br/>
              learn<br/>
              teach<br/>
            </Col>
            <Col xs={6}>
              hi<br/>
              learn<br/>
              teach<br/>
              (wider)</Col>
            <Col>
              hi<br/>
              learn<br/>
              teach<br/>
            </Col>
          </Row>
          
        </Container>
        <div className="love">Made with 💛 by Arya </div>
      </>
      );
}

export default Footer;
