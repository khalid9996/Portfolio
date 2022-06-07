import React from 'react';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


import Blockoption from './components/skills/Blockoption'

import Coding from './components/skills/myskills/Coding'
import Webdevelopment from './components/skills/myskills/Webdevelopment'
import Graphicsdesign from './components/skills/myskills/Graphicsdesign'
import Videography from './components/skills/myskills/Videography'
import ThreeD from './components/skills/myskills/ThreeD'



import { BrowserRouter as Router , Route, Routes, Navigate} from 'react-router-dom';
import Wave from './components/footer/Wave';

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
        

        <Route path='/skills/coding' element={<><Blockoption/><Coding/></>}/>
        <Route path='/skills/webdevelopment' element={<><Blockoption/><Webdevelopment/></>}/>
        <Route path='/skills/graphicsdesign' element={<><Blockoption/><Graphicsdesign/></>}/>
        <Route path='/skills/videography' element={<><Blockoption/><Videography/></>}/>
        <Route path='/skills/3d' element={<><Blockoption/><ThreeD/></>}/>


        </Routes>
        <Wave/>
        <Footer/>
        </Router>

    </> 
    );
}

export default App