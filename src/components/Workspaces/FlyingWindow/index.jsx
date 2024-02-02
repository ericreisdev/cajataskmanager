

import React from 'react';
import { Modal, ModalContent } from './style'; // Estilize conforme necessário

const FlyingWindow = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <Modal onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
          {children}
        </ModalContent>
      </Modal>
    );
  };
  
  export default FlyingWindow;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\FlyingWindow\index.jsx