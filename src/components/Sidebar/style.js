import styled, { css } from "styled-components";

const ButtonStyle = css`
  padding: 4px;
  color: #ffffff;
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


export const Container = styled.div`
  background-color: #ffffff;
  width: 220px;
  height: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
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

export const DeleteButton = styled.button`
  background-color: #4f3d9e;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 4px;
  margin-left: 5px; // Adicionei uma margem à esquerda para espaçar do título
  visibility: hidden;  // ou 'opacity: 0;' para esconder
  transition: visibility 0.3s ease-in-out;  // ou 'transition: opacity 0.3s ease-in-out;'

  &:hover {
    background-color: #cc0000;
  }
`;

export const EditFolder = styled.button`
  background-color: #4f3d9e;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 4px;
  margin-left: 5px; // Adicionei uma margem à esquerda para espaçar do título

  &:hover {
    background-color: #4f3d9e;
  }
  visibility: hidden;  // ou 'opacity: 0;' para esconder
  transition: visibility 0.3s ease-in-out;  // ou 'transition: opacity 0.3s ease-in-out;'
`;


export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #4f3d9e;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionContent = styled.div`
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;

    &:hover ${DeleteButton} {
      visibility: visible;  // O ícone ficará visível quando o mouse estiver sobre a div
    }
  }

  &:hover ${EditFolder},
  &:hover ${DeleteButton} {
    visibility: visible;  // ou 'opacity: 1;' para mostrar
  }


`;

export const NavItem = styled.div`
  padding: 5px 0;
  color: #4f3d9e;

  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #8b71e5;
  }
`;

export const PlusSign = styled.div`
  ${ButtonStyle}
  display: flex;
  align-items: center;
`;

export const NewProduction = styled.div`
  ${ButtonStyle}
`;




