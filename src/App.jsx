import React from 'react';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';

import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router , Route, Routes, Navigate} from 'react-router-dom';

function App(){
    return ( 
    <>
        
        <Router>
        <Nav/>
        
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Portfolio" element={<Navigate to="/"/>}/>
        
        </Routes>
        <Footer/>
        </Router>

    </> 
    );
}

export default App