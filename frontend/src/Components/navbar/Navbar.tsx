import React, { useState } from 'react'
import { Menu } from "@mui/icons-material"
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar:React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className="navbar">
        <div className="brand">Joy's Blog</div>
        <div className="Menu icon" onClick={toggleMenu}>
            <Menu/>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/articles">Articles</Link></li>
            <li><Link to="/articles/add">Add Articles</Link></li>
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar
