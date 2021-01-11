import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';

import {Link} from 'react-router-dom'

export default class Header extends Component {
    constructor(props){
        super();
        this.state={isOpen:false,};
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({isOpen:!this.state.isOpen});
    }
    
    render() {
        const {isOpen}=this.state;
        return (
            <div>
            <Navbar color="light" light expand="md">
            <div className="container">
              <NavbarBrand><Link className="navbar-brand" to="/">LOGO</Link></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <Link className="nav-link" to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/Task">Taks</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/User">User</Link>
                  </NavItem>
                  
                </Nav>
              </Collapse>
              </div>
            </Navbar>
          </div>
        )
    }
}