// Login.jsx
import React from 'react';
import '../assets/styles/login.css'; // Add your styling here

const Login = () => {
    return (
      <div className="login-container">
        <div className="login-left">
          <div className="login-content">
            <img src="https://stackcentre.in/images/stack%20logo%20bk.png" alt="Logo" className="login-logo" />
            <h2>Welcome back !</h2>
            <p>Enter to get unlimited access to data & information.</p>
            <form className="login-form">
              <div className="input-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" placeholder="Enter your mail address" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password *</label>
                <input type="password" id="password" placeholder="Enter password" required />
              </div>
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="#" className="forgot-password">Forgot your password?</a>
              </div>
              <button type="submit" className="login-btn">Log In</button>
            </form>
            
          </div>
        </div>
        <div className="login-right">
          <img src="https://media.gettyimages.com/id/1487305910/photo/code-html-cgi-stock-photo.jpg?s=612x612&w=gi&k=20&c=N7dD52-qPhCcizDhwSjR3FkTnXnZNo8l2-CjLqT7lJ8=" alt="Background pattern" className="login-background" />
        </div>
      </div>
    );
  };
  
  export default Login;