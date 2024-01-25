// Em ./components/Home.jsx

import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HomeContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
`;

const StyledNav = styled.nav`
  margin-top: 20px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  margin: 10px 0;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  &:hover {
    text-decoration: underline;
  }
`;



const Home = () => {
  return (
    <HomeContainer>
      <Title>Bem-vindo à página inicial!</Title>
      <StyledNav>
        <StyledList>
          <StyledListItem><StyledLink to="/workspaces">Workspaces</StyledLink></StyledListItem>
          {/* Inclua links para worklists e worktasks se necessário */}
        </StyledList>
      </StyledNav>
    </HomeContainer>
  );
};

export default Home;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Home\index.jsx