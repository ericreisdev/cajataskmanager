import React, { useState } from "react";
import {
  Container,
  Title,
  Form,
  Input,
  Select,
  Button,
  TarefaEmLinha,
} from "./style";
import DetailedTask from "./DetailedTask/index";

const TaskList = ({ spaces, selectedSpaceId, onTaskSubmit, setSpaces }) => {
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  const abrirTarefa = (pasta, tarefa) => {
    setTarefaSelecionada({ pasta: pasta.title, tarefa });
  };

  const fecharTarefa = () => {
    setTarefaSelecionada(null);
  };

  const selectedSpace = spaces.find((space) => space.id === selectedSpaceId);

  const [newTask, setNewTask] = useState({
    name: "",
    responsibility: "",
    dueDate: "",
    priority: "Alto",
  });

  const [editMode, setEditMode] = useState(null);

  const [updatedTask, setUpdatedTask] = useState({
    name: "",
    responsibility: "",
    dueDate: "",
    priority: "Alto",
  });

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    onTaskSubmit(selectedSpaceId, { ...newTask, details: "" });
    setNewTask({
      name: "",
      responsibility: "",
      dueDate: "",
      priority: "Alto",
    });
  };

  const handleTaskDetailsSave = (taskId, details) => {
    const updatedLists = selectedSpace.lists.map((list) =>
      list.id === taskId ? { ...list, details } : list
    );
    const updatedSpace = { ...selectedSpace, lists: updatedLists };
    const updatedSpaces = spaces.map((space) =>
      space.id === selectedSpaceId ? updatedSpace : space
    );
    setSpaces(updatedSpaces);
  };


  const handleEditTask = (taskId) => {
    const taskToEdit = selectedSpace.lists.find((list) => list.id === taskId);
    setEditMode(taskId);
    setUpdatedTask({ ...taskToEdit });
  };

  const handleDeleteTask = (taskId) => {
    const updatedLists = selectedSpace.lists.filter(
      (list) => list.id !== taskId
    );
    const updatedSpace = { ...selectedSpace, lists: updatedLists };
    const updatedSpaces = spaces.map((space) =>
      space.id === selectedSpaceId ? updatedSpace : space
    );
    setSpaces(updatedSpaces);
    setEditMode(null);
  };

  const handleTaskUpdate = (field, value) => {
    setUpdatedTask((prevTask) => ({ ...prevTask, [field]: value }));
  };

  const handleTaskSave = () => {
    const updatedLists = selectedSpace.lists.map((list) =>
      list.id === editMode ? { ...updatedTask } : list
    );
    const updatedSpace = { ...selectedSpace, lists: updatedLists };
    const updatedSpaces = spaces.map((space) =>
      space.id === selectedSpaceId ? updatedSpace : space
    );
    setSpaces(updatedSpaces);
    setEditMode(null);
    setUpdatedTask({});
  };

  if (!selectedSpace) {
    return null;
  }

  return (
    <Container>
      {tarefaSelecionada && (
        <DetailedTask
          pasta={tarefaSelecionada.pasta}
          tarefa={tarefaSelecionada.tarefa}
          onClose={fecharTarefa}
          onSave={handleTaskDetailsSave}
        />
      )}

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
        <Button type="submit">Salvar Tarefa</Button>
      </Form>

      <ul>
        {selectedSpace.lists.map((list) => (
          <li key={list.id}>
            {editMode === list.id ? (
              <>
                <Input
                  type="text"
                  value={updatedTask.name}
                  onChange={(e) => handleTaskUpdate("name", e.target.value)}
                />
                <Input
                  type="text"
                  value={updatedTask.responsibility}
                  onChange={(e) =>
                    handleTaskUpdate("responsibility", e.target.value)
                  }
                />
                <Input
                  type="date"
                  value={updatedTask.dueDate}
                  onChange={(e) => handleTaskUpdate("dueDate", e.target.value)}
                />
                <Select
                  value={updatedTask.priority}
                  onChange={(e) => handleTaskUpdate("priority", e.target.value)}
                >
                  <option value="Alto">Alto</option>
                  <option value="Médio">Médio</option>
                  <option value="Baixo">Baixo</option>
                </Select>
                <Button onClick={handleTaskSave}>Salvar</Button>
              </>
            ) : (
              <>
                <TarefaEmLinha onClick={() => abrirTarefa(selectedSpace, list)}>
                  <div>
                    <p title="Clique para editar">Nome: {list.name}</p>
                    <p title="Clique para editar">
                      Responsável: {list.responsibility}
                    </p>
                    <p title="Clique para editar">Data: {list.dueDate}</p>
                    <p title="Clique para editar">
                      Prioridade: {list.priority}
                    </p>
                  </div>
                  <div>
                    <Button onClick={() => handleEditTask(list.id)}>✏️</Button>
                    <Button onClick={() => handleDeleteTask(list.id)}>
                      🗑️
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
