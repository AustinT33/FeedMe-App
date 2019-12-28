import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/logged-in.css';
import Randomize from '../randomize'

class LoggedInStartPage extends React.Component {
    state = {
        result: '',
        addFavorite: results => {
            this.setState({
                result: [...this.state.result, results]
            })
        },
        removeFavorite: index => {
            this.setState({
                result: this.state.result.filter((results, i) => i !== index)
            })
        }
      };

    handleRandomize = (e) => {
      e.preventDefault();
      this.setState({
        result: <Randomize />
      })
    }
    render() {
        return(
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
                <div className="extra-option">
                    <button className="fave-randomize" type="button">Randomize By Favorites!</button>
                </div>
        </div>
        )
    }
}
export default LoggedInStartPage