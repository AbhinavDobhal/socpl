import React, { Component } from "react";
import Navitem from "./Navitem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };
  render() {
    return (
      <nav className="main-nav float-right d-none d-lg-block">
        <ul>
          <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
          <Navitem
            item="About Us"
            tolink="/about"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Services"
            tolink="/services"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Clients"
            tolink="/clients"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Team"
            tolink="/team"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Jobs"
            tolink="/jobs"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Contact Us"
            tolink="/contact"
            activec={this.activeitem}
          ></Navitem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
