import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Importe useParams aqui
import {
  getWorklists,
  updateWorklist,
  deleteWorklist,
  createWorklist,
} from "../../../api/worklistSevice"; // Ajuste o caminho se necessário

const Worklists = () => {
  const { workspaceId } = useParams();
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
    fetchWorklists();
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
    <div>
      <h1>Worklists do Workspace {workspaceId}</h1>
      {/* Formulário para adicionar nova worklist */}
      <div>
        <input
          type="text"
          name="name"
          value={newWorklist.name}
          onChange={handleNewWorklistChange}
          placeholder="Nome"
        />
        <input
          type="text"
          name="responsibility"
          value={newWorklist.responsibility}
          onChange={handleNewWorklistChange}
          placeholder="Responsabilidade"
        />
        <input
          type="date"
          name="due_date"
          value={newWorklist.due_date}
          onChange={handleNewWorklistChange}
          placeholder="Data de Vencimento"
        />
        <input
          type="text"
          name="observation"
          value={newWorklist.observation}
          onChange={handleNewWorklistChange}
          placeholder="Observação"
        />
        <button onClick={handleAddNewWorklist}>Adicionar Worklist</button>
      </div>
      <ul>
        {worklists.map(worklist => (
          <li key={worklist.id} style={listItemStyle}>
            {editingWorklist?.id === worklist.id ? (
              <div>
                <input
                  type="text"
                  name="name"
                  value={editingWorklist.name}
                  onChange={handleEditChange}
                />
                <input
                  type="text"
                  name="responsibility"
                  value={editingWorklist.responsibility}
                  onChange={handleEditChange}
                />
                <input
                  type="date"
                  name="due_date"
                  value={editingWorklist.due_date}
                  onChange={handleEditChange}
                />
                <input
                  type="text"
                  name="observation"
                  value={editingWorklist.observation}
                  onChange={handleEditChange}
                />
                <button onClick={handleSaveEdit}>Salvar</button>
                <button onClick={() => setEditingWorklist(null)}>Cancelar</button>
              </div>
            ) : (
              <>
                <strong>Nome:</strong> {worklist.name}<br />
                <strong>Responsabilidade:</strong> {worklist.responsibility}<br />
                <strong>Data de Vencimento:</strong> {worklist.due_date}<br />
                <strong>Observação:</strong> {worklist.observation}
                <br />
                <button onClick={() => setEditingWorklist(worklist)}>Editar</button>
                <button onClick={() => handleDelete(worklist.id)}>Excluir</button>
              </>
            )}
             <button onClick={() => navigate(`/workspaces/${workspaceId}/worklists/${worklist.id}/worktasks/${worklist.id}`)}>Abrir Detalhes da Worktask</button>

          </li>
        ))}
      </ul>
    </div>
  );
            }
export default Worklists;

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\Worklists\index.jsx
