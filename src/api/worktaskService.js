// src/api/worktaskService.js
import apiClient from './apiClient';

// Função para obter todas as worktasks de uma worklist específica
export const getWorktasks = async (workspaceId, worklistId) => {
  try {
    const response = await apiClient.get(`/workspaces/${workspaceId}/worklists/${worklistId}/worktasks`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter worktasks:', error);
    return null;
  }
};

// Função para criar uma nova worktask em uma worklist específica
export const createWorktask = async (workspaceId, worklistId, worktaskData) => {
  try {
    const response = await apiClient.post(`/workspaces/${workspaceId}/worklists/${worklistId}/worktasks`, worktaskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar worktask:', error.response.data);
    // Exibir todos os erros de validação
    if (error.response && error.response.data && error.response.data.errors) {
      console.error('Detalhes do erro:', error.response.data.errors);
    }
    throw error;
  }
};


// Função para atualizar uma worktask específica
export const updateWorktask = async (workspaceId, worklistId, worktaskId, worktaskData) => {
  try {
    const response = await apiClient.put(`/workspaces/${workspaceId}/worklists/${worklistId}/worktasks/${worktaskId}`, worktaskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar worktask:', error);
  }
};

// Função para excluir uma worktask específica de uma worklist
export const deleteWorktask = async (workspaceId, worklistId, worktaskId) => {
  try {
    await apiClient.delete(`/workspaces/${workspaceId}/worklists/${worklistId}/worktasks/${worktaskId}`);
  } catch (error) {
    console.error('Erro ao excluir worktask:', error);
  }
};

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\api\workdetailService.js