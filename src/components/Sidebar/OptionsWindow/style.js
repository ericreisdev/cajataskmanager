import styled from "styled-components";

export const WindowContainer = styled.div`
  position: fixed;
  top: 0;
  right: -200px;
  width: 200px;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
`;

export const Options = styled.div`
  button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #8b71e5;
    color: #ffffff;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #703ce5;
    }
  }
`;

// Estilização para o botão de fechar
export const CloseButton = styled.button`
  background-color: #ffffff;
  color: #8b71e5;
  border: 1px solid #8b71e5;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    color: #ffffff;
    background-color: #8b71e5;
    border-color: #8b71e5;
  }
`;
