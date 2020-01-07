import React from 'react'

const Loading = () => (
    <div>
        <img className="fa fa-spinner fa-spin"/> Picking...
        {/* <img src="./hamburger-gif.gif" className="loading" alt="loading-icon"/> */}
    </div>
)

export default Loading


//old login page code

<div className="login-html">
<h1 className="welcome">Login</h1>
<form className="login-form">
    <div role="alert">{error && <p>{error}</p>}</div>
    <input required
        type="text" placeholder="Username" name="user_name" 
    />
    <input required type="password" placeholder="Password"/>
</form>
    <button onClick={this.handleSubmitJwtAuth} to="/feedme" className="login">Login</button>
    {/* <Link to="/create-account" className="create">Don't have an account?</Link>        */}
    {/* <Link to="/forgot-info" className="forgot">Forgot Login?</Link> */}
</div>