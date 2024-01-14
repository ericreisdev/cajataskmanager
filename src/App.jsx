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
import { updateWorkspace } from "./api/workspaceService";

const App = () => {
  const navItems = [""];
  const sidebarItems = [""];

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
      localStorage.setItem("spaces", JSON.stringify(spaces));
    }
  };

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
      localStorage.setItem("spaces", JSON.stringify([...spaces]));
    }
  };

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
