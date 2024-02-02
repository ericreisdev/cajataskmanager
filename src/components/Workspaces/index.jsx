// Em ./components/Workspaces/index.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import AddWorkspaceForm from "./WorkspacesForm";
import { Link } from "react-router-dom"; // Adicione esta linha
import { useNavigate, useParams } from "react-router-dom"; // Importe useParams aqui
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
import {
  getWorkspaces,
  createWorkspace,
  updateWorkspace,
  deleteWorkspace,
} from "../../api/workspaceService";
import WorkspaceLayout from "./WorkspaceLayout";

//Certifique-se de que este caminho está correto

import { WorkspaceContainer, WorkspaceList, WorkspaceItem, WorkspaceTitle, Button, StyledLink, Input, Sidebar } from "./style";
import { DeleteButton } from "./style";

const Workspaces = ({ onSelectWorkspace }) => {
  const [workspaces, setWorkspaces] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [editingWorkspace, setEditingWorkspace] = useState(null);

  const style = {
    border: "3px solid black",
    margin: "10px",
    padding: "10px",
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const fetchWorkspaces = async () => {
    setIsLoading(true);
    try {
      const data = await getWorkspaces();
      setWorkspaces(data);
    } catch (error) {
      console.error("Erro ao buscar workspaces", error);
    }
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteWorkspace(id);
      fetchWorkspaces(); // Atualizar a lista após a exclusão
    } catch (error) {
      console.error("Erro ao excluir workspace", error);
    }
  };

  const handleEdit = (workspace) => {
    setEditingWorkspace(workspace);
    // Aqui você pode abrir um modal ou navegar para uma página de edição
  };

  const handleSaveEdit = async (workspaceData) => {
    try {
      await updateWorkspace(editingWorkspace.id, workspaceData);
      setEditingWorkspace(null);
      fetchWorkspaces(); // Atualizar a lista após a edição
    } catch (error) {
      console.error("Erro ao atualizar workspace", error);
    }
  };

  const handleEditChange = (event) => {
    setEditingWorkspace({ ...editingWorkspace, title: event.target.value });
  };

  const handleCancelEdit = () => {
    setEditingWorkspace(null);
  };

  if (isLoading) return <p>Carregando...</p>;

  return (
    <Sidebar>
      <WorkspaceContainer>
        <WorkspaceTitle>Pastas</WorkspaceTitle>
        <AddWorkspaceForm onWorkspaceAdded={fetchWorkspaces} />
        <WorkspaceList>
          {workspaces.map(workspace => (
           <WorkspaceItem key={workspace.id} onClick={() => {
            console.log(`Workspace ${workspace.id} clicked`);
            onSelectWorkspace(workspace.id, workspace.title);
          }}>
              {editingWorkspace && editingWorkspace.id === workspace.id ? (
                <div>
                  <Input
                    type="text"
                    value={editingWorkspace.title}
                    onChange={handleEditChange}
                  />
                  <Button onClick={() => handleSaveEdit({ title: editingWorkspace.title })}>Salvar</Button>
                  <Button onClick={handleCancelEdit}>Cancelar</Button>
                </div>
              ) : (
                <>
                  <span>{workspace.title}</span>
                  <Button onClick={() => handleEdit(workspace)}><FaEdit /></Button>
                  <DeleteButton onClick={() => handleDelete(workspace.id)}><FaTrash /></DeleteButton>
                </>
              )}
            </WorkspaceItem>
          ))}
        </WorkspaceList>
      </WorkspaceContainer>
    </Sidebar>
  );
};

export default Workspaces;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\index.jsx
