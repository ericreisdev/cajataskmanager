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

// Definindo o componente Sidebar
const Sidebar = ({
  sidebarItems, // itens do menu do sidebar
  onNewSpaceSubmit, // função que é chamada quando um novo espaço é submetido
  onNewListSubmit, // função que é chamada quando uma nova lista é submetida
  spaces, // espaços atualmente existentes
  selectedSpaceId, // id do espaço selecionado
  setSelectedSpaceId, // função para atualizar o id do espaço selecionado
  setSpaces, // função para atualizar os espaços
}) => {
  const [expandedSections, setExpandedSections] = useState([]); // lista de seções expandidas
  const [showFloatingWindow, setShowFloatingWindow] = useState(false); // controla se a janela flutuante está aberta ou não
  const [showOptionsWindow, setShowOptionsWindow] = useState(false); // controla se a janela de opções está aberta ou não

  // função para expandir ou retrair uma seção quando seu header é clicado
  const toggleExpansion = (sectionIndex) => {
    if (expandedSections.includes(sectionIndex)) {
      // se a seção está expandida, então a retraímos
      setExpandedSections((prevExpandedSections) =>
        prevExpandedSections.filter((index) => index !== sectionIndex)
      );
    } else {
      // se a seção não está expandida, então a expandimos
      setExpandedSections((prevExpandedSections) => [
        ...prevExpandedSections,
        sectionIndex,
      ]);
    }
  };

  // função para lidar com a submissão de um novo espaço
  const handleNewSpaceSubmit = (data) => {
    onNewSpaceSubmit(data); // chamamos a função onNewSpaceSubmit com os dados do novo espaço
    setSelectedSpaceId(data.id); // definimos o espaço selecionado como o novo espaço criado
    setShowOptionsWindow(true); // abrimos a janela de opções
    setShowFloatingWindow(false); // fechamos a janela flutuante
    setSpaces((prevSpaces) => [...prevSpaces, data]); // atualizamos os espaços com o novo espaço criado
  };

  // função para lidar com a submissão de uma nova lista
  const handleNewListSubmit = (spaceId, data) => {
    onNewListSubmit(spaceId, data); // chamamos a função onNewListSubmit com o id do espaço e os dados da nova lista
    setShowOptionsWindow(false); // fechamos a janela de opções
  };

  // função para abrir ou fechar a janela de opções quando um espaço é clicado
  const toggleOptionsWindow = (selectedIndex) => {
    setSelectedSpaceId(spaces[selectedIndex].id); // definimos o espaço selecionado como o espaço clicado
    setShowOptionsWindow((prevState) => !prevState); // invertemos o estado da janela de opções (se estava aberta, fechamos; se estava fechada, abrimos)
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
            Produção
            <ArrowIcon isExpanded={expandedSections.includes(2)}>
              &#9660;
            </ArrowIcon>
          </SectionHeader>
          {expandedSections.includes(2) && (
            <SectionContent>
              {/* ... */}
              <NewProduction onClick={() => setShowFloatingWindow(true)}>
                Nova Produção
              </NewProduction>
              {spaces.map((space, index) => (
                <div
                  key={index}
                  onClick={() => toggleOptionsWindow(index)}
                  style={{ cursor: "pointer" }}
                >
                  {space.title && (
                    <PlusSign>
                      {space.title} <span>➕</span> {/* Nome do Espaço */}
                    </PlusSign>
                  )}
                </div>
              ))}
              {/* ... */}
            </SectionContent>
          )}
        </Section>

        <hr />

        <Section>
          <SectionHeader onClick={() => toggleExpansion(3)}>
            Tarefas Diárias
            <ArrowIcon isExpanded={expandedSections.includes(3)}>
              &#9660;
            </ArrowIcon>
          </SectionHeader>
          {expandedSections.includes(3) && (
            <SectionContent>{/* Conteúdo da seção Painéis */}</SectionContent>
          )}
        </Section>

        <hr />
      </Nav>

      {showFloatingWindow && (
        <FloatingWindow
          onClose={() => setShowFloatingWindow(false)} // função para fechar a janela flutuante
          onSubmit={handleNewSpaceSubmit} // função para lidar com a submissão de um novo espaço
        />
      )}
      {/* // A janela de opções é mostrada se o estado showOptionsWindow for verdadeiro */}
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
