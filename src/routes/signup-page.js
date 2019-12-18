import React from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
    return(
        <div className="signup-page-form">
            <h1>Sign Up!</h1>
            <form>
                <input type="text" placeholder="User Name"/>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="email@example.com"/>
                <input type="password" placeholder="Password123!"/>
            </form>
            <div class="submit-button">
                <Link to="/feedme" className="create-account">Create Account</Link>
                <Link to="/login" className="back-to-login">Back</Link>
            </div>
        </div>
    )
}
export default SignupPage