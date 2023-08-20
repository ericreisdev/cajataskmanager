Para tornar a interface mais intuitiva com ícones, você pode usar bibliotecas de ícones como `react-icons`, que já parece estar em uso no seu projeto.

Aqui estão algumas sugestões para substituir os botões de texto por ícones:

1. Substituir "Criar Nova Lista" por um ícone de "Adicionar" (+).
2. Substituir "Detalhes de {list.name}" por um ícone de "Informações" (i).

Vamos fazer essas alterações no seu componente `TaskList`.

```jsx

// ... outros imports ...

const TaskList = ({ /* ... seus props ... */ }) => {
  // ... seu estado e lógica ...

  return (
    <Container>
      {tarefaSelecionada && (
        // ... seu DetailedTask ...
      )}
      <Title>{selectedSpace.title}</Title>

      {/* Botão para criar nova lista */}
      <Button onClick={toggleTaskForm}>
        <FaPlus /> {/* ícone de Adicionar */}
      </Button>

      {/* ... o resto do seu formulário ... */}

      <ul>
        {selectedSpace.lists.map((list) => (
          <li key={list.id}>
            {/* ... sua lógica para editar ou excluir ... */}

            {/* Botão para abrir detalhes da tarefa */}
            <Button onClick={() => abrirTarefa(selectedSpace, list)}>
              <FaInfoCircle /> {/* ícone de Informações */}
            </Button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TaskList;
```

Neste exemplo, usei o ícone `FaPlus` para "Criar Nova Lista" e o ícone `FaInfoCircle` para "Detalhes de {list.name}". Você pode escolher outros ícones que você achar mais adequados. O importante é que eles sejam intuitivos para os usuários.