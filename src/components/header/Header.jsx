import React from "react";
import radicalLogo from "../../assets/images/radicalLogo.png";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-light">
        <img src={radicalLogo} className="radicalLogo" />
      </nav>
    );
  }
}

export default Header;
