import styled from 'styled-components';

export const WorkspaceContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background: #f4f4f8;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const WorkspaceHeader = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const WorkspaceList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const WorkspaceItem = styled.li`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WorkspaceLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const EditInput = styled.input`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:first-child {
    margin-right: 10px;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  color: #666;
`;

