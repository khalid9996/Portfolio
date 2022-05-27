import React from 'react'
import Blockoption from './Blockoption'
import Coding from './Coding'
import './skills.css'
import { Route, Routes } from 'react-router-dom'

const Skills = () => {
  return (
      <>
    <div className='heading'>
      <h5>Compétences</h5>
      <h2>Skills</h2>
    </div>
    <Blockoption/>
        <Routes>
        <Route path='/skills/coding' element={<><Blockoption/><Coding/></>}/>
        </Routes>

    </>
  )
}

export default Skills