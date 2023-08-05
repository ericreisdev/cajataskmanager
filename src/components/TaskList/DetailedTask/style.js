
import styled from 'styled-components';

export const Janela = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Conteudo = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
`;

export const NomePasta = styled.h2`
  color: #4f3d9e;
`;

export const NomeTarefa = styled.h3`
  color: #703ce5;
`;

export const CaixaTexto = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;
