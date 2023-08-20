import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 20px;
`;



export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #4f3d9e;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

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
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #4f3d9e;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #4f3d9e;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #8b71e5;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #703ce5;
  }
`;

export const EditButton = styled(Button)`
  visibility: hidden;  // ou 'opacity: 0;' para esconder
  transition: visibility 0.3s ease-in-out;  // ou 'transition: opacity 0.3s ease-in-out;'
`;

export const DeleteButton = styled(Button)`
  visibility: hidden;  // ou 'opacity: 0;' para esconder
  transition: visibility 0.3s ease-in-out;  // ou 'transition: opacity 0.3s ease-in-out;'
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
  color: #4f3d9e;

  &:hover ${EditButton},
  &:hover ${DeleteButton} {
    visibility: visible;  // ou 'opacity: 1;' para mostrar
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
  }

  & > div > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  & > div > div > Button {
    margin-left: 10px;
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

