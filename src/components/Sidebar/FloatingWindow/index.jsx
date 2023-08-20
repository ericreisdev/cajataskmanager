import React, { useState } from "react";
import { Container, Title, Form, Input, Button, CloseButton, SaveCentral, CloseCentral } from "./style";
import { FaSave, FaTimes } from "react-icons/fa";

const FloatingWindow = ({ onClose, onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
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
        <SaveCentral><Button type="submit"><FaSave/></Button></SaveCentral>
        
      </Form>
      <CloseCentral>
      <CloseButton onClick={onClose}><FaTimes/></CloseButton>  
      </CloseCentral>
      
    </Container>
  );
};

export default FloatingWindow;
