import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "white",
  textDecoration: "none",
  color: "blue",
};
function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={linkStyles}
        activeStyle={{
          background: "white",
        }}
      >
        Actors
      </NavLink>
    </div>
  );
}

export default NavBar;
