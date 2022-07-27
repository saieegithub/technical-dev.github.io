import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
   <>
   <NavBar/>
   <Routes>
    <Route  exact path='/' element={<Home/>} />
    <Route  exact   path='/about' element={<About/>} />
    <Route  exact  path='/services' element={<Services/>} />
    <Route  exact  path='/contact' element={<Contact/>} />
    <Route  exact  path='/navbar' element={<NavBar/>} />
   
   
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
