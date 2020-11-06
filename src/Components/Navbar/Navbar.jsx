import React from "react";
import "./Navbar.scss";
import Logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark">
        <NavLink className="navbar-brand ml-5" to="/">
          <img src={Logo} height="60" alt="store" />
        </NavLink>

        <ul className="navbar-nav mb-2 mb-lg-0">
          <li
            className="nav-item text-uppercase ml-md-5"
            style={{ fontSize: "1.5rem" }}
          >
            <NavLink exact className="nav-link" aria-current="page" to="/">
              Product
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0 ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart">
              <button className="btn btn-outline-primary">
                <FontAwesomeIcon icon={faCartPlus} /> Cart
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
