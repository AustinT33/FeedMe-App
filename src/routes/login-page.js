import React from 'react';
import LoginForm from './login-form'
import '../styles/login-page.css';


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
                <h2 className='login-header'>Login</h2>
                <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
              </div>
            )
        }
    }

export default LoginPage

