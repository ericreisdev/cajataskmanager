import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: auto; 
  padding: 20px;
  position: fixed;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  border: 1px solid #ccc;  // Adiciona a borda
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  // Adiciona sombreamento

  @media (max-width: 600px) {  
    width: 90%;  
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #06d6a0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bolder;

  &:hover {
    background-color: #703ce5;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px; // Ajuste o padding aqui para que o botão fique proporcional
  color: #ffffff;
  background-color: #ff4d4d;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

export const SaveCentral = styled.div`
  display: flex;
  justify-content: flex-start;  // alinhado ao início
  align-items: center;
`

export const CloseCentral = styled.div`
  display: flex;
  justify-content: flex-start;  // alinhado ao início
  align-items: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
