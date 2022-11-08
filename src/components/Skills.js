import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import skillsImg from "./images/img5.png";
import './style.css';

const Skills = () =>{
  useEffect(()=> {
    Aos.init({duration: 2000});
  },[]);
  return (
    <>
    <div className='shapes'>
      <div className='triangle-topleft'></div>
      <div className='triangle-bottomleft2'></div>
    </div>

    <div className='abt'>
      <h2>Skills</h2>

      <div data-aos="fade-right" className='twosection'>
        <div className='first-child'>
          <img className='skill-img' src={skillsImg} alt="hero-img"/>
        </div>
        <div className='second-child'>

        <div className='skill-box'>
        <span className='title'>HTML</span>
        <div className='skill-bar'>
          <span className='skill-per html'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>

      <div className='skill-box'>
        <span className='title'>CSS</span>
        <div className='skill-bar'>
          <span className='skill-per css'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>

      <div className='skill-box'>
        <span className='title'>JavaScript</span>
        <div className='skill-bar'>
          <span className='skill-per javascript'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>

      <div className='skill-box'>
        <span className='title'>Nodejs</span>
        <div className='skill-bar'>
          <span className='skill-per nodejs'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>

      <div className='skill-box'>
        <span className='title'>Reactjs</span>
        <div className='skill-bar'>
          <span className='skill-per reactjs'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>

        </div>
      </div>
      
    </div>
    </>
  );
}

export default Skills;
