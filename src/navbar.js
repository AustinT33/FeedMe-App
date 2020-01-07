import React from 'react'
import { Link } from 'react-router-dom';
import './styles/navbar.css'
import TokenService from './services/token-service';


function Navbar() {
    return(
        <nav className="nav-bar" role="navigation">
        <ul>
            <span className="logo">Logo</span>
            <span>testUser</span>
            <li><Link onClick={TokenService.clearAuthToken()} to='/' className="nav-links">Logout</Link></li>
            {/* <li><span className="nav-links">Account</span></li> */}
            <li><Link to='/favorites' className="nav-links">Favorites</Link></li>
        </ul>
    </nav>
    )
}
export default Navbar