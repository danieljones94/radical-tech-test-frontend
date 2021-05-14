import React, { useEffect, useState } from "react";
import "./Logout.css";

const Logout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    (async () => {
      const request = await fetch("http://localhost:5000/api/user", {
        method: "GET",
        headers: { "Content-type": "application/json" },
        credentials: "same-origin",
      });
      console.log(request);

      const res = await request.json();
      console.log(res);
      setUserName(res.name);
    })();
  });

  return (
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">Welcome {userName}</h1>
        <h3 className="mb-5">
          <em>You are now logged in!</em>
        </h3>
        <button className="btn btn-primary logoutButton" type="submit">
          Logout
        </button>
      </div>
      <div className="overlay"></div>
    </header>
  );
};

export default Logout;
