import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Worktasks = ({ worklistId }) => {
  const [worktasks, setWorktasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/worklists/${worklistId}/worktasks`)
      .then(response => {
        setWorktasks(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar worktasks', error);
        setIsLoading(false);
      });
  }, [worklistId]);

  if (isLoading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Worktasks da Worklist {worklistId}</h1>
      <ul>
        {worktasks.map(worktask => (
          <li key={worktask.id}>
            {worktask.name}
            {/* Botões para editar e deletar */}
          </li>
        ))}
      </ul>
      {/* Formulário para adicionar nova worktask */}
    </div>
  );
};

export default Worktasks;

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\Worklists\Worktasks\index.jsx