import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

export const ModalHeader = styled.h2`
  margin-bottom: 15px;
  color: #4f3d9e;
`;

export const ModalText = styled.p`
  margin-bottom: 15px;
  color: #4f3d9e;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${props => props.cancel ? '#4f3d9e' : '#8b71e5'};
  color: #fff;

  &:hover {
    background-color: ${props => props.cancel ? '#8b71e5' : '#4f3d9e'};
  }
`;

