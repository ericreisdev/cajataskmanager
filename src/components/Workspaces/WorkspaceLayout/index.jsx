import React, { useState } from "react";
import Workspaces from "..";
import Worklists from "../Worklists";
import { LayoutContainer } from "./style";

const WorkspaceLayout = () => {
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(null);
  const [selectedWorkspaceName, setSelectedWorkspaceName] = useState("");
/*const WorkspaceLayout = () => {
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(null);
 

  return (
    <LayoutContainer>
      <div style={{ display: "flex" }}>
        <Workspaces
          onSelectWorkspace={(id, name) => {
            console.log(`Selecionando workspace ID: ${id}, Nome: ${name}`);
            setSelectedWorkspaceId(id);
            setSelectedWorkspaceName(name); // Armazenar o nome do workspace
          }}
        />
        <Worklists workspaceId={selectedWorkspaceId} workspaceName={selectedWorkspaceName} />
      </div>
    </LayoutContainer>
  );
};
*/

  return (
    <LayoutContainer>
    <div style={{ display: "flex" }}>
      {/* <Workspaces
        onSelectWorkspace={(id, name) => {
          console.log(`Selecionando workspace ID: ${id}, Nome: ${name}`);
          setSelectedWorkspaceId(id);
          setSelectedWorkspaceName(name); //nome do workspace
        }}
      /> */}
      <Workspaces
          onSelectWorkspace={(id, name) => {
            console.log(`Selecionando workspace ID: ${id}, Nome: ${name}`);
            setSelectedWorkspaceId(id);
            setSelectedWorkspaceName(name); // Armazena o nome do workspace
          }}
        />
     <Worklists workspaceId={selectedWorkspaceId} workspaceName={selectedWorkspaceName} />

    </div>
    </LayoutContainer>
  );
};

export default WorkspaceLayout;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\WorkspaceLayout\index.jsx
