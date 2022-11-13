import React from 'react';
import Typewriter from "typewriter-effect";
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import heroImg from "./images/DALL_E2.png";
import './style.css';



export const Home=()=> {
  return (
    <>
      <img src={heroImg} alt="hero-img"/>
      <h1 className='home-text'>Hi, I am<span> Arya kumari </span>a</h1>
      <div className="typewrite">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Freelancer")
       .pauseFor(1000)
       .deleteAll()

       .typeString("DSA Solver")
       .pauseFor(1000)
       .deleteAll()

       .typeString("Web Developer")
       .start();
       }}
       />
    </div>
    </>
  );
}

export default Home;
