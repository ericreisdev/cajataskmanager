// src/api/workspaceService.js
import axios from 'axios';

// Exemplo de uso em outro arquivo, como workspaceService.js
import apiClient from './apiClient';

export const getWorkspaces = async () => {
  try {
    const response = await apiClient.get('/workspaces');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter workspaces:', error);
    // Lide com o erro conforme necessário
  }
};

// Função para criar um novo workspace
export const createWorkspace = async (workspaceData) => {
    try {
      const response = await apiClient.post('/workspaces', workspaceData);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar workspace:', error);
      // Lide com o erro conforme necessário
    }
  };
  
  // Função para atualizar um workspace
  export const updateWorkspace = async (id, workspaceData) => {
    try {
      const response = await apiClient.put(`/workspaces/${id}`, workspaceData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar workspace:', error);
      // Lide com o erro conforme necessário
    }
  };
  
  // Função para excluir um workspace
  export const deleteWorkspace = async (id) => {
    try {
      await apiClient.delete(`/workspaces/${id}`);
    } catch (error) {
      console.error('Erro ao excluir workspace:', error);
      // Lide com o erro conforme necessário
    }
  };
  //C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\api\workspaceService.js