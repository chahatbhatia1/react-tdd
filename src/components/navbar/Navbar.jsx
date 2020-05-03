import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from "reactstrap";
class NavBar extends Component {
    state = {
        isOpen: false
      }
      
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen});
    }  
    render() {
    return (
      <Navbar>
        <NavbarBrand data-testid="navbar-brand">
          <img />
          On Time Food
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} />
      </Navbar>
    );
  }
}

export default NavBar;
