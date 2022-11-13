import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './style.css';


const Contact = () =>{
  useEffect(()=> {
    Aos.init({duration: 2000});
  },[]);
  return (
   <>

    <div className='splitsection  contact-form-main'>
      <div data-aos="fade-up">
        <h2>Get in touch !</h2>
        <h6 className='availablity'>Always available for freelancing if the right project comes along, <br/> Feel free to contact me.</h6>
        
      </div>
      <div data-aos="fade-up" className='second-child'>
      <div className="Wrapper">

      <div className='contact-container'>
        <div className='contact-form'>
        <h2 className='common-heading'>Contact Me</h2>
          <form action='https://formspree.io/f/mqkjgral' method="POST" className='contact-inputs'>
            <input 
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required/>

            <input 
              type="text"
              name="mail"
              placeholder="mail id"
              autoComplete="off"
              required/>

            <textarea 
              name='message'
              cols="30"
              rows="6"
              cutoComplete="off"
              required></textarea>
            <button className='btn'>Send</button>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>

    
   </>   
    
  );
}

export default Contact;
