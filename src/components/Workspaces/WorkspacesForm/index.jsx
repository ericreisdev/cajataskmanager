import React, { useState } from 'react';
import apiClient from '../../../api/apiClient'; // Importe sua instância personalizada do Axios

const AddWorkspaceForm = ({ onWorkspaceAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.post('/workspaces', { title });
      setTitle('');
      onWorkspaceAdded();
    } catch (error) {
      console.error('Erro ao criar workspace', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título do Workspace"
      />
      <button type="submit">Adicionar Workspace</button>
    </form>
  );
};

export default AddWorkspaceForm;


//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\WorkspacesForm\index.jsx