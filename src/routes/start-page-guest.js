import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/guest-start-page.css';
import Logo from '../pictures/feedme-logo.png'
import AppContext from '../contexts/context';

function randomNumber(max) {
    return Math.floor(Math.random() * max)
}

class StartPageGuest extends React.Component {
    static contextType = AppContext;
    constructor(props) {
        super(props)
        this.state = {
            pick: 0,
            display: false,
            filteredPlaces: [],
        };
    }
      
    handlePriceFilter = (e) => {
        e.preventDefault();
        let filteredPlaces = [];
        if(e.target.value === 'price') {
            filteredPlaces = [...this.context.places]
        } else {
            filteredPlaces = this.context.places.filter(place => place.price === e.target.value)      
        }
        this.setState({
            filteredPlaces,
            pick: randomNumber(filteredPlaces.length)
        })
    }

    display = (place) => {
        if(this.state.display){
            if(this.state.filteredPlaces.length){
                return (
                    <>
                        <h3 className="results-display">You should eat at {place.name}!</h3>
                        <div className="place-photo" style={{backgroundImage: `url(${place.image_url})`}}/>
                        <p><a className="directions-link" href={`https://maps.google.com?daddr=${place.location.address1.replace(" ","+")}+${place.location.city.replace(" ","+")}+${place.location.state}+${place.location.zip_code}`} target="_blank" rel="noopener noreferrer">Directions</a></p>
                    </>
                )
            } else {
                return <h3 className='results-guest'>No matches for that price</h3>
            }
        } else {
            return <h3 className="results-guest">Press the "Find me a restaurant" button to get started!</h3>
        }
    }

    handleRandomize = (e) => {
      e.preventDefault();
      this.setState({
        display: true,
        pick: Math.floor(Math.random() * this.state.filteredPlaces.length)
      })
    }

    zipCodeChange = e => {
        e.preventDefault();
        this.context.getRestaurants(e.target.zipcode.value);
    }

    componentDidMount(){
        this.setState({pick: randomNumber(this.context.places.length), filteredPlaces: [...this.context.places]});
    }

    render() {
        const random = this.state.filteredPlaces[this.state.pick]
        return(
        <div className="start-page-guest">
            <Link to="/"><img src={Logo} className="feedme-guest" alt="feedme-logo"/></Link>
            <h1 className="welcome-guest">Can't Decide? Let Me Help With That!</h1>
            <form className="zipcode-text" onSubmit={e=>this.zipCodeChange(e)}>
                Zipcode: 
                <input type="text" className='zipcode-input' name='zipcode' 
                defaultValue={this.context.zipCode}/> 
                <input type="submit" value="Update" className="zipcode-submit"/>
            </form>
            <div className="options-guest">
                <select className="select-guest" onChange={e=>this.handlePriceFilter(e)} defaultValue="price">
                    <option value="price">Price</option>
                    <option value="$">$</option>
                    <option value="$$">$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$$$">$$$$</option>
                </select>
                <button onClick={this.handleRandomize} className="start-button-guest" type="button">Find Me A Restaurant!</button>
            </div>
            <div className="intro-guest">
                {this.display(random)}
            </div>
            <div className="link-guest">
               {/* <Link to="/" className="not-logged-in-link-guest">Not Logged In? Tap Here To Log In</Link>*/}
            </div>
        </div>
        )
    }
}
export default StartPageGuest