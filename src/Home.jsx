import React from 'react';
// import web from'../src/images/web.gif';
import images1 from '../src/images/images1.png'

import {NavLink} from 'react-router-dom';
import Common from './Common';


const Home = () =>{
    return(
        <>
           <Common name='Grow your business with'imgsrc={images1} visit="/services"btname="Get Started"/>
        </>
    );
};
export default Home;