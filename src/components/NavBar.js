import React from "react";

function NavBar(props) {
  return (
    <nav>
      <a href={props.home}>Home</a>
      <a href={props.about}>About</a>
    </nav>
  );
}

export default NavBar;
