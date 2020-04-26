import React from 'react';
import { Collapse, Container, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export const NavMenu = ({ isLoggedIn, firstName }) => (
  <header>
    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
      <Container>
        <NavbarBrand tag={Link} to="/">
          Rocket Launcher
        </NavbarBrand>
        {isLoggedIn && (
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" navbar>
            <ul className="navbar-nav flex-grow">
              <div>Welcome {firstName}!</div>
            </ul>
          </Collapse>
        )}
      </Container>
    </Navbar>
  </header>
);
