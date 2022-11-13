import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import {fa1, fa0, faCodeFork} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Footer = () =>{
  useEffect(()=> {
    Aos.init({duration: 2000});
  },[]);
  return (
    <div  data-aos="fade-up"><br/><br/>
      <p className='quote'>“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”</p>
    <Container  className='footer'>
      <Row>
        <Col>
          Freelancer<br/>
          DSA Solver<br/>
          Web Developer<br/>
        </Col>
        <Col xs={6}>
          About<br/>
          Skills<br/>
          Project<br/>
          </Col>
        <Col>
          <FontAwesomeIcon icon={fa0}/><br/>
          <FontAwesomeIcon icon={fa1}/><br/>
          <FontAwesomeIcon icon={faCodeFork}/><br/>
        </Col>
      </Row>
      
    </Container><br/>
    <div className="love">Made with 💛 by Arya </div><br/>
  </div>
  );
}

export default Footer;