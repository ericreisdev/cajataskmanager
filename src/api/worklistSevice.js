// src/api/taskService.js
import apiClient from './apiClient';

// Renomeado de getTasks para getWorklists
// export const getWorklists = async (workspaceId) => {
//   try {
//     const response = await apiClient.get(`/workspaces/${workspaceId}/worklists`);
//     return response.data;
//   } catch (error) {
//     console.error('Erro ao obter worklists:', error);
//     return null; // Retornando null em caso de erro
//   }
// };
export const getWorklists = async (workspaceId) => {
  try {
    console.log(`Buscando worklists para workspaceId: ${workspaceId}`);
    const response = await apiClient.get(`/workspaces/${workspaceId}/worklists`);
    console.log('Worklists recebidas:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter worklists:', error);
    return null;
  }
};

// Esta função cria uma nova worklist em um workspace específico




export const createWorklist = async (workspaceId, worklistData) => {
  try {
    const response = await apiClient.post(`/workspaces/${workspaceId}/worklists`, worklistData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar worklist:', error);
  }
};

// Esta função atualiza uma worklist específica em um workspace
export const updateWorklist = async (workspaceId, worklistId, worklistData) => {
  try {
    const response = await apiClient.put(`/workspaces/${workspaceId}/worklists/${worklistId}`, worklistData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar worklist:', error);
  }
};

// Esta função exclui uma worklist específica de um workspace
export const deleteWorklist = async (workspaceId, worklistId) => {
  try {
    await apiClient.delete(`/workspaces/${workspaceId}/worklists/${worklistId}`);
  } catch (error) {
    console.error('Erro ao excluir worklist:', error);
  }
};
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\api\worklistSevice.js