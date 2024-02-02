import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Worklists = ({ workspaceId }) => {
  
  const [worklists, setWorklists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/workspaces/${workspaceId}/worklists`)
      .then(response => {
        setWorklists(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar worklists', error);
        setIsLoading(false);
      });
  }, [workspaceId]);

  if (isLoading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Tarefas do {workspaceId}</h1>
      <ul>
        {worklists.map(worklist => (
          <li key={worklist.id}>
            {worklist.name}
            {/* Botões para editar e deletar */}
          </li>
        ))}
      </ul>
      {/* Formulário para adicionar nova worklist */}
    </div>
  );
};

export default Worklists;

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\Worklists\index.jsx