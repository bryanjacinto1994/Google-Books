import React from "react";
import "./JumbotronStyle.css";

function Jumbotron() {
    return (
        
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Clicky Game</h1>
                <p className="lead">Click on a character to earn points! However do not choose the same character twice.</p>

            </div>
        </div>
        
    );
}

export default Jumbotron;

