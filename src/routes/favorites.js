import React from 'react'
import '../styles/favorites.css'
import { Link } from 'react-router-dom'
import Randomize from '../randomize'

class Favorites extends React.Component {
    render() {
        return(
            <div className="favorites-section">
                <nav className="nav-bar" role="navigation">
                    <ul>
                        <span className="logo">Logo</span>
                        <span>UserName</span>
                        <li><Link to='/' className="nav-links">Logout</Link></li>
                        {/* <li><span className="nav-links">Account</span></li> */}
                        <li><Link to='/favorites' className="nav-links">Favorites</Link></li>
                    </ul>
                </nav>
                <h2 className="fave-header">My Favorites</h2>
                <div className="fave-list">
                    <ul>
                        {this.props.result.map((item, i) => (
                            <li>
                                {this.props.results} -{" "}
                                <a
                                    href="/delete"
                                    onClick={e => {
                                        e.preventDefault()
                                        this.props.removeFavorite(i)
                                    }}
                                > 
                                    X
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link to='/feedme' className="back">Back</Link>
            </div>
        )
    }
}

export default Favorites