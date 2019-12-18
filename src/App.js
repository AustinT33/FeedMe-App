import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './routes/login-page';
import HomePage from './routes/home-page';
import StartPageGuest from './routes/start-page-guest';
import SignupPage from './routes/signup-page';
import ForgotInfo from './routes/forgot-info-page';
import LoggedInStartPage from './routes/logged-in-start-page';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={HomePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/feedme-guest" component={StartPageGuest}/>
          <Route path="/create-account" component={SignupPage}/>
          {/* <Route path="/forgot-info" component={ForgotInfo}/> not needed for capstone*/}
          <Route path="/feedme" component={LoggedInStartPage}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
