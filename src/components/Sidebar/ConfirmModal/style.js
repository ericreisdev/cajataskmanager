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
  background-color: #f7f9fc;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.h2`
  margin-bottom: 20px;
  color: #3a57e8;
  font-size: 24px;
  font-weight: 600;
`;

export const ModalText = styled.p`
  margin-bottom: 20px;
  color: #3a57e8;
  font-size: 18px;
  line-height: 1.5;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #3a57e8;
  }
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${props => props.cancel ? '#3a57e8' : '#cc0000'};
  color: white;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: ${props => props.cancel ? '#2c45c7' : '#cc0000'};
    transform: translateY(-2px);
  }
`;
