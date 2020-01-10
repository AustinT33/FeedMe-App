import React from 'react'
import '../styles/favorites.css'
import { Link } from 'react-router-dom'
import Context from '../contexts/context'
import Navbar from '../components/navbar'


class Favorites extends React.Component {
    static contextType = Context;
    render() {
        return(
            <div className="favorites-section">
                <Navbar/>
                <h2 className="fave-header">My Favorites</h2>
                <div className="fave-list">
                    <ul className="fave-form">
                        { this.context.favorites.length ? 
                       this.context.favorites.map((fave, i) => ( 
                           <li className="fave-li" key={i}>
                               {fave.title}<button className="delete" onClick={()=>this.props.removeFavorite(fave.id)}>X</button>
                               </li>
                       )) : <h2 className="noFaves-list">No Favorites To Display</h2>}
                        
                           
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