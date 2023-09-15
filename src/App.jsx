import React, { useState, useEffect } from "react";
import {
  GlobalStyle,
  MainContainer,
  SidebarContainer,
  TaskListContainer,
} from "./GlobalStyle";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/index";
import TaskList from "./components/TaskList";

// Componente principal da aplicação
const App = () => {
  // Itens de navegação para o Header
  const navItems = ["Home", "Sobre", "Contatos"];

  // Itens para a Sidebar
  const sidebarItems = ["Notificações", "Metas", "Espaços"];

  // Estado para manter informações sobre os espaços
  // Inicializado com valores do localStorage, se disponíveis
  const [spaces, setSpaces] = useState(() => {
    const savedSpaces = localStorage.getItem("spaces");
    return savedSpaces ? JSON.parse(savedSpaces) : [];
  });

  // Estado para gerenciar o espaço selecionado
  const [selectedSpaceId, setSelectedSpaceId] = useState(null);

  // Estado para gerenciar o espaço em edição
  const [editingSpaceId, setEditingSpaceId] = useState(null);

  // Estado para manter o valor do espaço em edição
  const [editingSpaceValue, setEditingSpaceValue] = useState("");

  // Função para iniciar a edição de um espaço
  const handleEditSpace = (spaceId, spaceTitle) => {
    setEditingSpaceId(spaceId);
    setEditingSpaceValue(spaceTitle);
  };

  // Função para salvar a edição de um espaço
  const handleSaveEdit = () => {
    // Verificação para evitar valores vazios ou só com espaços
    if (editingSpaceValue.trim() !== "") {
      setSpaces((prevSpaces) =>
        prevSpaces.map((space) =>
          space.id === editingSpaceId
            ? { ...space, title: editingSpaceValue }
            : space
        )
      );
    }
    // Reset do estado de edição
    setEditingSpaceId(null)
  };

  // Efeito para atualizar o localStorage toda vez que 'spaces' é atualizado
  useEffect(() => {
    localStorage.setItem("spaces", JSON.stringify(spaces));
  }, [spaces]);

  // Função para adicionar um novo espaço
  const handleNewSpaceSubmit = (newSpaceInput) => {
    if (newSpaceInput.trim() !== "") {
      const newSpace = {
        id: Date.now(),
        title: newSpaceInput,
        lists: [],
      };
      setSpaces((prevSpaces) => [...prevSpaces, newSpace]);
      setSelectedSpaceId(newSpace.id);
    }
  };

  // Função para adicionar uma nova lista a um espaço
  const handleNewListSubmit = (spaceId, newListInput) => {
    if (newListInput.trim() !== "") {
      const newList = {
        id: Date.now(),
        title: newListInput,
        spaceId: spaceId,
      };
      setSpaces((prevSpaces) =>
        prevSpaces.map((space) =>
          space.id === spaceId
            ? { ...space, lists: [...space.lists, newList] }
            : space
        )
      );
    }
  };

  // Função para adicionar uma nova tarefa a um espaço
  const handleTaskSubmit = (spaceId, newTask) => {
    if (newTask && newTask.trim() !== "") {
      setSpaces((prevSpaces) =>
        prevSpaces.map((space) =>
          space.id === spaceId
            ? {
                ...space,
                lists: [...space.lists, { id: Date.now(), ...newTask }],
              }
            : space
        )
      );
    }
  };

  // Renderização do componente
  return (
    <>
      <GlobalStyle />
      <Header navItems={navItems} />
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
