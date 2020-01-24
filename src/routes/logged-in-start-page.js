import React from 'react'
import '../styles/logged-in.css'
import Context from '../contexts/context'
import Navbar from '../components/navbar'

function randomNumber(max) {
    return Math.floor(Math.random() * max)
}

class LoggedInStartPage extends React.Component {
    static contextType = Context; // from here on, this.context is available
    constructor(props) {
    super(props);
    this.state = {
        pick: randomNumber(props.places.length),
        filteredPlaces: [...props.places],
        display: false,
        displayFave: false,
        favePick: null,
        filteredFaves: [],
      };
    }

    handlePriceFilter = (e) => {
        e.preventDefault();
        let filteredPlaces = [];
        if(e.target.value === "price"){
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
            return (
            <div className="results">
                <h3 className="result">You should eat at {place.name}!</h3>
            </div>
            )
        } else {
           return <h3 className="intro-text">Press the "Find me a restaurant" button to get started!</h3>
        } 
    }

    handleNoFavesDisplay = () => {
        if(this.context.favorites.length === 0) {
            this.setState({
                noFavesDisplay: true
            })
        } else {
            this.setState({
                noFavesDisplay: false
            })
        }
    }

    handleRandomize = (e) => { 
      e.preventDefault();
       this.setState({
        display: true,
        displayFave: false,
        pick: randomNumber(this.state.filteredPlaces.length)
       })
    }

    handleFavoritesRandomize = (e) => {
        e.preventDefault();
        this.handleNoFavesDisplay()
        this.setState({
            favePick: randomNumber(this.context.favorites.length),
            displayFave: true,
            display: false,
        })
    }


    render() {
        const random = this.state.filteredPlaces[this.state.pick]
        const faveRandom = this.state.filteredFaves[this.state.favePick]
        return(
        <div className="logged-in-main-page">
            <Navbar/>
            <h1 className="welcome">Can't Decide? Let Me Help With That!</h1>
            <div className="intro">
                {this.display(random || faveRandom)}
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
        </div>
        )
    }
}
export default LoggedInStartPage