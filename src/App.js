import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './routes/login-page';
import HomePage from './routes/home-page';
import StartPageGuest from './routes/start-page-guest';
// import SignupPage from './routes/signup-page';
// import ForgotInfo from './routes/forgot-info-page';
import LoggedInStartPage from './routes/logged-in-start-page';
import Favorites from './routes/favorites';
import AppContext from './contexts/context';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      favorites: [],
      isLoaded: false,
      error: null,
      places: [],
    }
  }

  addFavorite = place=>{
    const present = this.state.favorites.find(fave => fave.id === place.id)
    if(!present) {
    this.setState({favorites:[...this.state.favorites,place]})
    }
  }
  removeFavorite = id=>{
    this.setState({favorites:this.state.favorites.filter(fav=>fav.id!==id)})
  }
 
  componentDidMount(){
    // fetch all of the favorites from the db
    // const placeUrl = 'http://localhost:8000/restaurants';
    // fetch(placeUrl)
    //   .then(res => res.json())
    //   .then(res => {
    //       this.setState({
    //         isLoaded: true,
    //         places: res
    //       });
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //     )
      }
   
      
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/feedme-guest" render={ ( routeProps ) => {
              if(this.state.places.length === 0){
                return (<div>Loading</div>)
              } else {
              return <StartPageGuest {...routeProps} places={this.state.places}/>}}}/>
            <Route path="/feedme" render={ (routeProps) => {
              if(this.state.places.length === 0){
                return ( <div>Loading</div>) 
              } else {
              return <LoggedInStartPage {...routeProps} places={this.state.places} addFavorite={this.addFavorite}/>
              }}}/>
            <Route path="/favorites" render={(routeProps) => {
              return <Favorites {...routeProps} removeFavorite={this.removeFavorite}/>
              }}/>
            {/* <Route path="/create-account" component={SignupPage}/> not needed for capstone*/}
            {/* <Route path="/forgot-info" component={ForgotInfo}/> not needed for capstone*/}
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}
export default App;
