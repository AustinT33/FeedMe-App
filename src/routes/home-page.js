import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-page.css';
import Logo from '../pictures/feedme-logo.png'

function HomePage() {
    return(
    <div className="home-page-html">
        <img src={Logo} className="feedme-logo" alt="feedme-logo"/>
        <h1 className="welcome-text">Welcome to Feed Me</h1>
        <Link to="/login" className="login-button">Login</Link>
        <Link to="/feedme-guest" className="guest-button" >Continue as guest</Link>
    </div>
    )
}
export default HomePage