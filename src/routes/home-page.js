import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home-page.css';

function HomePage() {
    return(
    <div className="home-page-html">
        <div className="home-logo">Logo goes here</div>
            <h1 className="welcome">Welcome to FeedMe</h1>
        <Link to="/login" className="login-button">Login</Link>
        <Link to="/feedme-guest" className="guest-button" >Continue as guest</Link>
    </div>
    )
}
export default HomePage