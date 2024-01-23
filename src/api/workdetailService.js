import apiClient from './apiClient';

// Obter todas as worktasks de uma worklist específica
export const getWorktasks = async (workspaceId, worklistId) => {
  try {
    const response = await apiClient.get(`/workspaces/${workspaceId}/worklists/${worklistId}/worktasks`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter worktasks:', error);
    return null; // Retornando null em caso de erro
  }
};

// Criar uma nova worktask em uma worklist específica
export const createWorktask = async (workspaceId, worklistId, worktaskData) => {
  try {
    const response = await apiClient.post(`/workspaces/${workspaceId}/worklists/${worklistId}/worktasks`, worktaskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar worktask:', error);
  }
};

// Atualizar uma worktask específica
export const updateWorktask = async (workspaceId, worklistId, taskId, worktaskData) => {
  try {
    const response = await apiClient.put(`/workspaces/${workspaceId}/worklists/${worklistId}/worktasks/${taskId}`, worktaskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar worktask:', error);
  }
};

// Excluir uma worktask específica
export const deleteWorktask = async (workspaceId, worklistId, taskId) => {
  try {
    await apiClient.delete(`/workspaces/${workspaceId}/worklists/${worklistId}/worktasks/${taskId}`);
  } catch (error) {
    console.error('Erro ao excluir worktask:', error);
  }
};

// Obter detalhes de uma worktask específica
export const getWorktaskDetails = async (workspaceId, worklistId, taskId) => {
  try {
    const response = await apiClient.get(`/workspaces/${workspaceId}/worklists/${worklistId}/worktasks/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter detalhes da worktask:', error);
    return null; // Retornando null em caso de erro
  }
};

export const uploadTaskAttachment = async (workspaceId, worklistId, taskId, fileData) => {
  try {
    const response = await apiClient.post(`/workspaces/${workspaceId}/worklists/${worklistId}/worktasks/${taskId}/attachments`, fileData);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer upload de anexo para worktask:', error);
  }
};
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\api\workdetailService.js