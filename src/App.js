import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import TokenService from './services/token-service'
//import LoginPage from './routes/login-page';
import StartPageGuest from './routes/start-page-guest';
// import SignupPage from './routes/signup-page';
// import ForgotInfo from './routes/forgot-info-page';
//import Favorites from './routes/favorites';
import LoggedInStartPage from './routes/logged-in-start-page';
import AppContext from './contexts/context';
import config from './config'
import './styles/app.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      favorites: [],
      isLoaded: false,
      error: null,
      places: [],
      loggedIn: false,
      zipCode: 90210,
      getRestaurants: (zipcode) => {
        this.setState({places:[]},()=>{
          fetch(`${config.API_ENDPOINT}/api/restaurants?zip_code=${zipcode}`)
            .then(res => res.json())
            .then(res => {
                this.setState({
                  isLoaded: true,
                  places: res,
                  zipCode: zipcode
                });
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }
      );
    }
  }
  }
 
  componentDidMount(){
    // fetch all of the restaurants from the db
    this.state.getRestaurants(90210);
   
  }
      
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" render={ ( routeProps ) => {
              if(this.state.places.length === 0){
                return (<div className="loading-status">Loading...</div>)
              } else {
              return <StartPageGuest {...routeProps} />}}}/>
            <Route path="/feedme" render={ (routeProps) => {
              if(this.state.places.length === 0) {
                return ( <div className="loading-status">Loading...</div>) 
              } else {
              if(!this.state.loggedIn) {
                return ( <div className="loading-status">You are not logged in.</div> )
              } else {
              return <LoggedInStartPage {...routeProps} toggle={this.toggleWindow} places={this.state.places} addFavorite={this.handleAddFave}/>
              }}}}/>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}
export default App;
