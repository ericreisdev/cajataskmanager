import React from 'react';
import { Container, Logo, Nav, NavItem } from './style';

const Header = ({ logoUrl, navItems }) => {
  return (
    <Container>
      <Logo src={logoUrl} alt="Logo" />
      <Nav>
        {navItems.map((item, index) => (
          <NavItem key={index}>{item}</NavItem>     
        ))}
      </Nav>
    </Container>
  );
};

export default Header; 
