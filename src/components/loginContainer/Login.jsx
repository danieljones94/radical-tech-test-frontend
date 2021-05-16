import React, { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [Email, setUserEmail] = useState("");
  const [PassWord, setUserPassWord] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    await fetch(process.env.REACT_APP_API_LOGIN_URL, {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        Email,
        PassWord,
      }),
    });

    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="login-form-2">
      <h3>Sign-in</h3>
      <form onSubmit={submit} className="form-container">
        <div className="form-group">
          <input
            onChange={(e) => setUserEmail(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setUserPassWord(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btnSubmit" type="submit">
            Sign-in
          </button>
        </div>
      </form>
      <Link to="/signup" className="signUpLink">
        I need to sign-up!
      </Link>
    </div>
  );
};

export default Login;
