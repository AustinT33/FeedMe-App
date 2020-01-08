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

    handleSubmitBasicAuth = (e) => {
        e.preventDefault()
        
        const { user_name, password } = e.target
    
        TokenService.saveAuthToken(
          TokenService.makeBasicAuthToken(user_name.value, password.value)
        )
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      }
    
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
            console.log(res.authToken)
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
      }

      render() {
          const { error } = this.state
          return (
              <form className='login-form' onSubmit={this.handleSubmitJwtAuth}>
                  <div role='alert'>
                      {error && <p className='error'>{error}</p>}
                  </div>
                <div className='user_name'>
                    <input required name='user_name' id='LoginForm_user_name' placeholder='Username' value="usertest1"/>
                </div>
                <div className='password'>
                    <input required name='password' type='password' id='LoginForm_password' placeholder='Password' value="passtest1"/>
                </div>
                <button className='login' type='submit'>Login</button>
                <Link to='/' className='login'>Back</Link>
              </form>
          )
      }
}

export default LoginForm