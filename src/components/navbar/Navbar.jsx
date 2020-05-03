import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
class NavBar extends Component {
    state = {
        isOpen: false
      }
 
    render() {
    return (
      <Navbar>
        <NavbarBrand data-testid="navbar-brand">
          <img />
          On Time Food
        </NavbarBrand>
        <NavbarToggler />
        <Collapse isOpen={this.state.isOpen} />
      </Navbar>
    );
  }
}

export default NavBar;
