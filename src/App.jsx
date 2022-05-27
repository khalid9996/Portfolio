import React from 'react';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';

import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';

function App(){
    return ( 
    <>
        
        <Router>
        <Nav/>
        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        </Routes>
        <Footer/>
        </Router>

        {/* <Portfolio/>
        <Testimonials/> */}
        
        

        

        
        
        
        


    </> 
    );
}

export default App