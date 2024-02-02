import styled from 'styled-components';


export const WorklistsContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  
`;

export const Title = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #111827; // Quase Preto para o texto
`;

export const FormSection = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db; // Cinza Claro para as bordas
  color: #6b7280; // Cinza Médio para o texto
  margin: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: #2563eb; // Azul Brilhante para o botão
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  margin: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  &:hover {
    background-color: #1e40af; // Cor de hover ajustada
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545; // Vermelho para exclusão
  &:hover {
    background-color: #c82333; // Cor de hover ajustada
  }
  size-adjust: inherit;
`;

export const WorklistItem = styled.li`
  background-color: #fff; // Branco para o fundo
  border: 1px solid #e5e7eb; // Cinza Claro para as bordas
  margin: 10px;
  padding: 10px;
  list-style-type: none;
`;

export const WorklistList = styled.ul`
  padding: 0;
`;

export const Div = styled.div`
  display: flex; // Define este div como um contêiner flexível
  flex-wrap: wrap;
  justify-content: space-between; // Espaça os itens igualmente no contêiner
  align-items: center; // Centraliza os itens verticalmente
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  background-color: #f3f4f6;
  margin: 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export const RenderTask = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 67rem;
  height: 100vh;
  background-color: #f3f4f6;
  padding: 20px;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
  overflow-y: auto; // Permite rolagem vertical se o conteúdo exceder a altura
  margin-left: 10px; // Adiciona margem à direita para evitar que o conteúdo encoste na borda
`;

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\Worklists\style.js