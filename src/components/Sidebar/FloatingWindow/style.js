import styled from "styled-components";

export const Container = styled.div`
  background-color: #f7f9fc;
  width: 300px;
  padding: 20px;
  position: fixed;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {  
    width: 90%;  
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #3a57e8;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  p {
    margin-bottom: 10px;
    font-weight: 600;
    color: #3a57e8;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #3a57e8;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #3a57e8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #2c45c7;
    transform: translateY(-2px);
  }
`;

export const CloseButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #cc0000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #b20000;
    transform: translateY(-2px);
  }
`;

export const SaveCentral = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const CloseCentral = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
