import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login-page.css';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
        }
    }

    handleUserName = (e) => {
        console.log(this.state.username)
        this.setState({ username: e.target.value })
    }

    addUserNameToNav = (e) => {
        console.log(this.state.username)
        e.preventDefault();
        this.setState({
            username: this.handleUserName()
        })
    }

    render() {
        return (
            <div className="login-html">
                <h1 className="welcome">Login</h1>
                <form className="login-form">
                    <input 
                        type="text" placeholder="User Name" name="username" 
                        value={this.state.username} onChange={this.handleUserName}
                    />
                    <input type="password" placeholder="Password"/>
                </form>
                    <Link  to="/feedme" className="login" onSubmit={this.addUserNameToNav}>Login</Link>
                    {/* <Link to="/create-account" className="create">Don't have an account?</Link>        */}
                    {/* <Link to="/forgot-info" className="forgot">Forgot Login?</Link> */}
            </div>
            )
        }
    }

export default LoginPage

