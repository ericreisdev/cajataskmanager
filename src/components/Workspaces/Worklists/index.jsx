import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Importe useParams aqui
import {
  getWorklists,
  updateWorklist,
  deleteWorklist,
  createWorklist,
} from "../../../api/worklistSevice"; // Ajuste o caminho se necessário

import {
  WorklistsContainer,
  Title,
  FormSection,
  Input,
  Button,
  WorklistItem,
  WorklistList,
  Div,
  RenderTask,
  DeleteButton,
  DivDois,
  SpanName,
} from "./style";
import FlyingWindow from "../../Workspaces/FlyingWindow/index";
import Worktask from "./Worktasks";

import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

const Worklists = ({ workspaceId, workspaceName }) => {
  console.log(`Workspace ID em Worklists: ${workspaceId}`);

  const [worklists, setWorklists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingWorklist, setEditingWorklist] = useState(null);
  const navigate = useNavigate(); // Adicione esta linha
  const [newWorklist, setNewWorklist] = useState({
    name: "",
    responsibility: "",
    due_date: "",
    observation: "",
  });

  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [activeWorklistId, setActiveWorklistId] = useState(null);

  const openWindow = (worklistId) => {
    console.log("Abrindo janela para worklistId:", worklistId); // Log para verificar a chamada
    setActiveWorklistId(worklistId);
    setIsWindowOpen(true);
  };

  const closeWindow = () => {
    setIsWindowOpen(false);
    setActiveWorklistId(null);
  };

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (workspaceId) {
      fetchWorklists(workspaceId).catch((error) => {
        console.error("Erro ao buscar worklists", error);
        setErrorMessage(
          "Erro ao carregar worklists. Tente novamente mais tarde."
        );
      });
    }
  }, [workspaceId]);

  const fetchWorklists = async () => {
    setIsLoading(true);
    try {
      const data = await getWorklists(workspaceId);
      setWorklists(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar worklists", error);
      setIsLoading(false);
    }
  };

  const handleEditChange = (event) => {
    setEditingWorklist({
      ...editingWorklist,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveEdit = async () => {
    try {
      await updateWorklist(workspaceId, editingWorklist.id, editingWorklist);
      setEditingWorklist(null);
      fetchWorklists();
    } catch (error) {
      console.error("Erro ao atualizar worklist", error);
    }
  };

  const handleDelete = async (worklistId) => {
    try {
      await deleteWorklist(workspaceId, worklistId);
      fetchWorklists();
    } catch (error) {
      console.error("Erro ao excluir worklist", error);
    }
  };

  const handleAddNewWorklist = async () => {
    try {
      await createWorklist(workspaceId, newWorklist);
      setNewWorklist({
        name: "",
        responsibility: "",
        due_date: "",
        observation: "",
      });
      fetchWorklists();
    } catch (error) {
      console.error("Erro ao criar worklist", error);
    }
  };

  const handleNewWorklistChange = (e) => {
    setNewWorklist({ ...newWorklist, [e.target.name]: e.target.value });
  };

  const listItemStyle = {
    border: "3px solid black",
    margin: "10px",
    padding: "10px",
  };

  if (isLoading) return <p>Carregando...</p>;

  return (
    // const Worklists = ({ workspaceId, workspaceName }) => {
    //   // ... restante do código ...

    //   return (
    //     <RenderTask>
    //       <WorklistsContainer>
    //         <Title>Tarefas do Workspace: {workspaceName}</Title>
    //         {/* Restante da lógica de renderização */}
    //       </WorklistsContainer>
    //     </RenderTask>
    //   );
    // };
    <RenderTask>
      <WorklistsContainer>
        <Title>Tarefas da {workspaceName}</Title>
        <FormSection>
          <Input
            type="text"
            name="name"
            value={newWorklist.name}
            onChange={handleNewWorklistChange}
            placeholder="Nome"
          />
          <Input
            type="text"
            name="responsibility"
            value={newWorklist.responsibility}
            onChange={handleNewWorklistChange}
            placeholder="Responsabilidade"
          />
          <Input
            type="date"
            name="due_date"
            value={newWorklist.due_date}
            onChange={handleNewWorklistChange}
            placeholder="Data de Vencimento"
          />
          <Input
            type="text"
            name="observation"
            value={newWorklist.observation}
            onChange={handleNewWorklistChange}
            placeholder="Observação"
          />
          <Button onClick={handleAddNewWorklist}>Adicionar Worklist</Button>
        </FormSection>
        <WorklistList>
          {worklists.map((worklist) => (
            <WorklistItem key={worklist.id}>
              {editingWorklist?.id === worklist.id ? (
                <div>
                  <Input
                    type="text"
                    name="name"
                    value={editingWorklist.name}
                    onChange={handleEditChange}
                  />
                  <Input
                    type="text"
                    name="responsibility"
                    value={editingWorklist.responsibility}
                    onChange={handleEditChange}
                  />
                  <Input
                    type="date"
                    name="due_date"
                    value={editingWorklist.due_date}
                    onChange={handleEditChange}
                  />
                  <Input
                    type="text"
                    name="observation"
                    value={editingWorklist.observation}
                    onChange={handleEditChange}
                  />
                  <Button onClick={handleSaveEdit}>Salvar</Button>
                  <Button onClick={() => setEditingWorklist(null)}>
                    Cancelar
                  </Button>
                </div>
              ) : (
                <Div>
                  <DivDois>
                    <SpanName>{worklist.name}</SpanName>
                    <span>
                      <strong>Responsabilidade:</strong>
                      {worklist.responsibility}
                    </span>
                    <span>
                      <strong>Data de Vencimento:</strong>
                      {worklist.due_date}
                    </span>
                    <span>
                      <strong>Observação:</strong>
                      {worklist.observation}
                    </span>
                  </DivDois>
                  <div className="button-container">
                    <Button onClick={() => setEditingWorklist(worklist)}>
                      <FaEdit />
                    </Button>
                    <DeleteButton onClick={() => handleDelete(worklist.id)}>
                      <FaTrash />
                    </DeleteButton>
                    <Button onClick={() => openWindow(worklist.id)}>
                      Detalhes
                    </Button>
                  </div>
                </Div>
              )}
            </WorklistItem>
          ))}
        </WorklistList>
      </WorklistsContainer>
      {isWindowOpen &&
        (console.log(
          "Exibindo FlyingWindow para worklistId:",
          activeWorklistId
        ), // Log para verificar a renderização condicional
        (
          <FlyingWindow isOpen={isWindowOpen} onClose={closeWindow}>
            <Worktask workspaceId={workspaceId} worklistId={activeWorklistId} />
          </FlyingWindow>
        ))}
    </RenderTask>
  );
};
export default Worklists;

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\Worklists\index.jsx
/*import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Importe useParams aqui
import {
  getWorklists,
  updateWorklist,
  deleteWorklist,
  createWorklist,
} from "../../../api/worklistSevice"; // Ajuste o caminho se necessário


import { WorklistsContainer, Title, FormSection, Input, Button, WorklistItem, WorklistList, Div, RenderTask } from "./style";


const Worklists = ({ workspaceId }) => {
  console.log(`Workspace ID em Worklists: ${workspaceId}`);
  
  const [worklists, setWorklists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingWorklist, setEditingWorklist] = useState(null);
  const navigate = useNavigate(); // Adicione esta linha
  const [newWorklist, setNewWorklist] = useState({
    name: "",
    responsibility: "",
    due_date: "",
    observation: "",
  });

  useEffect(() => {
    if (workspaceId) {
      fetchWorklists(workspaceId);
    }
  }, [workspaceId]);

  const fetchWorklists = async () => {
    setIsLoading(true);
    try {
      const data = await getWorklists(workspaceId);
      setWorklists(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar worklists", error);
      setIsLoading(false);
    }
  };

  const handleEditChange = (event) => {
    setEditingWorklist({ ...editingWorklist, [event.target.name]: event.target.value });
  };

  const handleSaveEdit = async () => {
    try {
      await updateWorklist(workspaceId, editingWorklist.id, editingWorklist);
      setEditingWorklist(null);
      fetchWorklists();
    } catch (error) {
      console.error("Erro ao atualizar worklist", error);
    }
  };


  const handleDelete = async (worklistId) => {
    try {
      await deleteWorklist(workspaceId, worklistId);
      fetchWorklists();
    } catch (error) {
      console.error("Erro ao excluir worklist", error);
    }
  };

  const handleAddNewWorklist = async () => {
    try {
      await createWorklist(workspaceId, newWorklist);
      setNewWorklist({ name: "", responsibility: "", due_date: "", observation: "" });
      fetchWorklists();
    } catch (error) {
      console.error("Erro ao criar worklist", error);
    }
  };

  const handleNewWorklistChange = (e) => {
    setNewWorklist({ ...newWorklist, [e.target.name]: e.target.value });
  };

  const listItemStyle = {
    border: "3px solid black",
    margin: "10px",
    padding: "10px",
  };

  if (isLoading) return <p>Carregando...</p>;



  
  return (
    <RenderTask>
    <WorklistsContainer>
      <Title>Worklists do Workspace {workspaceId}</Title>
      <FormSection>
        <Input
          type="text"
          name="name"
          value={newWorklist.name}
          onChange={handleNewWorklistChange}
          placeholder="Nome"
        />
        <Input
          type="text"
          name="responsibility"
          value={newWorklist.responsibility}
          onChange={handleNewWorklistChange}
          placeholder="Responsabilidade"
        />
        <Input
          type="date"
          name="due_date"
          value={newWorklist.due_date}
          onChange={handleNewWorklistChange}
          placeholder="Data de Vencimento"
        />
        <Input
          type="text"
          name="observation"
          value={newWorklist.observation}
          onChange={handleNewWorklistChange}
          placeholder="Observação"
        />
        <Button onClick={handleAddNewWorklist}>Adicionar Worklist</Button>
      </FormSection>
      <WorklistList>
        {worklists.map(worklist => (
          <WorklistItem key={worklist.id}>
            {editingWorklist?.id === worklist.id ? (
              <div>
                <Input
                  type="text"
                  name="name"
                  value={editingWorklist.name}
                  onChange={handleEditChange}
                />
                <Input
                  type="text"
                  name="responsibility"
                  value={editingWorklist.responsibility}
                  onChange={handleEditChange}
                />
                <Input
                  type="date"
                  name="due_date"
                  value={editingWorklist.due_date}
                  onChange={handleEditChange}
                />
                <Input
                  type="text"
                  name="observation"
                  value={editingWorklist.observation}
                  onChange={handleEditChange}
                />
                <Button onClick={handleSaveEdit}>Salvar</Button>
                <Button onClick={() => setEditingWorklist(null)}>Cancelar</Button>
              </div>
            ) : (
              <Div>
                <strong>Nome:</strong> {worklist.name}<br />
                <strong>Responsabilidade:</strong> {worklist.responsibility}<br />
                <strong>Data de Vencimento:</strong> {worklist.due_date}<br />
                <strong>Observação:</strong> {worklist.observation}<br />
                <Button onClick={() => setEditingWorklist(worklist)}>Editar</Button>
                <Button onClick={() => handleDelete(worklist.id)}>Excluir</Button>
                <Button onClick={() => navigate(`/workspaces/${workspaceId}/worklists/${worklist.id}/worktasks/${worklist.id}`)}>Abrir Detalhes da Worktask</Button>
              </Div>
            )}
          </WorklistItem>
        ))}
      </WorklistList>
    </WorklistsContainer>
    </RenderTask>
  );
            }
export default Worklists;

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\Worklists\index.jsx
*/
