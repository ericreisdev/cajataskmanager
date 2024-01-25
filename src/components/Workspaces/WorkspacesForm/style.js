import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  width: 80%;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  &:hover {
    background-color: #0056b3;
  }
`;
