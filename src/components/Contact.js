import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './style.css';


const Contact = () =>{
  useEffect(()=> {
    Aos.init({duration: 2000});
  },[]);
  return (
   <>

    <div className='splitsection  contact-form-main'>
      <div data-aos="fade-right" className='first-child quote'>
        <p>“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”</p>
      </div>
      <div data-aos="fade-left" className='second-child'>
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

            <input type="submit" value="send"/>
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
