import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 220px;
  height: 100vh;
  background-color: #f3f4f6;
  padding: 20px;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
  overflow-y: auto; // Permite rolagem vertical se o conteúdo exceder a altura
  margin-right: 10px; // Adiciona margem à direita para evitar que o conteúdo encoste na borda
`;


export const WorkspaceContainer = styled.div`
  padding: 20px;
 
  background-color: #f3f4f6;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-weight: bold;
`;

export const WorkspaceList = styled.ul`
  list-style: none;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-weight: bold;
`;

export const WorkspaceItem = styled.li`
 
  display: flex; // Isso define o Flexbox
  justify-content: space-between; // Isso distribui os itens igualmente ao longo da linha
  align-items: center; // Isso alinha os itens verticalmente no centro
   background-color: #fff;
  margin: 10px 0;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-weight: bold;
`;

export const WorkspaceTitle = styled.h1`
  font-size: 24px;
  color: #111827;
  font-weight: bold;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Button = styled.button`
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px; // Reduzir o padding
  cursor: pointer;
  font-size: medium; // Ajustar o tamanho da fonte se necessário
  &:hover {
    background-color: #4768e4;
  }
  font-family: Arial, Helvetica, sans-serif;
  max-width: 90%; // Garantir que o botão não exceda a largura da Sidebar
  overflow: hidden; // Esconder o conteúdo que exceda
  text-overflow: ellipsis; // Adicionar reticências se o texto for muito longo
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545; // Vermelho para exclusão
  &:hover {
    background-color: #c82333; // Cor de hover ajustada
  }
  size-adjust: inherit;
`;

export const StyledLink = styled(Link)`
  color: #2563eb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  font-family: Arial, Helvetica, sans-serif;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  color: #6b7280;
  margin-right: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-weight: bold;
`;

// Agora, ao usar o componente Workspaces, você pode incluir o <Sidebar> junto com o <WorkspaceContainer>.
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\style.js