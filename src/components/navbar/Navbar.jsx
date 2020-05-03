import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <NavbarBrand data-testid="navbar-brand">
          <img />
          On Time Food
        </NavbarBrand>
      </Navbar>
    );
  }
}

export default NavBar;
