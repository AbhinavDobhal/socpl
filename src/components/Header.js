import React, { Component } from "react";
import Navbar from "./Navbar";
import logo from "../assets/img/logo.png";

function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container">
        <div className="logo float-left">
          <a href="#intro" className="scrollto">
            <img src={logo} alt="" className="img-fluid" />
          </a>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
