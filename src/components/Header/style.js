import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  height: 32px;
  width: auto;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavItem = styled.a`
  color: #333;
  font-size: 14px;
  margin-left: 16px;
  text-decoration: none;

  &:hover {
    color: #666;
  }
`;
