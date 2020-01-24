import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import TokenService from '../services/token-service';
import NavLogo from '../pictures/feedme-logo-nav.png'
import Context from '../contexts/context'
import jwt from 'jsonwebtoken'


class Navbar extends React.Component {
    static contextType = Context;

    render() {
        let userName = this.context.loggedIn ? jwt.decode(TokenService.getAuthToken()).user_name : 'not logged in'
    return(
        <nav className="nav-bar" role="navigation">
        <ul>
            <img src={NavLogo} className="nav-logo" alt="nav-feedme-logo"/>
            <span>{userName}</span>
            <li><Link onClick={TokenService.clearAuthToken} to='/' className="logout-link">Logout</Link></li>
        </ul>
    </nav>
    )
}
}
export default Navbar