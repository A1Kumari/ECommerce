import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './style.css';

const About = () =>{
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
      <p data-aos="fade-right" className='abt-para'>lorem hi my name is arya kumari hi
         mt anme is arya and I am a goos girl with lots and lots of conficdence and I am good at everything nice to meet you
         CSS is capable of making all sorts of shapes. Squares and rectangles are easy, as they are the natural shapes of the web. Add a width and height and you have the exact size rectangle you need. Add border-radius and you can round that shape, and enough of it you can turn those rectangles into circles and ovals.
         CSS is capable of making all sorts of shapes. Squares and rectangles are easy, as they are the natural shapes of the web. Add a width and height and you have the exact size rectangle you need. Add border-radius and you can round that shape, and enough of it you can turn those rectangles into circles and ovals.
         CSS is capable of making all sorts of shapes. Squares and rectangles are easy, as they are the natural shapes of the web. Add a width and height and you have the exact size rectangle you need. Add border-radius and you can round that shape, and enough of it you can turn those rectangles into circles and ovals.
         CSS is capable of making all sorts of shapes. Squares and rectangles are easy, as they are the natural shapes of the web. Add a width and height and you have the exact size rectangle you need. Add border-radius and you can round that shape, and enough of it you can turn those rectangles into circles and ovals.
         CSS is capable of making all sorts of shapes. Squares and rectangles are easy, as they are the natural shapes of the we
         b. Add a width and height and you have the exact size rectangle you need. Add border-radius and you can round that shape, 
         and enough of it you can turn those rectangles into circles and ovals.
      </p>
    </div>
    </>
  );
}

export default About;
