import React from 'react';
import Typewriter from "typewriter-effect";
import heroImg from "./images/DALL_E2.png";
import './style.css';



function Home() {
  return (
    <>
      <img src={heroImg} alt="hero-img"/>
      <h1>Hi👋, I am</h1>
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
