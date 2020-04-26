import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export const Layout = (props) => (
  <div>
    <NavMenu isLoggedIn={props.isLoggedIn} firstName={props.firstName}/>
    <Container>{props.children}</Container>
  </div>
);
