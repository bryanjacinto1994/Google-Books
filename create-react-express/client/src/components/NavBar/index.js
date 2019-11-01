
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"

const styles = {
  title: {
    fontSize: '40px',

  }

};


function Navbar() {
  return (
    
    <div className='container' style={{ textAlign: "center" }}>
      <br></br>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{borderRadius: 20}}>
        <div className='row'>
          <div className="col-md-1">
            <p className="navbar-brand" style={styles.title}>Google Books</p>
          </div>
          </div>
          <div className="col-md-6"></div>
          
        <ul className="navbar-nav mr-auto">
          <li className="nav-item " >
            <a className="nav-link" href="/">Search For A Book</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/saved">Saved Books</a>
          </li>
        </ul>

      </nav>

    </div>
  )
}

export default Navbar;