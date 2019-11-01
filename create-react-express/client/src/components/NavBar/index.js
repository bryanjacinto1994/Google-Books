
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="container" >
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <p className="navbar-brand">Google Books</p>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/saved">Saved</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>)
}

export default Navbar;