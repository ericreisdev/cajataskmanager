import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white; // Branco mantido
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db; // Cinza Claro para as bordas
  color: #6b7280; // Cinza Médio para o texto
  margin-bottom: 10px;
  width: 80%;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  background-color: #2563eb; // Azul Brilhante para o botão
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  &:hover {
    background-color: #1e40af; // Cor de hover ajustada
  }
`;

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\WorkspacesForm\style.js