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
    import {
      FaPlus,
      FaInfoCircle,
      FaTrash,
      FaEdit,
      FaSave,
      FaAlignRight,
      FaAlignCenter,
    } from "react-icons/fa";
    import { getWorklists, createWorklist, updateWorklist, deleteWorklist } from "../../api/worklistSevice";
    import axios from "axios";

    const TaskList = ({ spaces, selectedSpaceId, onTaskSubmit, setSpaces }) => {
      const [tasks, setTasks] = useState([]);
      const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

      const [showTaskForm, setShowTaskForm] = useState(false);

      // Em TaskList.jsx
      useEffect(() => {
        const loadWorklistsAndTasks = async () => {
          try {
            console.log(`Carregando worklists para spaceId: ${selectedSpaceId}`);
            const selectedSpace = spaces.find(space => space.id === selectedSpaceId);
            if (!selectedSpace) {
              console.error("Espaço selecionado não encontrado.");
              return;
            }
      
            const worklists = await getWorklists(selectedSpaceId);
            console.log(`Worklists carregadas para spaceId: ${selectedSpaceId}`, worklists);
            // Resto do seu código...
          } catch (error) {
            console.error("Erro ao carregar worklists e tarefas:", error);
          }
        };
      
        loadWorklistsAndTasks();
      }, [selectedSpaceId, spaces]);
      
      useEffect(() => {
        console.log("Estado atual de 'spaces':", spaces);
      }, [spaces]);

      const toggleTaskForm = () => {
        setShowTaskForm(!showTaskForm);
      };

      const abrirTarefa = (tarefa) => {
        const selectedSpace = spaces.find(space => space.id === selectedSpaceId);
        
        if (!selectedSpace) {
          console.error("Espaço selecionado não encontrado.");
          return;
        }
      
        console.log("Espaço selecionado:", selectedSpace);
      
        let worklistFound = null;
        for (let list of selectedSpace.lists) {
          console.log("Verificando lista:", list);
          if (Array.isArray(list.tasks) && list.tasks.some(task => task.id === tarefa.id)) {
            worklistFound = list;
            break;
          }
        }
      
        if (!worklistFound) {
          console.error("Nenhuma worklist encontrada para a tarefa.");
          return;
        }
      
        console.log("Worklist encontrada:", worklistFound);
      
        // Configurar a tarefa selecionada
        setTarefaSelecionada({ 
          pasta: selectedSpace.title, 
          tarefa: {
            ...tarefa,
            worklistName: worklistFound.name
          } 
        });
      };
      
      
    
    
    

      const fecharTarefa = () => {
        setTarefaSelecionada(null);
      };

      const selectedSpace = spaces.find((space) => space.id === selectedSpaceId);

    

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
        if (!dateString) return "Data não definida";
        const date = new Date(dateString);
        if (isNaN(date)) return "Data inválida";
      
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
      };

      const handleTaskChange = (e) => {
        const { name, value } = e.target;
        console.log("Mudança no campo: ", name, value); // Adicionar esta linha
        setNewTask((prevTask) => ({
          ...prevTask,
          [name]: value,
        }));
      };

      const handleTaskSubmit = async (e) => {
        e.preventDefault();
        console.log("Submetendo tarefa", newTask);
      
        try {
          const newWorklist = await createWorklist(selectedSpaceId, newTask);
          console.log("Nova worklist criada:", newWorklist);
      
          setSpaces(prevSpaces =>
            prevSpaces.map(space =>
              space.id === selectedSpaceId
                ? {
                    ...space,
                    lists: Array.isArray(space.lists) 
                             ? [...space.lists, newWorklist]
                             : [newWorklist],
                  }
                : space
            )
          );
        } catch (error) {
          console.error("Erro ao criar worklist:", error);
        }
      };
      
      

      const handleTaskDetailsSave = (taskId, details) => {
        console.log("Detalhes recebidos:", details);
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

      const handleDeleteTask = async (taskId) => {
        const confirmDelete = window.confirm(
          "Você tem certeza que deseja excluir esta tarefa?"
        );
        if (confirmDelete) {
          try {
            await deleteTask(selectedSpaceId, taskId);
            // Código para atualizar o estado após a exclusão...
          } catch (error) {
            console.error("Erro ao excluir tarefa:", error);
            alert("Erro ao excluir tarefa");
          }
        }
      };

      const handleTaskUpdate = (field, value) => {
        setUpdatedTask((prevTask) => ({ ...prevTask, [field]: value }));
      };

      const handleTaskSave = async () => {
        try {
          const updatedWorklist = await updateTask(
            selectedSpaceId,
            editMode,
            updatedTask
          );
          // Código para atualizar o estado após a atualização...
        } catch (error) {
          console.error("Erro ao atualizar tarefa:", error);
          alert("Erro ao atualizar tarefa");
        }
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
          <Button style={{ marginBottom: "" }} onClick={toggleTaskForm}>
            Nova Tarefa
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
                ></Input>
              </InputWrapper>
              <SaveButton type="submit">SALVAR</SaveButton>
            </Form>
          )}
          <ul>
          {tasks.length > 0 ? (
            tasks.map((task) => (
                <li
                  key={task.id}
                  onDoubleClick={() => abrirTarefa(selectedSpace, task)}
                >
                  {editMode === task.id ? (
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
                        onChange={(e) =>
                          handleTaskUpdate("dueDate", e.target.value)
                        }
                      />
                      <Input
                        value={updatedTask.observation}
                        onChange={(e) =>
                          handleTaskUpdate("observation", e.target.value)
                        }
                      ></Input>
                      <SaveButton onClick={handleTaskSave}>SALVAR</SaveButton>
                    </>
                  ) : (
                    <>
                      <TarefaEmLinha>
                        <div>
                          <p
                            style={{
                              fontWeight: "bolder",
                              backgroundColor: "#3a57e8",
                              color: "white",
                              padding: "10px",
                              borderRadius: "7px",
                            }}
                            title="Clique para editar"
                          >
                            {" "}
                            {task.name}
                          </p>
                          <div></div>
                          <p title="Clique para editar">
                            Responsável: {task.responsibility}
                          </p>
                          <p title="Clique para editar">
                            Data: {formatDate(task.dueDate)}
                          </p>
                          <p
                            style={{ display: "flex", flex: "flex-wrap" }}
                            title="Clique para editar"
                          >
                            Observações: {task.observation}
                          </p>
                        </div>
                        <div>
                          <Button onClick={() => abrirTarefa(selectedSpace, task)}>
                            Abrir
                          </Button>
                          <EditButton onClick={() => handleEditTask(task.id)}>
                            <FaEdit />
                          </EditButton>
                          <DeleteButton onClick={() => handleDeleteTask(task.id)}>
                            <FaTrash />
                          </DeleteButton>
                        </div>
                      </TarefaEmLinha>
                    </>
                  )}
                </li>
              ))
            ) : (
              <li>Nenhuma tarefa disponível</li>
            )}
          </ul>
        </Container>
      );
    };

    export default TaskList;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\TaskList\index.jsx