import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed; /* Posição fixa na tela */
  top: 0;
  left: 0;
  width: 100%; /* Largura total da tela */
  height: 100%; /* Altura total da tela */
  background: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Garantir que apareça acima de outros elementos */
`;

export const ModalContent = styled.div`
  background: white; /* Fundo branco para o conteúdo */
  padding: 20px; /* Espaçamento interno */
  border-radius: 10px; /* Bordas arredondadas */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Sombra para destacar */
  max-width: 500px; /* Largura máxima do conteúdo */
  z-index: 1001; /* Acima do fundo do modal, mas abaixo de elementos mais importantes se houver */
  max-width: 500px; /* Largura máxima do conteúdo */
  max-height: 80vh; /* Altura máxima do conteúdo */
  overflow: auto; /* Adiciona barra de rolagem se o conteúdo exceder max-width ou max-height */
  
`;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\FlyingWindow\style.js