import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav , Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from "reactstrap";
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
        <Collapse isOpen={this.state.isOpen} >
            <Nav >
              <NavItem>
                  <NavLink>Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink>About</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink>
                    <FontAwesomeIcon icon="shopping-cart" />
                  </NavLink>
              </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
