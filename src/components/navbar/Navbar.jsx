import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../logo.png";

import { Nav , Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink , Button} from "reactstrap";
class NavBar extends Component {
    state = {
        isOpen: false
      }
      
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen});
    }  
    render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand data-testid="navbar-brand" className="navbar-brand ml-5">
          <img src={logo} alt="logo" style={{ width: 80, height: 60 }}/>
          On Time Food
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="pl-4">
                  <NavLink>Home</NavLink>
              </NavItem>
              <NavItem className="pl-4">
                  <NavLink>About</NavLink>
              </NavItem>
              <NavItem className="pl-4">
                  <NavLink>
                    <FontAwesomeIcon icon="shopping-cart" />{" "}
                    {this.props.itemTotal}
                  </NavLink>
              </NavItem>
              <a className="pl-4">
                <Button className="cart-btn">
                  Show Cart
                </Button>
              </a>
            </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
