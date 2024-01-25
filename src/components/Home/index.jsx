// Em ./components/Home.jsx

import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo à página inicial!</h1>
      <nav>
        <ul>
          <li><Link to="/workspaces">Workspaces</Link></li>
          {/* Inclua links para worklists e worktasks se necessário */}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Home\index.jsx