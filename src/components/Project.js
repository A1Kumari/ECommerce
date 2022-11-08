import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './style.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Project() {
  const Pricing = () =>{
    useEffect(()=> {
      Aos.init({duration: 2000});
    },[]);
  }
  return (
    <>
    
    </>
  );
}

export default Project;
