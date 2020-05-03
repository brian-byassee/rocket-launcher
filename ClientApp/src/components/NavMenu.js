//Modified from computer generated code

import React from 'react';
import { Container, Navbar, Button } from 'reactstrap';
import './NavMenu.css';

export const NavMenu = ({ isLoggedIn, firstName, setIsLoggedIn, setUser }) => {
  const handleClick = () => {
    setIsLoggedIn(false);
    setUser({ firstName: '', lastName: '', email: '', password: '', userName: '' })
  };

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <div className="title">Rocket Launcher</div>
          {isLoggedIn && (
            <div className="welcome">
              <div>Welcome {firstName}!</div>
              <Button onClick={handleClick} className="sign-out" color="info" size="sm">Sign Out</Button>
            </div>
          )}
        </Container>
      </Navbar>
    </header>
  );
};
