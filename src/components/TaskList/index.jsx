import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Form,
  Input,
  Select,
  Button,
  EditButton,
  DeleteButton,
  TarefaEmLinha,
  ButtonNewList,
  InputWrapper,
  SaveButton,
} from "./style";
import DetailedTask from "./DetailedTask/index";
import { FaPlus, FaInfoCircle, FaTrash, FaEdit, FaSave, FaAlignRight, FaAlignCenter } from "react-icons/fa";
import { writeToDatabase, readFromDatabase, uploadToStorage, downloadFromStorage } from "../../firebaseServices";


const TaskList = ({ spaces, selectedSpaceId, onTaskSubmit, setSpaces }) => {
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  const [showTaskForm, setShowTaskForm] = useState(false);

  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  const abrirTarefa = (pasta, tarefa) => {
    setTarefaSelecionada({ pasta: pasta.title, tarefa });
  };

  const fecharTarefa = () => {
    setTarefaSelecionada(null);
  };

  const selectedSpace = spaces.find((space) => space.id === selectedSpaceId);

  useEffect(() => {
    if (selectedSpace) {
      localStorage.setItem("tasks", JSON.stringify(selectedSpace.lists));
    }
  }, [selectedSpace]);

  const [newTask, setNewTask] = useState({
    name: "",
    responsibility: "",
    dueDate: "",
    observation: "",
  });

  const [editMode, setEditMode] = useState(null);

  const [updatedTask, setUpdatedTask] = useState({
    name: "",
    responsibility: "",
    dueDate: "",
    observation: "",
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    console.log("Mudança no campo: ", name, value);  // Adicionar esta linha
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    console.log("Nova tarefa: ", newTask);  // Adicionar esta linha

    if (newTask.name.trim() === "" || newTask.responsibility.trim() === "") {
      alert("Os campos nome e responsável são obrigatórios");
      return;
    }
    onTaskSubmit(selectedSpaceId, { ...newTask, details: "" });
    setNewTask({
      name: "",
      responsibility: "",
      dueDate: "",
      observation: "",
    });
  };

  const handleTaskDetailsSave = (taskId, details) => {
    console.log('Detalhes recebidos:', details);
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
    const confirmDelete = window.confirm(
      "Você tem certeza que deseja excluir esta lista?"
    );
    if(confirmDelete){
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
    }
    

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
      <ButtonNewList>Nova Lista </ButtonNewList>
      <Button onClick={toggleTaskForm}>
          Criar
      </Button>{" "}
      
      
      {showTaskForm && (
        <Form onSubmit={handleTaskSubmit}>
           <InputWrapper>
      <label>Nome da Tarefa</label>
      <Input
        type="text"
        name="name"
        value={newTask.name}
        onChange={handleTaskChange}
        placeholder="Nome da Tarefa"
      />
    </InputWrapper>

    <InputWrapper>
      <label>Responsável</label>
      <Input
        type="text"
        name="responsibility"
        value={newTask.responsibility}
        onChange={handleTaskChange}
        placeholder="Responsável"
      />
    </InputWrapper>

    <InputWrapper>
      <label>Data de Vencimento</label>
      <Input
        type="date"
        name="dueDate"
        value={newTask.dueDate}
        onChange={handleTaskChange}
      />
    </InputWrapper>

    <InputWrapper>
      <label>Observações</label>
      <Input
        name="observation"
        value={newTask.observation}
        onChange={handleTaskChange}
        placeholder="Observações"
      >
      
      </Input>
    </InputWrapper>
    <SaveButton type="submit">
            SALVAR
          </SaveButton>
        </Form>
      )}
      <ul>
        {selectedSpace.lists.map((list) => (
          <li key={list.id} onDoubleClick={() => abrirTarefa(selectedSpace, list)}>
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
                <Input
                  value={updatedTask.observation}
                  onChange={(e) => handleTaskUpdate("observation", e.target.value)}
                >              
                </Input>
                <SaveButton onClick={handleTaskSave}>SALVAR</SaveButton>
              </>
            ) : (
              <>
                <TarefaEmLinha>
                  <div>
                    <p title="Clique para editar">Nome: {list.name}</p>
                    <p title="Clique para editar">
                      Responsável: {list.responsibility}
                    </p>
                    <p title="Clique para editar">
                      Data: {formatDate(list.dueDate)}
                    </p>
                    <p title="Clique para editar">
                      Observações: {list.observation}
                    </p>
                  </div>
                  <div>
                    <EditButton onClick={() => handleEditTask(list.id)}>
                      <FaEdit />
                    </EditButton>
                    <DeleteButton onClick={() => handleDeleteTask(list.id)}>
                      <FaTrash />
                    </DeleteButton>
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
