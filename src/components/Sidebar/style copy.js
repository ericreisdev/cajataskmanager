import styled from "styled-components";

export const Container = styled.div`
  background-color: #f7f9fc;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

  ul {
    list-style-type: none;
  }
`;

export const ButtonNewList = styled.span`
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #eceffd;
  color: #3a57e8;
  border: 2px solid #3a57e8;
  border-radius: 5px;
  font-size: 72px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #3a57e8;
    color: #eceffd;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #3a57e8;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);

  & > * {
    flex: 1;
    margin-right: 20px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > * {
      margin-right: 0;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  font-size: 16px;
  color: #3a57e8;
  width: 100%;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #3a57e8;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  // Estilos semelhantes ao Input
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #3a57e8;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #2c45c7;
    transform: translateY(-2px);
  }

  .open-button {
    margin-left: auto; // Isso vai empurrar o botão para a direita
  }
`;

export const EditButton = styled(Button)`
  background-color: #4f3d9e;

  &:hover {
    background-color: #3e3090;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #cc0000;

  &:hover {
    background-color: #b20000;
  }
`;

export const TarefaEmLinha = styled.div`
  // Estilos semelhantes ao anterior
`;

export const InputWrapper = styled.div`
  // Estilos semelhantes ao anterior
`;

export const SaveButton = styled(Button)`
  margin-top: 20px;
  background-color: #4caf50;
  
  &:hover {
    background-color: #43a047;
  }
`;
