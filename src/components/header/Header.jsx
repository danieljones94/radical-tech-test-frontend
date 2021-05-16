import React from "react";
import radicalLogo from "../../assets/images/radicalLogo.png";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <img alt="logo" src={radicalLogo} className="radicalLogo" />
      </nav>
    );
  }
}

export default Header;
