import React, { useState, useEffect } from "react";
import {
  GlobalStyle,
  MainContainer,
  SidebarContainer,
  TaskListContainer,
} from "./GlobalStyle";
import Sidebar from "./components/Sidebar/index";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import { getWorkspaces, createWorkspace, updateWorkspace, deleteWorkspace  } from "./api/workspaceService";
import { getWorktasks } from "./api/workdetailService";
import { getWorklists, createWorklist, updateWorklist, deleteWorklist } from "./api/worklistSevice";

const App = () => {
  const navItems = [""];
  const sidebarItems = [""];

  const [spaces, setSpaces] = useState([]);

  const loadSpacesFromDB = async () => {
    let retryCount = 0;
    const maxRetries = 5;
  
    while (retryCount < maxRetries) {
      try {
        const fetchedSpaces = await getWorkspaces();
        // Resto do seu código...
        break; // Se a chamada for bem-sucedida, saia do loop
      } catch (error) {
        console.error("Erro ao carregar dados do banco de dados:", error);
        retryCount++;
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 1000)); // espera 2^retryCount segundos
      }
    }
  };
  
  useEffect(() => {
    loadSpacesFromDB();
  }, []);
  


  const [selectedSpaceId, setSelectedSpaceId] = useState(null);
  const [editingSpaceId, setEditingSpaceId] = useState(null);
  const [editingSpaceValue, setEditingSpaceValue] = useState("");

  const handleEditSpace = (spaceId, spaceTitle) => {
    setEditingSpaceId(spaceId);
    setEditingSpaceValue(spaceTitle);
  };

  const handleSaveEdit = async () => {
    const updatedSpace = await updateWorkspace(editingSpaceId, {
      title: editingSpaceValue,
    });
    setSpaces((prevSpaces) =>
      prevSpaces.map((space) =>
        space.id === editingSpaceId ? updatedSpace : space
      )
    );
    setEditingSpaceId(null);
  };

  useEffect(() => {
    const loadSpaces = async () => {
      try {
        const fetchedSpaces = await getWorkspaces();
        const spacesWithLists = await Promise.all(fetchedSpaces.map(async (space) => {
          const lists = await getWorklists(space.id);
          const listsWithTasks = await Promise.all(lists.map(async (list) => {
            if (!list.id) {
              console.error("List ID is undefined for space", space.id);
              return list; // Retorna a lista sem as tarefas
            }
            const tasks = await getWorktasks(space.id, list.id);
            return { ...list, tasks };
          }));
          return { ...space, lists: listsWithTasks };
        }));
        setSpaces(spacesWithLists);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
  
    loadSpaces();
  }, []);
  
  





  const handleNewSpaceSubmit = (newSpaceInput) => {
    if (newSpaceInput.trim() !== "") {
      const newSpace = {
        id: Date.now(),
        title: newSpaceInput,
        lists: [], // Garanta que a propriedade lists está presente
      };

      setSpaces((prevSpaces) => [...prevSpaces, newSpace]);
      setSelectedSpaceId(newSpace.id);
    }
  };

  const handleNewListSubmit = async (spaceId, newListInput) => {
    if (newListInput.trim() !== "") {
      try {
        const newList = await createWorklist(spaceId, { title: newListInput });
        setSpaces(prevSpaces => prevSpaces.map(space =>
          space.id === spaceId
            ? { ...space, lists: [...space.lists, newList] }
            : space
        ));
      } catch (error) {
        console.error("Erro ao criar worklist:", error);
      }
    }
  };

  const handleTaskSubmit = async (spaceId, listId, newTask) => {
    if (newTask) {
      try {
        const newWorktask = await createWorktask(spaceId, listId, newTask);
        setSpaces(prevSpaces => prevSpaces.map(space =>
          space.id === spaceId
            ? {
                ...space,
                lists: space.lists.map(list =>
                  list.id === listId
                    ? { ...list, tasks: [...list.tasks, newWorktask] }
                    : list
                ),
              }
            : space
        ));
      } catch (error) {
        console.error("Erro ao criar worktask:", error);
      }
    }
  };
  // A função `handleTaskSubmit` foi atualizada para encontrar o `space` correto com base no `spaceId` fornecido. Em seguida, ela assume que a `worklist` para adicionar a tarefa é a primeira na lista de `lists` desse `space`. É importante ajustar essa lógica para corresponder à sua estrutura de dados e aos requisitos de negócios específicos da sua aplicação

// Para incluir o `worklistId` nas tarefas criadas no método `handleTaskSubmit` no componente `App`, você precisará modificar esse método para identificar a `worklist` correta dentro do espaço (`space`) selecionado. Aqui está a modificação necessária:

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <SidebarContainer>
          <Sidebar
            sidebarItems={sidebarItems}
            onNewSpaceSubmit={handleNewSpaceSubmit}
            onNewListSubmit={handleNewListSubmit}
            spaces={spaces}
            setSpaces={setSpaces}
            selectedSpaceId={selectedSpaceId}
            setSelectedSpaceId={setSelectedSpaceId}
            editingSpaceId={editingSpaceId}
            setEditingSpaceId={setEditingSpaceId}
            editingSpaceValue={editingSpaceValue}
            setEditingSpaceValue={setEditingSpaceValue}
            handleEditSpace={handleEditSpace}
            handleSaveEdit={handleSaveEdit}
          />
        </SidebarContainer>
        <TaskListContainer>
        {/* <TaskList
  tasks={spaces.find(space => space.id === selectedSpaceId)?.lists || []}
  selectedSpaceId={selectedSpaceId}
  onTaskSubmit={handleTaskSubmit}
  setSpaces={setSpaces}
/> */}

          {selectedSpaceId && (
            <TaskList
              spaces={spaces}
              selectedSpaceId={selectedSpaceId}
              onTaskSubmit={handleTaskSubmit}
              setSpaces={setSpaces}
            />
          )}
        </TaskListContainer>
      </MainContainer>
    </>
  );
};

export default App;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\App.jsx