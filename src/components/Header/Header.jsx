import React from "react";
import OIG3 from "../../assets/OIG3.jpg";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <div className="header-container">
      <div className="image-container">
        <img src={OIG3} alt="Descripción de la imagen" />
      </div>

      <div className="nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ListNews">List news</Link>
          </li>
          <li>
            <Link to="/Form">Form</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
