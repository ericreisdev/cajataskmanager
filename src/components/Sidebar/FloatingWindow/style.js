import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 300px; /* Largura da janela flutuante */
  height: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0; /* Posicionamento na lateral direita da janela */
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4f3d9e;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  p {
    margin-bottom: 10px;
    font-weight: bold;
    color: #4f3d9e;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #8b71e5;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #703ce5;
  }
`;

export const CloseButton = styled.button`
  background-color: #ffffff;
  color: #4f3d9e;
  border: 1px solid #4f3d9e;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #4f3d9e;
    color: #ffffff;
  }
`;
