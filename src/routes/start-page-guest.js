import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/guest-start-page.css';
import places from '../store'

class StartPageGuest extends React.Component {
    state = {
        result: '',
        pick: Math.floor(Math.random() * places.length),
        display: false,
      };
      

    display = (place) => {
        if(this.state.display){
            return <h3>You should eat at {place.name}!</h3>
        } else {
            return <h3>Press the "Find me a restaurant" button to get started!</h3>
        }
    }

    handleRandomize = (e) => {
      e.preventDefault();
      this.setState({
        display: true,
        pick: Math.floor(Math.random() * places.length)
      })
    }
    render() {
        const random = places[this.state.pick]
        return(
        <div className="start-page-guest">
            <h1 className="welcome">Can't Decide?<br/>Let Me Help With That!</h1>
            <div className="intro">
                {this.display(random)}
            </div>
            <div className="options">
                <select>
                    <option value="price" disabled selected hidden>Price</option>
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