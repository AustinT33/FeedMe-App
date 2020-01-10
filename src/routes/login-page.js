import React from 'react';
import LoginForm from './login-form'
import '../styles/login-page.css';
import Logo from '../pictures/feedme-logo.png'


class LoginPage extends React.Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
        onLoginSuccess: () => {}
    }
    handleLoginSuccess = () => {
      this.props.getFavorites();
      this.props.history.push('/feedme')
      this.props.loggedIn();
    }

    render() {
        return (
              <div>
                <img src={Logo} className="feedme-login" alt="feedme-logo"/>
                <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
              </div>
            )
        }
    }

export default LoginPage

