import styled, { css } from "styled-components";

const ButtonStyle = css`
  padding: 8px 12px;
  color: #ffffff;
  background-color: #3a57e8;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #eceffd;
    color: #4768e4;
    transform: translateY(-2px); 
  }
`;


export const Container = styled.div`
  background-color: #ffffff;
  width: 220px;
  height: 100%;
  padding: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  
  color: #4f3d9e;
  margin-bottom: 20px;
`;

export const Nav = styled.nav`
margin-top: 20px;
border-radius: 8px;
 overflow: hidden;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 15px;
  background: linear-gradient(145deg, #e1e5ea, #ffffff);
  
  color: #3a57e8;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #95999e;
    background: linear-gradient(145deg, #dce0e5, #f1f3f5); 
  }
`;

export const ArrowIcon = styled.span`
  margin-left: auto;
  transform: ${({ isExpanded }) => (isExpanded ? "rotate(180deg)" : "none")};
  transition: transform 0.3s ease-in-out;
`;

export const DeleteButton = styled.button`
  background-color: #3a57e8;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 4px;
  margin-left: 5px; // Adicionei uma margem à esquerda para espaçar do título
    transition: visibility 0.3s ease-in-out;  // ou 'transition: opacity 0.3s ease-in-out;'

  &:hover {
    background-color: #cc0000;
  }
`;

/*const ButtonStyle = css`
padding: 4px;
color: #cceafe;
background-color: #3a57e8;

cursor: pointer;
border-radius: 5px;
text-align: center;
margin-bottom: 10px;
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: #eceffd;
  color: #4768e4;
}
`;

*/

export const EditFolder = styled.button`
  background-color: #3a57e8;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 4px;
  margin-left: 5px; // Adicionei uma margem à esquerda para espaçar do título

  &:hover {
    background-color: #4f3d9e;
  }
  
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
  padding: 10px 15px; // Aumentar o padding para melhor ergonomia
  color: #4f3d9e;
  border-radius: 8px; // Arredondar as bordas do item
  transition: all 0.3s ease-in-out;
  margin: 5px 0; // Adicionar uma pequena margem vertical entre os itens

  &:hover {
    color: #8b71e5;
    background-color: #f1f3f5; // Adicionar uma cor de fundo sutil no hover
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




