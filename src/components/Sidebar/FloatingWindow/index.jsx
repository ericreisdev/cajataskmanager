import React, { useState } from "react";
import { Container, Title, Form, Input, Button, CloseButton, SaveCentral, CloseCentral, ButtonContainer } from "./style";
import { FaSave, FaTimes } from "react-icons/fa";

const FloatingWindow = ({ onClose, onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title: input }); // Altere para enviar um objeto
    setInput("");
  };
  

  return (
    <Container>
      <Title>Adicionar Pasta</Title>
      <Form onSubmit={handleSubmit}>
        <p>Nome da Pasta</p>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Inserir nome da Pasta"
        />
        <ButtonContainer>
        <SaveCentral><Button type="submit">SALVAR</Button></SaveCentral>
        <CloseCentral>
      <CloseButton onClick={onClose}><FaTimes/></CloseButton>  
      </CloseCentral>
      </ButtonContainer>
      </Form>
     
      
    </Container>
  );
};

export default FloatingWindow;
