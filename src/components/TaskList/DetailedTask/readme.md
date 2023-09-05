{/* ...código anterior... */}

{showTaskForm && (
  <Form onSubmit={handleTaskSubmit}>
    <label>Nome da Tarefa</label>
    <Input
      type="text"
      name="name"
      value={newTask.name}
      onChange={handleTaskChange}
      placeholder="Nome da Tarefa"
    />
    
    <label>Responsável</label>
    <Input
      type="text"
      name="responsibility"
      value={newTask.responsibility}
      onChange={handleTaskChange}
      placeholder="Responsável"
    />
    
    <label>Data de Vencimento</label>
    <Input
      type="date"
      name="dueDate"
      value={newTask.dueDate}
      onChange={handleTaskChange}
    />
    
    <label>Prioridade</label>
    <Select
      name="priority"
      value={newTask.priority}
      onChange={handleTaskChange}
    >
      <option value="Alto">Alto</option>
      <option value="Médio">Médio</option>
      <option value="Baixo">Baixo</option>
    </Select>

    <Button type="submit">
      Salvar
    </Button>
  </Form>
)}

{/* ...código seguinte... */}
