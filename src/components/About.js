import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './style.css';

export const About = () =>{
  useEffect(()=> {
    Aos.init({duration: 2000});
  },[]);
  return (
    <>
  
    <div className='shapes'>
    <div className='triangle-bottomleft'></div>
    <div className='triangle-bottomright'></div>
    </div>

    <div className='abt'>
   
      <h2>About</h2>
      <p data-aos="fade-right" className='abt-para'>I am Arya Kumari a Web developer and a cp lover. The little I know about myself is that I am interested in becoming a data analyst. I am always enthusiastic enough to check for all the new technologies and keep myself updated on the tech world.
I have little experience in the industry sector as a web developer as I have done an internship in a startup company and I am always trying my best to learn and be on top.
I am an enthusiastic and hard-working girl with a keen interest in the tech sector. I completed my schooling
       from Pragati public school, Delhi, and currently, I am pursuing a bachelor's in technology in the field of Information technology from Indraprastha university.
                        I am proficient in Java and Python Programming Language and Front-end Web Development. Additionally, I am skilled at building websites and
                         creating web apps using HTML, CSS and JS, and database management tools.
                        Apart from academics, I am inclined towards graphic designing and reading. And in my free time, I like to explore more of the 
                        tech world like cloud computing and data analysis.
                    
      </p>

      <div className='info'>
        <h6><strong>Date of birth :</strong>16 April 1990<br/></h6>
        <h6><strong>Spoken Languages :</strong>English - French - Spanish<br/></h6>
        <h6><strong>Nationality :</strong>German<br/></h6>
        <h6><strong>Interest :</strong>Music, Reading, journey<br/></h6>
      </div>
    </div>
    </>
  );
}

export default About;
