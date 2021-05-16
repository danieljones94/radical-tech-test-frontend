import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import "./SignUp.css";

const SignUp = () => {
  const [Name, setUserName] = useState("");
  const [Email, setUserEmail] = useState("");
  const [PassWord, setUserPassWord] = useState("");
  const [registered, setRegistered] = useState(false);

  const submit = async (event) => {
    console.log(process.env);
    event.preventDefault();
    await fetch(process.env.REACT_APP_API_SIGNUP_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        Email,
        Name,
        PassWord,
      }),
    }).then(setRegistered(true));
  };

  if (registered) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup-form-2">
      <h3>Sign-up</h3>
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
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            onChange={(e) => setUserPassWord(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <button className="btnSubmit" type="submit">
            Sign-up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
