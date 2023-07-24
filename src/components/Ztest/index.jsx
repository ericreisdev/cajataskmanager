<Container>
      <Title>{selectedSpace.title}</Title>
      <Form onSubmit={handleTaskSubmit}>
        <Input
          type="text"
          name="name"
          value={newTask.name}
          onChange={handleTaskChange}
          placeholder="Nome da Tarefa"
        />
        <Input
          type="text"
          name="responsibility"
          value={newTask.responsibility}
          onChange={handleTaskChange}
          placeholder="Responsável"
        />
        <Input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleTaskChange}
        />
        <Select
          name="priority"
          value={newTask.priority}
          onChange={handleTaskChange}
        >
          <option value="Alto">Alto</option>
          <option value="Médio">Médio</option>
          <option value="Baixo">Baixo</option>
        </Select>
        {/* Modificando o rótulo dos inputs de arquivos */}
        <label htmlFor="image">Inserir Foto:</label>
        <Input
          type="file"
          id="image"
          name="image"
          onChange={handleTaskChange}
        />
        {newTask.imageUrl && <Image src={newTask.imageUrl} alt="Imagem" />}
        <label htmlFor="video">Inserir Vídeo:</label>
        <Input
          type="file"
          id="video"
          name="video"
          onChange={handleTaskChange}
        />
        {newTask.videoUrl && <Video src={newTask.videoUrl} controls />}
        <Button type="submit">Salvar Tarefa</Button>
      </Form>

      <ul>
        {selectedSpace.lists.map((list) => (
          <li key={list.id}>
            {editMode === list.id ? (
              // Modificando o formulário de edição da tarefa
              // ...
            ) : (
              // Renderizando os detalhes da tarefa em um card
              <Card>
                <CardHeader>
                  <p>Nome da Tarefa: {list.name}</p>
                  <p>Responsável: {list.responsibility}</p>
                  <p>Data de Vencimento: {list.dueDate}</p>
                  <p>Prioridade: {list.priority}</p>
                </CardHeader>
                <CardBody>
                  {list.imageUrl && <Image src={list.imageUrl} alt="Imagem" />}
                  {list.videoUrl && <Video src={list.videoUrl} controls />}
                </CardBody>
                <CardButtons>
                  <Button onClick={() => handleEditTask(list.id)}>Editar</Button>
                  <Button onClick={() => handleDeleteTask(list.id)}>
                    Excluir
                  </Button>
                </CardButtons>
              </Card>
            )}
          </li>
        ))}
      </ul>
    </Container>