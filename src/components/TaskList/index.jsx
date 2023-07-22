import React, { useState } from 'react';
import { Container, Title, Form, Input, Select, Button, Image, Video, TarefaEmLinha } from './style';

const TaskList = ({ spaces, selectedSpaceId, onTaskSubmit, setSpaces }) => {
  const selectedSpace = spaces.find((space) => space.id === selectedSpaceId);
  const [newTask, setNewTask] = useState({
    name: '',
    responsibility: '',
    dueDate: '',
    priority: 'Alto',
    image: null,
    video: null,
  });
  const [editMode, setEditMode] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({});

  const handleTaskChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' || name === 'video') {
      setNewTask((prevTask) => ({
        ...prevTask,
        [name]: files[0],
      }));
    } else {
      setNewTask((prevTask) => ({
        ...prevTask,
        [name]: value,
      }));
    }
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const imageFile = newTask.image ? URL.createObjectURL(newTask.image) : null;
    const videoFile = newTask.video ? URL.createObjectURL(newTask.video) : null;
    const taskWithFiles = {
      ...newTask,
      image: imageFile,
      video: videoFile,
    };
    onTaskSubmit(selectedSpaceId, taskWithFiles);
    setNewTask({
      name: '',
      responsibility: '',
      dueDate: '',
      priority: 'Alto',
      image: null,
      video: null,
    });
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = selectedSpace.lists.find((list) => list.id === taskId);
    setEditMode(taskId);
    setUpdatedTask({ ...taskToEdit });
  };

  const handleDeleteTask = (taskId) => {
    const updatedLists = selectedSpace.lists.filter((list) => list.id !== taskId);
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
      <Title>{selectedSpace.title}</Title>
      <ul>
        {selectedSpace.lists.map((list) => (
          <li key={list.id}>
            {editMode === list.id ? (
              <>
                <Input
                  type="text"
                  value={updatedTask.name}
                  onChange={(e) => handleTaskUpdate('name', e.target.value)}
                />
                <Input
                  type="text"
                  value={updatedTask.responsibility}
                  onChange={(e) => handleTaskUpdate('responsibility', e.target.value)}
                />
                <Input
                  type="date"
                  value={updatedTask.dueDate}
                  onChange={(e) => handleTaskUpdate('dueDate', e.target.value)}
                />
                <Select
                  value={updatedTask.priority}
                  onChange={(e) => handleTaskUpdate('priority', e.target.value)}
                >
                  <option value="Alto">Alto</option>
                  <option value="Médio">Médio</option>
                  <option value="Baixo">Baixo</option>
                </Select>
                <Button onClick={handleTaskSave}>Salvar</Button>
              </>
            ) : (
              <>
            <TarefaEmLinha>
                <p>Nome da Tarefa: {list.name}</p>
                <p>Responsável: {list.responsibility}</p>
                <p>Data de Vencimento: {list.dueDate}</p>
                <p>Prioridade: {list.priority}</p>
                {list.image && <Image src={list.image} alt="Imagem" />}
                {list.video && <Video src={list.video} controls />}
                </TarefaEmLinha>
                <Button onClick={() => handleEditTask(list.id)}>Editar</Button>
                <Button onClick={() => handleDeleteTask(list.id)}>Excluir</Button>
                
              </>
            )}
          </li>
        ))}
      </ul>
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
        <Input
          type="file"
          name="image"
          onChange={handleTaskChange}
        />
        <Input
          type="file"
          name="video"
          onChange={handleTaskChange}
        />
        <Button type="submit">Salvar Tarefa</Button>
      </Form>
    </Container>
  );
};

export default TaskList;
