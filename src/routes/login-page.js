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
      this.props.history.push('/feedme')
    }

    render() {
        return (
              <div>
                <h2 className='welcome'>Login</h2>
                <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
              </div>
            )
        }
    }

export default LoginPage

