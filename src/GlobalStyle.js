import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;

export const MainContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f2f2f2;
`;

export const TaskListContainer = styled.div`
  flex: 1;
  padding: 20px;
`;
