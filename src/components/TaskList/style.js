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

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #3a57e8;
  width: 20;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  
  transition: background-color 0.3s ease-in-out;

  .plus-button {
    width: 70px;
  }

  &:hover {
    background-color: #eceffd;
    color: #4768e4;
  }

  .open-button {
    margin-left: auto; // Isso vai empurrar o botão para a direita
  }
`;

export const EditButton = styled(Button)`
  transition: visibility 0.3s ease-in-out; // ou 'transition: opacity 0.3s ease-in-out;'
`;

export const DeleteButton = styled(Button)`
  transition: visibility 0.3s ease-in-out; // ou 'transition: opacity 0.3s ease-in-out;'
`;

export const TarefaEmLinha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 15px;
  background-color: #f2f2f2;
  border-radius: 5px;
  font-size: 16px;
  color: #3a57e8;
  cursor: pointer;
  margin-left: 20px;

  &:hover ${EditButton}, &:hover ${DeleteButton} {
    visibility: visible; // ou 'opacity: 1;' para mostrar
  }

  & > div {
    display: flex;
    align-items: center;
    flex: 1;
  }

  & > div > p {
    margin-right: 20px;
    white-space: nowrap;
    flex-grow: 1;
    font-weight: bolder;
    overflow-wrap: break-word;
  }

  & > div > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  & > div > div > Button {
    margin-left: 10px;
  }

  & > div > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1; // Adicionado para ocupar todo o espaço disponível
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & > div > p {
      white-space: normal;
      margin-bottom: 10px;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  label {
    margin-top: 25px;
    margin-bottom: 5px;
    
  }
  input {
    margin-top: 0;
  }
`;

export const SaveButton = styled(Button)`
  margin-top: 50px;
  max-height: 6rem;
  height: 100%;
  max-width: 6rem;/ Especifique a largura máxima que você deseja
  width: 100%; // Ocupará todo o espaço disponível até o max-width
  
`;
