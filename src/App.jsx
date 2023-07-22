// Importando módulos e componentes necessários
import React, { useState, useEffect } from "react";
import {
  GlobalStyle,
  MainContainer,
  SidebarContainer,
  TaskListContainer,
} from "./GlobalStyle";
import Header from "./components/Header";
import logoUrl from "./assets/img/caja sm ii.png";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

// Componente principal da aplicação
const App = () => {
  const navItems = ["Lista", "Quadro", "Visualização"];
  const sidebarItems = ["Notificações", "Metas", "Espaços"];

  // useState para armazenar e gerenciar o estado dos 'spaces'
  const [spaces, setSpaces] = useState([]);

  // useState para armazenar e gerenciar o estado do 'selectedSpaceId'
  const [selectedSpaceId, setSelectedSpaceId] = useState(null);

  // useEffect para carregar os 'spaces' do localStorage quando o componente é montado
  useEffect(() => {
    const savedSpaces = JSON.parse(localStorage.getItem("spaces"));
    if (savedSpaces) {
      setSpaces(savedSpaces);
    }
  }, []);

  // useEffect para atualizar os 'spaces' no localStorage quando eles mudam
  useEffect(() => {
    localStorage.setItem("spaces", JSON.stringify(spaces));
  }, [spaces]);

  // Função para lidar com a criação de um novo 'space'
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

  // Função para lidar com a criação de uma nova 'list'
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

  // Função para lidar com a criação de uma nova 'task'
  const handleTaskSubmit = (spaceId, newTask) => {
    if (newTask) {
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

  // Renderizando o componente
  return (
    <>
      <GlobalStyle />
      <Header logoUrl={logoUrl} navItems={navItems} />
      <MainContainer>
        <SidebarContainer>
          <Sidebar
            sidebarItems={sidebarItems}
            onNewSpaceSubmit={handleNewSpaceSubmit}
            onNewListSubmit={handleNewListSubmit}
            spaces={spaces}
            selectedSpaceId={selectedSpaceId}
            setSelectedSpaceId={setSelectedSpaceId}
            setSpaces={setSpaces}
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
