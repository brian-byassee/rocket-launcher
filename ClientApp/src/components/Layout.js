//Modified from computer generated code
import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export const Layout = props => (
  <div>
    <NavMenu
      isLoggedIn={props.isLoggedIn}
      firstName={props.firstName}
      setUser={props.setUser}
      setIsLoggedIn={props.setIsLoggedIn}
    />
    <Container>{props.children}</Container>
  </div>
);
