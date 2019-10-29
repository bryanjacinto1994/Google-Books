import React from "react";
// import App from "../../App";

function NavBar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">

                <div>Clicky Game</div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="nav">
                        <li className="nav-item" >
                            Score:  |
                        </li>
                        <li className="nav-item" >
                            | Top Score: 
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar
