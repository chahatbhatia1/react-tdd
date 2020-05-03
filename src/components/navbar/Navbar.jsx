import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand data-testid="navbar-brand">
          <img />
          On Time Food
        </NavbarBrand>
        <NavbarToggler />
        <Collapse />
      </Navbar>
    );
  }
}

export default NavBar;
