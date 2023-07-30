import React from "react";
import Logo from "../img/logo.png";
import "../css/header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-children">
        <img className="logo" src={Logo} alt="logo" />
        <h1>Sistema Financeiro</h1>
      </div>
    </header>
  );
};

export default Header;
