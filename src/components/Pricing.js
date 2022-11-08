import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Pricing = () =>{
    useEffect(()=> {
      Aos.init({duration: 2000});
    },[]);
    return (
      <>
  
      <div className='shapes'>
      <div className='triangle-bottomleft'></div>
      <div className='triangle-bottomright'></div>
      </div>
  
      <div className='abt prj'>
        <h2>Project</h2>
        <div className='prj-container'>
        <div data-aos="fade-up" className='prj-box flip-box"'>
          <div class="flip-box-inner">
            <div class="flip-box-front">
              <h2>Front Side</h2>
            </div>
            <div class="flip-box-back">
              <h2>Back Side</h2>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className='prj-box'>
          
        </div>
        <div data-aos="fade-up" className='prj-box'>
          
        </div>
        
      </div>
      </div>
  
   

       </>
    );
  };

  export default Pricing;