import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #4f3d9e;
  margin-bottom: 20px;
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
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #4f3d9e;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #4f3d9e;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #8b71e5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #703ce5;
  }
`;

export const TarefaEmLinha = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
  color: #4f3d9e;
  font-size: 16px;

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

export const TarefaInfo = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

export const TarefaItem = styled.p`
  margin-right: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
`;

export const Video = styled.video`
  max-width: 100%;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  & > * {
    margin-right: 10px;
  }
`;
