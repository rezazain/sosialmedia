import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Nextsosial</h3>
          <span className="loginDesc">
            Connect with friend and the around you on Nextsosial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
