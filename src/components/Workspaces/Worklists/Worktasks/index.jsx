// Em ./components/Workspaces/Worklists/Worktasks/index.jsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getWorktasks,
  createWorktask,
  updateWorktask,
  deleteWorktask,
} from "../../../../api/worktaskService";

const Worktask = () => {
  const { workspaceId, worklistId } = useParams();
  const [worktasks, setWorktasks] = useState([]);
  const navigate = useNavigate();
  const [worktaskData, setWorktaskData] = useState({
    description: "",
  });



  useEffect(() => {
    const fetchWorktasks = async () => {
      try {
        const data = await getWorktasks(workspaceId, worklistId);
        setWorktasks(data);
      } catch (error) {
        console.error("Erro ao buscar worktasks", error);
      }
    };

    fetchWorktasks();
  }, [workspaceId, worklistId]);

  const handleEdit = (worktask) => {
    // Set the worktask as the currently editing worktask
    setWorktaskData(worktask);
  };

  const handleUpdate = async (e, worktaskId) => {
    e.preventDefault();
    try {
      const updatedWorktask = await updateWorktask(workspaceId, worklistId, worktaskId, worktaskData);
      // Atualizar a lista de worktasks localmente
      setWorktasks(worktasks.map(wt => wt.id === worktaskId ? updatedWorktask : wt));
      // Resetar o formulário de edição
      setWorktaskData({ description: "" });
    } catch (error) {
      console.error("Erro ao atualizar worktask:", error);
    }
  };

  const handleDelete = async (worktaskId) => {
    try {
      await deleteWorktask(workspaceId, worklistId, worktaskId);
      // Refresh the list of worktasks after deletion
      const updatedWorktasks = worktasks.filter((wt) => wt.id !== worktaskId);
      setWorktasks(updatedWorktasks);
    } catch (error) {
      console.error("Erro ao excluir worktask:", error);
    }
  };

  const handleInputChange = (e) => {
    setWorktaskData({ ...worktaskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newWorktask = await createWorktask(workspaceId, worklistId, worktaskData);
      setWorktasks([...worktasks, newWorktask]);
      setWorktaskData({ description: "" }); // Resetar o formulário
    } catch (error) {
      console.error("Erro ao criar worktask:", error);
    }
  };

  const handleCreateWorktask = async (worktaskData) => {
    try {
      await createWorktask(workspaceId, worklistId, worktaskData);
      // Atualize a lista de worktasks ou redirecione conforme necessário
    } catch (error) {
      console.error("Erro ao criar worktask:", error);
    }
  };

  return (
    <div>
      {/* Formulário para adicionar uma nova Worktask */}
      <form onSubmit={handleSubmit}>
        <h2>Criar Worktask</h2>
        <label>
          Descrição:
          <textarea
            name="description"
            value={worktaskData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Adicionar Worktask</button>
      </form>

      {/* Listagem das Worktasks */}
      {worktasks.map((worktask) => (
        <div key={worktask.id}>
          {worktaskData.id === worktask.id ? (
            // Formulário para edição de Worktask
            <form onSubmit={(e) => handleUpdate(e, worktask.id)}>
              <label>
                Descrição:
                <textarea
                  name="description"
                  value={worktaskData.description}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit">Salvar</button>
              <button onClick={() => setWorktaskData({ description: "" })}>
                Cancelar
              </button>
            </form>
          ) : (
            // Exibição padrão da Worktask
            <div>
              <p>{worktask.description}</p>
              <button onClick={() => handleEdit(worktask)}>Editar</button>
              <button onClick={() => handleDelete(worktask.id)}>Excluir</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Worktask;

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\Worklists\Worktasks\index.jsx
