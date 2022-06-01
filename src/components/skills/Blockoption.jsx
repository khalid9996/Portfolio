import React from 'react'
import './blockoption.css'
import { Link } from 'react-router-dom'



const Blockoption = () => {

  
  return (
    <>
      <div className='list'>
      <ul>
        <Link to='/skills/coding' ><li className='block zid5'><h5>CODING</h5></li></Link>
        <Link to='/skills/webdevelopment' ><li className='block zid4'><h5>WEB DEVELOPMENT</h5></li></Link>
        <Link to='/skills/graphicsdesign' ><li className='block zid3'><h5>GRAPHICS DESIGN</h5></li></Link>
        <Link to='/skills/videography' ><li className='block zid2'><h5>VIDEOGRAPHY</h5></li></Link>
        <Link to='/skills/3d' ><li className='block zid1'><h5>3D</h5></li></Link>
      </ul>
      </div>

      
    </>
  )
}

export default Blockoption