import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TokenService from './services/token-service'
import LoginPage from './routes/login-page';
import HomePage from './routes/home-page';
import StartPageGuest from './routes/start-page-guest';
// import SignupPage from './routes/signup-page';
// import ForgotInfo from './routes/forgot-info-page';
import LoggedInStartPage from './routes/logged-in-start-page';
import Favorites from './routes/favorites';
import AppContext from './contexts/context';
import config from './config'

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
  // removeFavorite = id=>{
  //   this.setState({favorites:this.state.favorites.filter(fave=>fave.id!==id)})
  // }


//working and removing from favorites_list table
  handleDeleteFave = id => {
    const request = {
      method: 'DELETE',
    }
    fetch(`${config.API_ENDPOINT}/favorites/${id}`, request).then((res) => {
      return res.text()
    })
    .then((res) => {
      this.setState({favorites: this.state.favorites.filter(fave=>fave.id!==id)})
      console.log('deleted fave')
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
    fetch(`${config.API_ENDPOINT}/restaurants`)
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
    //fetch all favorites from the database
    fetch(`${config.API_ENDPOINT}/favorites`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
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

    postFave(title, category, price){
      return fetch(`${config.API_ENDPOINT}/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          category,
          price,
        }),
      })
      //refactor add favorites function into .then res
      .then((res) => res.json())
      .then(res => {
        this.setState({
          favorites: res.body
        })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        });
      })
    })
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
                return (<div className="loading">Loading</div>)
              } else {
              return <StartPageGuest {...routeProps} places={this.state.places}/>}}}/>
            <Route path="/feedme" render={ (routeProps) => {
              if(this.state.places.length === 0){
                return ( <div>Loading</div>) 
              } else {
              return <LoggedInStartPage {...routeProps} places={this.state.places} addFavorite={this.addFavorite}/>
              }}}/>
            <Route path="/favorites" render={(routeProps) => {
              return <Favorites {...routeProps} removeFavorite={this.handleDeleteFave}/>
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
