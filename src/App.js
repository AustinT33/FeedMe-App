import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TokenService from './services/token-service'
import LoginPage from './routes/login-page';
import StartPageGuest from './routes/start-page-guest';
// import SignupPage from './routes/signup-page';
// import ForgotInfo from './routes/forgot-info-page';
import LoggedInStartPage from './routes/logged-in-start-page';
import Favorites from './routes/favorites';
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
    }
  }

  handleAddFave = place => {
    const present = this.state.favorites.find(fave => fave.title === place.title)
    if(!present) {
      const request = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify({restaurant: place.id})
      }
      fetch(`${config.API_ENDPOINT}/api/favorites`, request).then((res) => {
        return res.json()
      })
      .then((res) => {
        
          this.setState({favorites:[...this.state.favorites,place]})
          alert('Added To Favorites.')
      })
    } else {
      alert('Already a favorite');
    }
  }

  handleDeleteFave = id => {
    const request = {
      method: 'DELETE', 
      headers: { 
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    }
    fetch(`${config.API_ENDPOINT}/api/favorites/${id}`, request).then((res) => {
      return res.text()
    })
    .then((res) => {
      this.setState({favorites: this.state.favorites.filter(fave=>fave.id!==id)})
      alert('Removed From Favorites.')
    })
  }

//   handleTimer = () => {
//     if(this.state.isLoading){
//         console.log('loading?')
//         setTimeout(() => {
//             this.setState({isLoading: true})
//         }, 3000) 
//     }
// }
 
  componentDidMount(){
    // fetch all of the restaurants from the db
    fetch(`${config.API_ENDPOINT}/api/restaurants`)
      .then(res => res.json())
      .then(res => {
          this.setState({
            isLoaded: true,
            places: res
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    this.getFavorites();
    this.setState({loggedIn: window.localStorage.getItem(config.TOKEN_KEY)})
  }

    

    getFavorites = () => {
    //fetch all favorites from the database
    return fetch(`${config.API_ENDPOINT}/api/favorites`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
        .then(res => res.json())
        .then(res => {
          this.setState({
            isLoaded: true,
            favorites: res
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
      
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <BrowserRouter>
          <div className="App">
            {/* <Route exact path="/" component={HomePage}/> */}
            <Route exact path="/" render={(routeProps) => {
            return <LoginPage {...routeProps} getFavorites={this.getFavorites}  loggedIn={() => this.setState({loggedIn: true,})}/>
            }}/>
            <Route path="/feedme-guest" render={ ( routeProps ) => {
              if(this.state.places.length === 0){
                return (<div className="loading-status">Loading</div>)
              } else {
              return <StartPageGuest {...routeProps} places={this.state.places}/>}}}/>
            <Route path="/feedme" render={ (routeProps) => {
              if(this.state.places.length === 0 || TokenService.getAuthToken()){
                return ( <div className="loading-status">Loading...<br/>Or<br/>You are not logged in.</div>) 
              } else {
              return <LoggedInStartPage {...routeProps} toggle={this.toggleWindow} places={this.state.places} addFavorite={this.handleAddFave}/>
              }}}/>
            <Route path="/favorites" render={(routeProps) => {
              if(TokenService.getAuthToken()) {
                return (<div className="loading-status">You are not logged in.</div>)
              } else {
              return <Favorites {...routeProps} removeFavorite={this.handleDeleteFave}/>
              }}}/>
            {/* <Route path="/create-account" component={SignupPage}/> not needed for capstone*/}
            {/* <Route path="/forgot-info" component={ForgotInfo}/> not needed for capstone*/}
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}
export default App;
