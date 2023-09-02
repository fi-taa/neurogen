import React from "react";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src="logo.png" alt="Logo" />
        ChatNGAI
      </div>
      <div className="nav-user">User</div>
    </div>
  );
}

export default Nav;
