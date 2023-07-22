import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100vh;
  flex-grow: 1;
`;

export const Logo = styled.img`
  height: 32px;
  width: auto;
  margin-bottom: 16px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-evenly;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 8px;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const NavItem = styled.a`
  color: #333;
  font-size: 14px;
  margin-bottom: 8px;
  text-decoration: none;
`;

export const ArrowIcon = styled.span`
  margin-left: 4px;
  transform: ${(props) => (props.isExpanded ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease-in-out;
`;

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 8px 0;
  width: 100%;
`;

export const PlusSign = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
