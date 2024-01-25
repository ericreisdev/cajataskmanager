import React, { useEffect, useState } from "react";
// ...outros imports...
import { 
  WorkspaceContainer, 
  WorkspaceHeader, 
  WorkspaceList, 
  WorkspaceItem, 
  WorkspaceLink, 
  EditInput, 
  Button, 
  LoadingText 
} from './style.js'; // Importe os estilos aqui

const Workspaces = () => {
  // ...código existente...

  if (isLoading) return <LoadingText>Carregando...</LoadingText>;

  return (
    <WorkspaceContainer>
      <WorkspaceHeader>Workspaces</WorkspaceHeader>
      <AddWorkspaceForm onWorkspaceAdded={fetchWorkspaces} />
      <WorkspaceList>
        {workspaces.map(workspace => (
          <WorkspaceItem key={workspace.id}>
            {/* ...código existente... */}
          </WorkspaceItem>
        ))}
      </WorkspaceList>
    </WorkspaceContainer>
  );
};

export default Workspaces;
