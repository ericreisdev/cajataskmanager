import styled from 'styled-components';

export const WorktaskContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background-color: #f4f4f4; // Já está em um tom claro
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db; // Cinza Claro para as bordas
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
`;

export const WorktaskList = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
`;

export const WorktaskItem = styled.div`
  background-color: #fff; // Branco para o fundo
  border: 1px solid #e5e7eb; // Cinza Claro para as bordas
  margin: 10px 0;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const WorktaskDescription = styled.p`
  margin: 0;
  font-size: medium;
  font-weight: bolder;
`;

export const Button = styled.button`
  background-color: #2563eb; // Azul Brilhante para botões
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    background-color: #1e40af; // Cor de hover ajustada
  }
`;

export const EditButton = styled(Button)`

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
`;

export const CancelButton = styled(Button)`
  background-color: #6c757d; // Cinza Escuro para cancelar
  &:hover {
    background-color: #5a6268; // Cor de hover ajustada
  }
`;

export const Div = styled.div`
  // Sem alterações específicas de cor
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledQuill = styled.div`
  .quill-editor {
    min-height: 70vh; // Altura mínima inicial de 30% da altura da tela
    max-height: 100%; // Altura máxima de 100%
    overflow-y: auto; // Permite rolagem se o conteúdo exceder a altura máxima
  }
`;


//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\Worklists\Worktasks\style.js