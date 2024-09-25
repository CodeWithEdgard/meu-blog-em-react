import React from "react";
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className="header-menu">
      <ul>
      <li><Link to="/">{props.inicio}</Link></li>
        <li><Link to="/products">{props.produtos}</Link></li>
        <li><Link to="/about">{props.sobre}</Link></li>
      </ul>
    </div>
  );
}
export default Menu