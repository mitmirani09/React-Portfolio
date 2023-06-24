import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import astronautHelmet from '../assets/astronaut-helmet.png'
import '../styles/nav.css'
const Nav = () => {
  return (
    <div>
      <img src={astronautHelmet} alt="astronautHelmet" />
    </div>
  )
}

export default Nav
