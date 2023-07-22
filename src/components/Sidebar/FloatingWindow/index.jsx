import React, { useState } from "react";
import { Container, Title, Form, Input, Button, CloseButton } from "./style";

const FloatingWindow = ({ onClose, onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <Container>
      <Title>Criar Novo Espaço</Title>
      <Form onSubmit={handleSubmit}>
        <p>Nome do Espaço</p>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Inserir nome do Espaço"
        />
        <Button type="submit">Criar</Button>
      </Form>
      <CloseButton onClick={onClose}>Fechar</CloseButton>
    </Container>
  );
};

export default FloatingWindow;
