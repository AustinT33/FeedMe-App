import React from 'react';
//import { Link } from 'react-router-dom';
import '../styles/logged-in.css';

function LoggedInStartPage() {
    return(
        <div className="logged-in-main-page">
            <nav className="nav-bar" role="navigation">
                <ul>
                    <span className="logo">Logo</span>
                    <span>UserName</span>
                    <li><span className="nav-links">Logout</span></li>
                    <li><span className="nav-links">Account</span></li>
                    <li><span className="nav-links">Favorites</span></li>
                </ul>
            </nav>
            <h1 className="welcome">Can't Decide? Let Me Help With That!</h1>
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
                <div className="extra-option">
                    <button className="fave-randomize" type="button">Randomize By Favorites!</button>
                </div>
        </div>
    )
}
export default LoggedInStartPage