import styled from 'styled-components';

export const WorktaskContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
`;

export const WorktaskList = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
`;

export const WorktaskItem = styled.div`
  background-color: white;
  margin: 10px 0;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

export const WorktaskDescription = styled.p`
  margin: 0;
  font-size: medium;
  font-weight: bolder;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  font-family: Arial, Helvetica, sans-serif;
`;

export const EditButton = styled(Button)`
  background-color: #ffc107;
  &:hover {
    background-color: #e0a800;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545;
  &:hover {
    background-color: #c82333;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #6c757d;
  &:hover {
    background-color: #5a6268;
  }
`;

export const Div = styled.div`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
 
  font-family: Arial, Helvetica, sans-serif;
`;