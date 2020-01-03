import React from 'react'
import { Link } from 'react-router-dom';
import './styles/navbar.css'

function Navbar(props) {
    return(
        <nav className="nav-bar" role="navigation">
        <ul>
            <span className="logo">Logo</span>
            <span>testUser</span>
            <li><Link to='/' className="nav-links">Logout</Link></li>
            {/* <li><span className="nav-links">Account</span></li> */}
            <li><Link to='/favorites' className="nav-links">Favorites</Link></li>
        </ul>
    </nav>
    )
}
export default Navbar