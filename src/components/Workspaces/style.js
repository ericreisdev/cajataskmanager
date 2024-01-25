import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Definições de estilos com styled-components
export const WorkspaceContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-weight: bolder;
`;

export const WorkspaceList = styled.ul`
  list-style: none;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-weight: bolder;
`;

export const WorkspaceItem = styled.li`
  background-color: white;
  margin: 10px 0;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-weight: bolder;
`;

export const WorkspaceTitle = styled.h1`
  font-size: 24px;
  color: #333;
  font-weight: bold;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
   font-weight: bolder;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  font-family: Arial, Helvetica, sans-serif;
  
`;

export const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  font-family: Arial, Helvetica, sans-serif;
  
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-right: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-weight: bolder;
`;