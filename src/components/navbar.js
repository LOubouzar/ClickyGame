import React from "react";

const Navbar = props => (
    <nav className="navbar">
        <a className="navbar-brand" href="/" id="logo"><h3>Legend of Zelda Clicky Game</h3></a>
        <h5 className="navbar-end" id="counters">Score: {props.score} | Top score: {props.topScore} </h5>
    </nav>
)

export default Navbar;