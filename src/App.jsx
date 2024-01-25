import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Workspaces from "./components/Workspaces";
import Home from "./components/Home";
import Worklists from "./components/Workspaces/Worklists";
import Worktasks from "./components/Workspaces/Worklists/Worktasks";
// Importe seus componentes aqui

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workspaces" element={<Workspaces />} />
        <Route
          path="/workspaces/:workspaceId/worklists"
          element={<Worklists />}
        />
        <Route
          path="/workspaces/:workspaceId/worklists/:worklistId/worktasks/:worktasksId"
          element={<Worktasks />}
        />
      </Routes>
    </Router>
  );
};

export default App;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\App.jsx
