import React from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Prj1 from "./images/prj1.png";
import Prj2 from "./images/prj2.jpg";

import Prj3 from "./images/prj9.jpg";
import Prj4 from "./images/prj8.jpg";
import Prj5 from "./images/prj3.jpg";
import Prj6 from "./images/prj4.jpg";
import Prj7 from "./images/prj5.jpg";
import Prj8 from "./images/prj6.jpg";
import Prj9 from "./images/prj7.jpg";

const Box = () => {
  return (
    <>
    <div data-aos="fade-up">
      <div className='card prj-box' >
        <div className='imgBox'>
          <img src={Prj3} alt="hero-img" className='heroImg'/>
        </div>
        <div className='content'>
          <h5>Health care website</h5>
          <p>A website to help handicapped and poor waged people by providing them with healthcare</p>
        </div>
      </div>

      <div className='card prj-box' >
        <div className='imgBox'>
          <img src={Prj2} alt="hero-img" className='heroImg'/>
        </div>
        <div className='content'>
          <h5>Photo Gallery</h5>
          <p>A place where you can see multiple images and enjoy a lot of features for accessing a image</p>
        </div>
      </div>

      <div className='card prj-box' >
        <div className='imgBox'>
          <img src={Prj5} alt="hero-img" className='heroImg'/>
        </div>
        <div className='content'>
          <h5>Phone Features</h5>
          <p>A website with good amount of js code to showcase different phones and its features</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Box;
