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
} from "./style";
import FloatingWindow from "./FloatingWindow";
import OptionsWindow from "./OptionsWindow";

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

  const handleNewSpaceSubmit = (data) => {
    onNewSpaceSubmit(data);
    setSelectedSpaceId(data.id); // Definir o espaço selecionado como o novo espaço criado
    setShowOptionsWindow(true);
    setShowFloatingWindow(false);
    setSpaces((prevSpaces) => [...prevSpaces, data]); // Atualizar o estado spaces com o novo espaço criado
  };

  const handleNewListSubmit = (spaceId, data) => {
    onNewListSubmit(spaceId, data);
    setShowOptionsWindow(false);
  };

  const toggleOptionsWindow = (selectedIndex) => {
    setSelectedSpaceId(spaces[selectedIndex].id); // Definir o espaço selecionado como o espaço clicado
    setShowOptionsWindow((prevState) => !prevState);
  };

  return (
    <Container>
      <Nav>
        <Section>
          <SectionHeader onClick={() => toggleExpansion(0)}>
            Início
            <ArrowIcon isExpanded={expandedSections.includes(0)}>
              &#9660;
            </ArrowIcon>
          </SectionHeader>
          {expandedSections.includes(0) && (
            <SectionContent>
              {sidebarItems.slice(0, 2).map((item, index) => (
                <NavItem key={index}>{item}</NavItem>
              ))}
            </SectionContent>
          )}
        </Section>

        <hr />

        <Section>
          <SectionHeader onClick={() => toggleExpansion(1)}>
            Favoritos
            <ArrowIcon isExpanded={expandedSections.includes(1)}>
              &#9660;
            </ArrowIcon>
          </SectionHeader>
          {expandedSections.includes(1) && (
            <SectionContent>{/* Conteúdo da seção Favoritos */}</SectionContent>
          )}
        </Section>

        <hr />

        <Section>
          <SectionHeader onClick={() => toggleExpansion(2)}>
            Espaços
            <ArrowIcon isExpanded={expandedSections.includes(2)}>
              &#9660;
            </ArrowIcon>
          </SectionHeader>
          {expandedSections.includes(2) && (
            <SectionContent>
              {/* ... */}
              <button onClick={() => setShowFloatingWindow(true)}>
                Novo Espaço
              </button>
              {spaces.map((space, index) => (
                <div
                  key={index}
                  onClick={() => toggleOptionsWindow(index)}
                  style={{ cursor: "pointer" }}
                >
                  <PlusSign>{space.title} +</PlusSign>
                </div>
              ))}
              {/* ... */}
            </SectionContent>
          )}
        </Section>

        <hr />

        <Section>
          <SectionHeader onClick={() => toggleExpansion(3)}>
            Painéis
            <ArrowIcon isExpanded={expandedSections.includes(3)}>
              &#9660;
            </ArrowIcon>
          </SectionHeader>
          {expandedSections.includes(3) && (
            <SectionContent>{/* Conteúdo da seção Painéis */}</SectionContent>
          )}
        </Section>

        <hr />

        <Section>
          <SectionHeader onClick={() => toggleExpansion(4)}>
            Documentos
            <ArrowIcon isExpanded={expandedSections.includes(4)}>
              &#9660;
            </ArrowIcon>
          </SectionHeader>
          {expandedSections.includes(4) && (
            <SectionContent>
              {/* Conteúdo da seção Documentos */}
            </SectionContent>
          )}
        </Section>
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
