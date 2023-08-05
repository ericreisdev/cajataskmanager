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
      <Title>Adicionar Pasta</Title>
      <Form onSubmit={handleSubmit}>
        <p>Nome da Pasta</p>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Inserir nome da Pasta"
        />
        <Button type="submit">+ Salvar Pasta</Button>
      </Form>
      <CloseButton onClick={onClose}>Fechar</CloseButton>
    </Container>
  );
};

export default FloatingWindow;
