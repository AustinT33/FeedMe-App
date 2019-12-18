import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login-page.css';

function LoginPage() {
    return (
    <div className="login-html">
        <h1 className="welcome">Login</h1>
        <form className="login-form">
            <input type="text" placeholder="User Name"/>
            <input type="password" placeholder="Password"/>
        </form>
        <div className="login-section">
            <Link to="/feedme" className="login">Login</Link>
        </div>
        <div className="login-options">
            <Link to="/create-account" className="create">Don't have an account?</Link>
            <Link to="/forgot-info" className="forgot">Forgot Login?</Link>
        </div>
    </div>
    )
}

export default LoginPage