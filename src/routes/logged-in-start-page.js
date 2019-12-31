import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/logged-in.css';
import places from '../store'
import Context from "../contexts/context";

class LoggedInStartPage extends React.Component {
    static contextType = Context;
    constructor() {
    super();
    this.state = {
        pick: Math.floor(Math.random() * places.length),
        filteredPlaces: [],
        display: false,
        selectValue: '', touched: false,
      };
    }

    handlePriceFilter = (e) => {
        e.preventDefault();
        let filteredPlaces = [];
        if(e.target.value === "price"){
            filteredPlaces = [...places]
        } else {
            filteredPlaces = places.filter(place => place.price === e.target.value)
        }
        this.setState({filteredPlaces})
    }

    display = (place) => {
        if(this.state.display){
            console.log(place);
            return (
            <>
                <h3>You should eat at {place.name}!</h3>
                <button 
                    onClick={() => this.context.addFavorite(place)} 
                    className="faves">Add to Favorites?
                </button>
            </>
            )
        } else {
           return <h3>Press the "Find me a restaurant" button to get started!</h3>
        }
    }

    handleRandomize = (e) => {
      e.preventDefault();
       this.setState({
        display: true,
        pick: Math.floor(Math.random() * this.state.filteredPlaces.length)
       })
    }

    componentDidMount(){
        this.setState({
            filteredPlaces: [...places]
        });
    }
    render() {
        const random = this.state.filteredPlaces[this.state.pick]
        return(
        <Context.Provider value={this.state}>
        <div className="logged-in-main-page">
            <nav className="nav-bar" role="navigation">
                <ul>
                    <span className="logo">Logo</span>
                    <span>UserName</span>
                    <li><Link to='/' className="nav-links">Logout</Link></li>
                    {/* <li><span className="nav-links">Account</span></li> */}
                    <li><Link to='/favorites' className="nav-links">Favorites</Link></li>
                </ul>
            </nav>
            <h1 className="welcome">Can't Decide? Let Me Help With That!</h1>
            <div className="intro">
                {this.display(random)}
            </div>
            <div className="options">
                <select onChange={e=>this.handlePriceFilter(e)} defaultValue="price">
                    <option value="price" >Price</option>
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                </select>
                <button onClick={this.handleRandomize} className="start-button" type="button">Find Me A Restaurant!</button>
            </div>
                <div className="extra-option">
                    <button className="fave-randomize" type="button">Randomize By Favorites!</button>    
                </div>
        </div>
        </Context.Provider>
        )
    }
}
export default LoggedInStartPage