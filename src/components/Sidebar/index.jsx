import React, { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Section,
  SectionHeader,
  SectionContent,
  NewProduction,
  DeleteButton,
  EditFolder,
  Input,
} from "./style";
import FloatingWindow from "./FloatingWindow";
import { getWorkspaces, createWorkspace, updateWorkspace, deleteWorkspace } from '../../api/workspaceService';

import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
import ConfirmModal from "./ConfirmModal";



// Definindo o componente Sidebar
const Sidebar = ({
  sidebarItems, // itens do menu do sidebar
  onNewSpaceSubmit, // função que é chamada quando um novo espaço é submetido
  onNewListSubmit, // função que é chamada quando uma nova lista é submetida
  spaces, // espaços atualmente existentes
  selectedSpaceId, // id do espaço selecionado
  setSelectedSpaceId, // função para atualizar o id do espaço selecionado
  setSpaces,
  editingSpaceId,
  setEditingSpaceId,
  editingSpaceValue,
  setEditingSpaceValue,
  handleEditSpace,
  handleSaveEdit, // função para atualizar os espaços
}) => {
  const [showFloatingWindow, setShowFloatingWindow] = useState(false); // controla se a janela flutuante está aberta ou não
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [spaceToDelete, setSpaceToDelete] = useState(null);

//   // Função para carregar os workspaces da API
//   useEffect(() => {
//   const fetchWorkspaces = async () => {
//     const fetchedSpaces = await getWorkspaces();
//     const spacesWithListsPromises = fetchedSpaces.map(async (space) => {
//       const worklists = await getTasks(space.id); // getTasks é usado para buscar worklists
//       return { ...space, lists: worklists };
//     });
//     const spacesWithLists = await Promise.all(spacesWithListsPromises);
//     setSpaces(spacesWithLists);
//   };

//   fetchWorkspaces();
// }, []);

  

  // const handleSaveEdit = async () => {
  //   const updatedSpace = await updateWorkspace(editingSpaceId, { title: editingSpaceValue });
  //   setSpaces(prevSpaces => prevSpaces.map(space => space.id === editingSpaceId ? updatedSpace : space));
  //   setEditingSpaceId(null);
  // };

  // Função para lidar com a exclusão de uma pasta (space)
  const handleDeleteSpace = async (spaceId) => {
    await deleteWorkspace(spaceId);
    setSpaces(prevSpaces => prevSpaces.filter(space => space.id !== spaceId));
    setShowConfirmModal(false);
  };

  const handleNewSpaceSubmit = async (data) => {
    const newSpace = await createWorkspace(data);
    setSpaces(prevSpaces => [...prevSpaces, newSpace]);
    setSelectedSpaceId(newSpace.id);
    setShowFloatingWindow(false);
  };

  // função para lidar com a submissão de uma nova lista
  const handleNewListSubmit = (spaceId, data) => {
    onNewListSubmit(spaceId, data);
  };

  // função para abrir ou fechar a janela de opções quando um espaço é clicado
  const toggleOptionsWindow = (selectedIndex) => {
    setSelectedSpaceId(spaces[selectedIndex].id);
  };

  return (
    <Container>
      <Nav>
        <Section>
          <SectionHeader>
            <h1>Produção</h1>
          </SectionHeader>
          <SectionContent>
            <NewProduction onClick={() => setShowFloatingWindow(true)}>
              + Adicionar Pasta
            </NewProduction>
            {spaces.map((space, index) =>
              space.title ? (
                <div
                  key={index}
                  onClick={() => toggleOptionsWindow(index)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {editingSpaceId === space.id ? (
                    <Input
                      type="text"
                      value={editingSpaceValue}
                      onChange={(e) => setEditingSpaceValue(e.target.value)}
                    />
                  ) : (
                    <div
                      style={{
                        color: "#4768e4",
                        marginRight: "10px",
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                      }}
                    >
                      {space.title}
                    </div>
                  )}
                  {editingSpaceId === space.id ? (
                    <EditFolder onClick={handleSaveEdit}>
                      <FaSave />
                    </EditFolder>
                  ) : (
                    <EditFolder
                      onClick={() => handleEditSpace(space.id, space.title)}
                    >
                      <FaEdit />
                    </EditFolder>
                  )}
                  <DeleteButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteSpace(space.id, space.title);
                    }}
                  >
                    <FaTrash />
                  </DeleteButton>
                </div>
              ) : null
            )}
          </SectionContent>
        </Section>
      </Nav>

      {showFloatingWindow && (
        <FloatingWindow
          onClose={() => setShowFloatingWindow(false)}
          onSubmit={handleNewSpaceSubmit}
        />
      )}

      {showConfirmModal && (
        <ConfirmModal
          isOpen={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}
          onConfirm={() => {
            setSpaces((prevSpaces) =>
              prevSpaces.filter((space) => space.id !== spaceToDelete.id)
            );
            setShowConfirmModal(false);
          }}
          spaceTitle={spaceToDelete ? spaceToDelete.title : ""}
        />
      )}
    </Container>
  );
};

export default Sidebar;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Sidebar\index.jsx