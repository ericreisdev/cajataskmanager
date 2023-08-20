import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // Aqui você pode adicionar mais estilos globais, como fontes, cores básicas, etc.
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Arial', sans-serif; // Defina a fonte padrão que preferir
    background-color: #f4f4f4; // Um fundo suave para a página inteira
  }
`;

export const MainContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SidebarContainer = styled.div`
  width: 220px;
  background-color: #ffffff;
  padding: 20px;
  border-right: 1px solid #ddd; 

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd; // borda na parte inferior para separação visual em telas menores
  }
`;

export const TaskListContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
