import React from 'react';
import images3 from '../src/images/images3.jpg'
import Common from './Common';

const About = () =>{
    return(
       <>
            <Common name='Welcome to About page'imgsrc={images3 } visit="/contact"btname="Contact Now"/>
        </>
    );
};
export default About;