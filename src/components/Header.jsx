import React from "react";
import Menu from "./Menu";
import image from "../assets/trendlogo.svg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header">
        
        <div className="header-logo">
          <Link to="/" ><img src={image} alt="logo . svg" /></Link>
          

        </div>
        <Menu inicio="Inicio" produtos="Produtos" sobre="Sobre"></Menu>
      </div>
    </header>
  );
};

export default Header