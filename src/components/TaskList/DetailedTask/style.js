import styled from 'styled-components';

export const Janela = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
`;

export const Conteudo = styled.div`
  background-color: #f5f5f5;
  padding: 30px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }

  /* Media query para telas menores (por exemplo, dispositivos móveis) */
  @media (max-width: 768px) {
    width: 95%;
    font-size: 0.9rem; /* Reduzi a fonte um pouco para melhor visualização em telas menores */
  }
`;


export const NomePasta = styled.h2`
  color: #4f3d9e;
  margin-bottom: 15px;
`;

export const NomeTarefa = styled.h3`
  color: #703ce5;
  margin-bottom: 25px;
`;

export const CaixaTexto = styled.textarea`
  width: 100%;
  min-height: 200px;
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border 0.3s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  overflow: auto;
`;

export const Botao = styled.button`
  margin-top: 20px;
  background-color: #703ce5;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #4f3d9e;
  }
`;

export const BotaoFechar = styled(Botao)`
  background-color: #d1d1d1;
  margin-left: 15px;
  &:hover {
    background-color: #b9b9b9;
  }
`;


