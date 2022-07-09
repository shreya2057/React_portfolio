import "../style/navbar.css";
import React from 'react';
import { Link } from 'react-router-dom'; //Link should be rapped in curly bracket otherwise error will occur
const NavBar = () => {
    return (
        <nav className="navbar">
            <span className="logo">Logo</span>
           <div className="navigationItem">
                <a>Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <button>Contact</button>
                
           </div>
        </nav>
     );
}
 
export default NavBar;