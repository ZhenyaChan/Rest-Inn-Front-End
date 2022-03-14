import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoSearchCircleSharp } from "react-icons/io5";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div>
            <Link className="logo" to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/properties">Vacation Properties</Link>
            </li>
            <li className="dropdown">
              <Link to="/register" className="dropbtn">Join Us</Link>
              <div className="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </div>
            </li>
            <div className="box">
            <form >
              <input type="text" class="input" name="txt" onmouseout="document.search.txt.value = ''" />
            </form>
            <i><IoSearchCircleSharp /></i>
          </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;