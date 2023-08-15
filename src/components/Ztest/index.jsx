import React, { useState } from "react";
import {
  Container,
  Logo,
  Nav,
  NavItem,
  Section,
  SectionHeader,
  SectionContent,
  ArrowIcon,
  PlusSign,
  NewProduction,
} from "./style";
import FloatingWindow from "./FloatingWindow";
import OptionsWindow from "./OptionsWindow";

const SidebarSectionItem = ({ title, expanded, onClick, children }) => (
  <Section>
    <SectionHeader onClick={onClick}>
      {title}
      <ArrowIcon isExpanded={expanded}>&#9660;</ArrowIcon>
    </SectionHeader>
    {expanded && <SectionContent>{children}</SectionContent>}
  </Section>
);

const Sidebar = ({
  sidebarItems,
  onNewSpaceSubmit,
  onNewListSubmit,
  spaces,
  selectedSpaceId,
  setSelectedSpaceId,
  setSpaces,
}) => {
  const [expandedSections, setExpandedSections] = useState([]);
  const [showFloatingWindow, setShowFloatingWindow] = useState(false);
  const [showOptionsWindow, setShowOptionsWindow] = useState(false);

  const toggleExpansion = (sectionIndex) => {
    if (expandedSections.includes(sectionIndex)) {
      setExpandedSections((prevExpandedSections) =>
        prevExpandedSections.filter((index) => index !== sectionIndex)
      );
    } else {
      setExpandedSections((prevExpandedSections) => [
        ...prevExpandedSections,
        sectionIndex,
      ]);
    }
  };

  const handleDeleteSpace = (e, spaceId) => {
    e.stopPropagation();
    setSpaces((prevSpaces) => prevSpaces.filter((space) => space.id !== spaceId));
  };

  const handleNewSpaceSubmit = (data) => {
    onNewSpaceSubmit(data);
    setSelectedSpaceId(data.id);
    setShowOptionsWindow(true);
    setShowFloatingWindow(false);
    setSpaces((prevSpaces) => [...prevSpaces, data]);
  };

  const handleNewListSubmit = (spaceId, data) => {
    onNewListSubmit(spaceId, data);
    setShowOptionsWindow(false);
  };

  const toggleOptionsWindow = (selectedSpaceId) => {
    setSelectedSpaceId(selectedSpaceId);
    setShowOptionsWindow((prevState) => !prevState);
  };

  return (
    <Container>
      <Nav>
        <SidebarSectionItem
          title="Início"
          expanded={expandedSections.includes(0)}
          onClick={() => toggleExpansion(0)}
        >
          {sidebarItems.slice(0, 2).map((item, index) => (
            <NavItem key={index}>{item}</NavItem>
          ))}
        </SidebarSectionItem>

        <hr />

        <SidebarSectionItem
          title="Favoritos"
          expanded={expandedSections.includes(1)}
          onClick={() => toggleExpansion(1)}
        ></SidebarSectionItem>

        <hr />

        <SidebarSectionItem
          title="Produção"
          expanded={expandedSections.includes(2)}
          onClick={() => toggleExpansion(2)}
        >
          <NewProduction onClick={() => setShowFloatingWindow(true)}>
            + Adicionar Pasta
          </NewProduction>
          {spaces.map((space) => (
            <div
              key={space.id}
              onClick={() => toggleOptionsWindow(space.id)}
              style={{ cursor: "pointer" }}
            >
              <button onClick={(e) => handleDeleteSpace(e, space.id)}>🗑️</button>
              {space.title && (
                <PlusSign>
                  {space.title} <span>➕</span>
                </PlusSign>
              )}
            </div>
          ))}
        </SidebarSectionItem>

        <hr />

        <SidebarSectionItem
          title="Tarefas Diárias"
          expanded={expandedSections.includes(3)}
          onClick={() => toggleExpansion(3)}
        ></SidebarSectionItem>

        <hr />
      </Nav>

      {showFloatingWindow && (
        <FloatingWindow
          onClose={() => setShowFloatingWindow(false)}
          onSubmit={handleNewSpaceSubmit}
        />
      )}
      {showOptionsWindow && (
        <OptionsWindow
          isOpen={showOptionsWindow}
          onClose={() => setShowOptionsWindow(false)}
          selectedSpace={spaces.find((space) => space.id === selectedSpaceId)}
          onNewListSubmit={handleNewListSubmit}
        />
      )}
    </Container>
  );
};

export default Sidebar;
