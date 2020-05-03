import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand data-testid="navbar-brand">
          <img />
          On Time Food
        </NavbarBrand>
        <NavbarToggler />
      </Navbar>
    );
  }
}

export default NavBar;
