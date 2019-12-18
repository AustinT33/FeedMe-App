import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/guest-start-page.css';

function StartPageGuest() {
    return(
    <div className="start-page-guest">
        <h1 className="welcome">Can't Decide?<br/>Let Me Help With That!</h1>
        <div className="intro">Display</div>
        <div className="options">
            <select>
                <option value="price" disabled selected hidden>Price</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
            </select>
            <button className="start-button" type="button">Find Me A Restaurant!</button>
        </div>
        <div className="link">
            <Link to="/login" className="login-link">Not Logged In? Tap Here To Log In</Link>
        </div>
    </div>
    )
}
export default StartPageGuest