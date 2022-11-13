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
        
        
      </div>
      
  
       </>
    );
  };

  export default Pricing;