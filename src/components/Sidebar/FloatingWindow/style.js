import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: auto; /* Let the height be based on content */
  padding: 20px;
  position: fixed;
  top: 50%; /* Center the top position */
  left: 50%; /* Center the left position */
  transform: translate(-50%, -50%); /* Use transform to perfectly center */

  @media (max-width: 600px) {  /* When screen width is less than or equal to 600px */
    width: 90%;  /* Give it a little margin on small screens */
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4f3d9e;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  p {
    margin-bottom: 10px;
    font-weight: bold;
    color: #4f3d9e;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #8b71e5;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #703ce5;
  }
`;

export const CloseButton = styled.button`
  background-color: #ffffff;
  color: #4f3d9e;
  border: 1px solid #4f3d9e;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #4f3d9e;
    color: #ffffff;
  }
`;

export const SaveCentral = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`

export const CloseCentral = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`