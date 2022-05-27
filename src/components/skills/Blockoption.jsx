import React from 'react'
import './blockoption.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'





const Blockoption = () => {

  const [currentState, setcurrentState] = useState("#");
  console.log(currentState);
  return (
    <>
      <div className='list'>
      <ul>
        <Link to='#coding' onClick={()=> {setcurrentState("#coding")}} ><li className='block zid5'><h5>CODING</h5></li></Link>
        <Link to='#webdevelopment' onClick={()=> {setcurrentState("#webdevelopment")}} ><li className='block zid4'><h5>WEB DEVELOPMENT</h5></li></Link>
        <Link to='#graphicsdesign' onClick={()=> {setcurrentState("#graphicsdesign")}} ><li className='block zid3'><h5>GRAPHICS DESIGN</h5></li></Link>
        <Link to='#videography' onClick={()=> {setcurrentState("#videography")}} ><li className='block zid2'><h5>VIDEOGRAPHY</h5></li></Link>
        <Link to='#3d' onClick={()=> {setcurrentState("#3d")}} ><li className='block zid1'><h5>3D</h5></li></Link>
      </ul>
      </div>

      
    </>
  )
}

export default Blockoption