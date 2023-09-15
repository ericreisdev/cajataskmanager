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

const App = () => {
  const navItems = ["Home", "Sobre", "Contatos"];
  const sidebarItems = ["Notificações", "Metas", "Espaços"];

  // Usar um estado inicial mais seguro para espaços, como um array vazio
  // const [spaces, setSpaces] = useState([]);
  const [spaces, setSpaces] = useState(() => {
    const savedSpaces = localStorage.getItem("spaces");
    return savedSpaces ? JSON.parse(savedSpaces) : [];
  });

  const [selectedSpaceId, setSelectedSpaceId] = useState(null);
  const [editingSpaceId, setEditingSpaceId] = useState(null);
  const [editingSpaceValue, setEditingSpaceValue] = useState("");

  const handleEditSpace = (spaceId, spaceTitle) => {
    setEditingSpaceId(spaceId);
    setEditingSpaceValue(spaceTitle);
  };

  const handleSaveEdit = () => {
    // Adicionei uma verificação para garantir que o valor não está vazio ou só com espaços
    if (editingSpaceValue.trim() !== "") {
      setSpaces((prevSpaces) =>
        prevSpaces.map((space) =>
          space.id === editingSpaceId
            ? { ...space, title: editingSpaceValue }
            : space
        )
      );
    }
    setEditingSpaceId(null)
  };

  // Este useEffect é redundante, já que você já está inicializando "spaces" com valores do localStorage
  // useEffect(() => {
  //   const savedSpaces = JSON.parse(localStorage.getItem("spaces"));
  //   if (savedSpaces) {
  //     setSpaces(savedSpaces);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("spaces", JSON.stringify(spaces));
  }, [spaces]);

  const handleNewSpaceSubmit = (newSpaceInput) => {
    // Simplifiquei a verificação de input vazio
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

  // Adicionei uma verificação de input vazio
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

  return (
    <>
      <GlobalStyle />
      <Header  navItems={navItems} />
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
