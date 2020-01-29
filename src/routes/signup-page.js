import React from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../services/auth-api-service'
import TokenService from '../services/token-service';

class SignupPage extends React.Component {
    static defaultProps = {
        onSignupSuccess: () => {}
    }

    state = { error: null }

    handleSubmit = (e) => {
        e.preventDefault();
        const { full_name, user_name, password } = e.target

        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value,
        })
        .then(user => {
            full_name.value = ''
            user_name.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
        })
        .then(user => {
            TokenService.saveAuthToken()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        const { error } = this.state
        return(
            <div className="signupForm">
                <form
                    className='RegistrationForm'
                    onSubmit={this.handleSubmit}
                >
                    <div role="alert">{error && <p className="error">{error}</p>}</div>
                    <div className="full_name">
                        <label htmlFor="RegistrationForm_full_name" aria-label="full name"/>
                        <input name="full_name" type="text" placeholder="Full Name" id="Registration_full_name" required/>
                    </div>
                    <div className="user_name">
                        <label htmlFor="RegistrationForm_user_name" aria-label="user name"/>
                        <input name="user_name" type="text" placeholder="Username" id="Registration_user_name" required/>
                    </div>
                    <div className="password">
                        <label htmlFor="RegistrationForm_password" aria-label="password"/>
                        <input name="password" type="text" placeholder="Password" id="Registration_password" required/>
                    </div>
                </form>
                <div className="submit-button">
                    <Link to="/feedme" onSubmit={this.handleSubmit} aria-label="submit" className="create-account">Create Account</Link>
                    <Link to="/" className="back-to-login">Back</Link>
                </div>
            </div>
        )
    }
}
export default SignupPage