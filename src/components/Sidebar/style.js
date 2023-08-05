import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 220px; /* Largura reduzida para deixar a sidebar mais estreita */
  height: 100%;
  padding: 20px;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4f3d9e;
  margin-bottom: 20px;
`;

export const Nav = styled.nav``;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  color: #4f3d9e;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #8b71e5;
  }
`;

export const ArrowIcon = styled.span`
  margin-left: auto;
  transform: ${({ isExpanded }) => (isExpanded ? "rotate(180deg)" : "none")};
  transition: transform 0.3s ease-in-out;
`;

export const SectionContent = styled.div`
  margin-top: 10px;
`;

export const NavItem = styled.div`
  padding: 5px 0;
  color: #ffffff; /* Texto branco para contrastar com o botão lila */
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #8b71e5;
  }
`;

export const PlusSign = styled.div`
  color: #ffffff; /* Texto branco para contrastar com o botão lila */
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  background-color: #8b71e5;
  padding: 3.2px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #703ce5;
  }
`;

export const NewProduction = styled.div`
  padding: 4px;
  color: #ffffff; /* Texto branco para contrastar com o botão lila */
  background-color: #8b71e5;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #703ce5;
  }
`;
