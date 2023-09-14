// Claro, posso te ajudar com o código React. Você quer que o botão "Abrir" fique ao lado dos botões "Editar" e "Deletar", certo? 

// Aqui está o código atualizado. Vou comentar as alterações que fiz para que você possa entender.

// ```jsx
// ... (parte anterior do código permanece igual)

  return (
    <Container>
      {/* ... */}
      <ul>
        {selectedSpace.lists.map((list) => (
          <li
            key={list.id}
            onDoubleClick={() => abrirTarefa(selectedSpace, list)}
          >
            {editMode === list.id ? (
              <>
                {/* ... */}
              </>
            ) : (
              <>
                <TarefaEmLinha>
                  <div>
                    {/* ... */}
                  </div>
                  <div>
                    {/* ... */}
                    <DeleteButton onClick={() => handleDeleteTask(list.id)}>
                      <FaTrash />
                    </DeleteButton>

                    {/* Movi o botão "Abrir" para ficar ao lado dos botões "Editar" e "Deletar" */}
                    <Button
                      className="open-button"
                      onClick={() => abrirTarefa(selectedSpace, list)}
                    >
                      Abrir
                    </Button>
                  </div>
                </TarefaEmLinha>
              </>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TaskList;

// ... (estilos permanecem iguais)
// ```

// As mudanças estão principalmente na estrutura do JSX, onde eu movi o botão "Abrir" para ficar ao lado dos botões "Editar" e "Deletar".

// Espero que isso ajude! Se você tiver mais perguntas ou precisar de mais esclarecimentos, fique à vontade para perguntar.