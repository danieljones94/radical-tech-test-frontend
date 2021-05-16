import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    (async () => {
      const request = await fetch(process.env.REACT_APP_API_CHECK_USER_URL, {
        method: "GET",
        headers: { "Content-type": "application/json" },
        credentials: "same-origin",
      });
      const res = await request.json();
      setUserName(res.name);
    })();
  });

  const logout = async () => {
    await fetch(process.env.REACT_APP_API_LOGOUT_URL, {
      method: "POST",
      credentials: "include",
      headers: { "Content-type": "application/json" },
    });
  };

  return (
    <header className="loginMessage d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">Welcome {userName}</h1>
        <h3 className="mb-5">
          <em>You are now logged in!</em>
        </h3>
        <Link to="/" className="btn btn-primary logoutButton" onClick={logout}>
          Logout
        </Link>
      </div>
      <div className="overlay"></div>
    </header>
  );
};

export default Logout;
