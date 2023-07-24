// Importando os módulos necessários.
import React, { useState } from "react";
import {
  Container,
  Title,
  Form,
  Input,
  Select,
  Button,
  Image,
  Video,
  TarefaEmLinha,
} from "./style";

// Definindo o componente TaskList. Este componente recebe várias props que são usadas ao longo do componente.
const TaskList = ({ spaces, selectedSpaceId, onTaskSubmit, setSpaces }) => {
  // Buscando o espaço selecionado com base no ID do espaço selecionado.
  const selectedSpace = spaces.find((space) => space.id === selectedSpaceId);

  // Definindo o estado inicial para a nova tarefa.
  const [newTask, setNewTask] = useState({
    name: "",
    responsibility: "",
    dueDate: "",
    priority: "Alto",
    image: null,
    video: null,
    imageUrl: null,
    videoUrl: null,
  });

  // O estado do modo de edição é inicialmente nulo.
  const [editMode, setEditMode] = useState(null);

  // O estado da tarefa atualizada é inicialmente um objeto vazio.
  const [updatedTask, setUpdatedTask] = useState({
    name: "",
    responsibility: "",
    dueDate: "",
    priority: "Alto",
    image: null,
    video: null,
    imageUrl: null,
    videoUrl: null,
  });

  // Esta função é chamada quando qualquer campo de entrada de tarefa muda.
  const handleTaskChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" || name === "video") {
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

  // Esta função é chamada quando o formulário de tarefa é enviado.
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const imageFile = newTask.image ? URL.createObjectURL(newTask.image) : null;
    const videoFile = newTask.video ? URL.createObjectURL(newTask.video) : null;
    const taskWithFiles = {
      ...newTask,
      imageUrl: imageFile,
      videoUrl: videoFile,
    };
    onTaskSubmit(selectedSpaceId, taskWithFiles);
    setNewTask({
      name: "",
      responsibility: "",
      dueDate: "",
      priority: "Alto",
      image: null,
      video: null,
      imageUrl: null,
      videoUrl: null,
    });
  };

  // Esta função é chamada quando o botão de edição é clicado em uma tarefa.
  const handleEditTask = (taskId) => {
    const taskToEdit = selectedSpace.lists.find((list) => list.id === taskId);
    setEditMode(taskId);
    setUpdatedTask({ ...taskToEdit });
  };

  // Esta função é chamada quando o botão de exclusão é clicado em uma tarefa.
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

  // Esta função é chamada quando qualquer campo de entrada na tarefa de edição muda.
  const handleTaskUpdate = (field, value, isFile) => {
    if (isFile) {
      setUpdatedTask((prevTask) => ({
        ...prevTask,
        [field]: value[0],
        [field + "Url"]: URL.createObjectURL(value[0]),
      }));
    } else {
      setUpdatedTask((prevTask) => ({ ...prevTask, [field]: value }));
    }
  };

  // Esta função é chamada quando o botão de salvar é clicado na tarefa de edição.
  const handleTaskSave = () => {
    const updatedLists = selectedSpace.lists.map((list) =>
      list.id === editMode ? { ...updatedTask } : list
    );
    const updatedSpace = { ...selectedSpace, lists: updatedLists };
    const updatedSpaces = spaces.map((space) =>
      space.id === selectedSpaceId ? updatedSpace : space
    );

    const updatedImageUrls = {};
    const updatedVideoUrls = {};

    updatedLists.forEach((list) => {
      if (list.imageUrl) {
        updatedImageUrls[list.id] = list.imageUrl;
      }
      if (list.videoUrl) {
        updatedVideoUrls[list.id] = list.videoUrl;
      }
    });

    setSpaces(updatedSpaces);
    setEditMode(null);
    setUpdatedTask({});

    Object.values(updatedImageUrls).forEach((imageUrl) => {
      if (imageUrl !== updatedTask.imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    });
    Object.entries(updatedVideoUrl).forEach(([taskId, videoUrl]) => {
      if (taskId !== editMode) {
        URL.revokeObjectURL(videoUrl);
      }
    });
  };

  // Se não houver espaço selecionado, o componente não retorna nada.
  if (!selectedSpace) {
    return null;
  }

  // O que o componente retorna. Isso é o que é renderizado na tela.
  return (
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
              // Se a tarefa está em modo de edição, um formulário de entrada é renderizado para cada campo na tarefa.
              // Quando o botão de salvar é clicado, a função handleTaskSave é chamada.
              <>
                <Input
                  type="text"
                  value={updatedTask.name}
                  onChange={(e) => handleTaskUpdate("name", e.target.value)}
                  autocomplete="off"
                />
                <Input
                  type="text"
                  value={updatedTask.responsibility}
                  onChange={(e) =>
                    handleTaskUpdate("responsibility", e.target.value)
                  }
                  autocomplete="off"
                />
                <Input
                  type="date"
                  value={updatedTask.dueDate}
                  onChange={(e) => handleTaskUpdate("dueDate", e.target.value)}
                  autocomplete="off"
                />
                <Select
                  value={updatedTask.priority}
                  onChange={(e) => handleTaskUpdate("priority", e.target.value)}
                  autocomplete="off"
                >
                  <option value="Alto">Alto</option>
                  <option value="Médio">Médio</option>
                  <option value="Baixo">Baixo</option>
                </Select>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleTaskUpdate("image", e.target.files, true)
                  }
                />
                {updatedTask.imageUrl && (
                  <Image src={updatedTask.imageUrl} alt="Imagem" />
                )}
                <Input
                  type="file"
                  accept="video/*"
                  onChange={(e) =>
                    handleTaskUpdate("video", e.target.files, true)
                  }
                />
                {updatedTask.videoUrl && (
                  <Video src={updatedTask.videoUrl} controls />
                )}
                <Button onClick={handleTaskSave}>Salvar</Button>
              </>
            ) : (
              // Se a tarefa não está em modo de edição, os detalhes da tarefa são renderizados,
              // juntamente com botões de edição e exclusão.
              <>
                <TarefaEmLinha>
                  <p>Nome da Tarefa: {list.name}</p>
                  <p>Responsável: {list.responsibility}</p>
                  <p>Data de Vencimento: {list.dueDate}</p>
                  <p>Prioridade: {list.priority}</p>
                  {list.imageUrl && <Image src={list.imageUrl} alt="Imagem" />}
                  {list.videoUrl && <Video src={list.videoUrl} controls />}
                </TarefaEmLinha>
                <Button onClick={() => handleEditTask(list.id)}>Editar</Button>
                <Button onClick={() => handleDeleteTask(list.id)}>
                  Excluir
                </Button>
              </>
            )}
          </li>
        ))}
      </ul>
      {/* // Este é o formulário de entrada para uma nova tarefa.
      // Quando o formulário é enviado, a função handleTaskSubmit é chamada. */}
    </Container>
  );
};

// Exportando o componente para que ele possa ser importado e usado em outros arquivos.
export default TaskList;

