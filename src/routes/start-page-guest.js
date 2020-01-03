import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/guest-start-page.css';

function randomNumber(max) {
    return Math.floor(Math.random() * max)
}

class StartPageGuest extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        pick: randomNumber(props.places.length),
        display: false,
        filteredPlaces: [...props.places],
      };
    }
      
    handlePriceFilter = (e) => {
        e.preventDefault();
        let filteredPlaces = [];
        if(e.target.value === 'price') {
            filteredPlaces = [...this.props.places]
        } else {
            filteredPlaces = this.props.places.filter(place => place.price === e.target.value)      
        }
        this.setState({
            filteredPlaces,
            pick: randomNumber(filteredPlaces.length)
        })
    }

    display = (place) => {
        if(this.state.display){
            return <h3 className="results">You should eat at {place.title}!</h3>
        } else {
            return <h3 className="results">Press the "Find me a restaurant" button to get started!</h3>
        }
    }

    handleRandomize = (e) => {
      e.preventDefault();
      this.setState({
        display: true,
        pick: Math.floor(Math.random() * this.state.filteredPlaces.length)
      })
    }

    render() {
        const random = this.state.filteredPlaces[this.state.pick]
        return(
        <div className="start-page-guest">
            <h1 className="welcome">Can't Decide?<br/>Let Me Help With That!</h1>
            <div className="intro">
                {this.display(random)}
            </div>
            <div className="options">
                <select onChange={e=>this.handlePriceFilter(e)} defaultValue="price">
                    <option value="price">Price</option>
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                </select>
                <button onClick={this.handleRandomize} className="start-button" type="button">Find Me A Restaurant!</button>
            </div>
            <div className="link">
                <Link to="/login" className="login-link">Not Logged In? Tap Here To Log In</Link>
            </div>
        </div>
        )
    }
}
export default StartPageGuest