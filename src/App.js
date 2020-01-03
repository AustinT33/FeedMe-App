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
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/feedme-guest" component={StartPageGuest}/>
            <Route path="/feedme" render={ (routeProps) => {
              return <LoggedInStartPage {...routeProps} addFavorite={this.addFavorite}/>
              }}/>
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
