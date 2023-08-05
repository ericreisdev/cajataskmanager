import { createGlobalStyle, styled } from "styled-components";

// Estilo global para resetar as margens e paddings padrão
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// Container principal que envolve a aplicação
export const MainContainer = styled.div`
  display: flex;
`;

// Container da sidebar
export const SidebarContainer = styled.div`
  width: 220px; /* Largura estreita para ficar de acordo com o estilo da sidebar */
  background-color: #ffffff;
  padding: 20px;
`;

// Container da lista de tarefas (parte principal)
export const TaskListContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
`;

