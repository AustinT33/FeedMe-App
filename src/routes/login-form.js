import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'
import '../styles/login-page.css'

class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = { error: null }
  
      handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target
    
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
      }

      //dummy user info = username: usertest1 password: passtest1 or dummyuser #2 = username: usertest2 password: passtest2
      render() {
          const { error } = this.state
          return (
              <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
                  <div role="alert">
                      {error && <p className="error">{error}</p>}
                  </div>
                <div className="user_name">
                    <input required name="user_name" id="LoginForm_user_name" placeholder="Username"/>
                </div>
                <div className="password">
                    <input required name="password" type="password" id="LoginForm_password" placeholder="Password"/>
                </div>
                <button className="login-btn" type="submit">Login</button>
                <Link to="/" className="back-link">Back</Link>
              </form>
          )
      }
}

export default LoginForm