// src/api/taskService.js
import apiClient from './apiClient';

export const getTasks = async (workspaceId) => {
  try {
    const response = await apiClient.get(`/workspaces/${workspaceId}/worklists`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter tasks:', error);
    return null; // Retornando null em caso de erro
  }
};


export const createTask = async (workspaceId, taskData) => {
  try {
    const response = await apiClient.post(`/workspaces/${workspaceId}/worklists`, taskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar task:', error);
  }
};

export const updateTask = async (workspaceId, taskId, taskData) => {
  try {
    const response = await apiClient.put(`/workspaces/${workspaceId}/worklists/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar task:', error);
  }
};

export const deleteTask = async (workspaceId, taskId) => {
  try {
    await apiClient.delete(`/workspaces/${workspaceId}/worklists/${taskId}`);
  } catch (error) {
    console.error('Erro ao excluir task:', error);
  }
};