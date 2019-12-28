import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/guest-start-page.css';
import GuestRandomize from '../guest-randomize'

class StartPageGuest extends React.Component {
    state = {
        result: ''
      };
    handleRandomize = (e) => {
      e.preventDefault();
      this.setState({
        result: <GuestRandomize />
      })
    }
    render() {
        return(
        <div className="start-page-guest">
            <h1 className="welcome">Can't Decide?<br/>Let Me Help With That!</h1>
            <div className="intro">
                <h3>{this.state.result}</h3>
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