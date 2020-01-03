import React from 'react'
import '../styles/favorites.css'
import { Link } from 'react-router-dom'
import Context from '../contexts/context'


class Favorites extends React.Component {
    static contextType = Context;
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
                    <ul className="fave-form">
                        { this.context.favorites.length ? 
                       this.context.favorites.map((fave, i) => ( 
                           <li className="fave-li">
                               {fave.title}<button className="delete" onClick={()=>this.props.removeFavorite(fave.id)}>X</button>
                               </li>
                       )) : <h2 className="noFaves">No Favorites To Display</h2>}
                        
                           
                    </ul>
                </div>
                <div className="back-btn">
                    <Link to='/feedme' className="back">Back</Link>
                </div>
            </div>
        )
    }
}

export default Favorites