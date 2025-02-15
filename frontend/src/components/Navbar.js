import React from 'react';
import '../index.css'; 
import { Link } from 'react-router-dom';


 const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="logo">my<span className="highlight-logo">Music🎧</span></div>
            
            <ul className="nav-links">
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register" className="highlight">Register</Link></li>
            </ul>
        </nav>
        </>
    );
};


export { Navbar };
