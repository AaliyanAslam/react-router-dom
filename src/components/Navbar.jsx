import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{gap : "20px", display: "flex",  backgroundColor: "gray", color: "white" , borderRadius: "10px" , padding : "25px" , }}>
        <Link to={""}>Home</Link>
        <Link to={"about"}>About</Link>
        <Link to={"services"}>Services</Link>
        <Link to={"contact"}>Contact</Link>


    </div>
  )
}

export default Navbar