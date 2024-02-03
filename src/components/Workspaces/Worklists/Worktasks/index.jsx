// Em ./components/Workspaces/Worklists/Worktasks/index.jsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getWorktasks,
  createWorktask,
  updateWorktask,
  deleteWorktask,
} from "../../../../api/worktaskService";

import {
  WorktaskContainer,
  Form,
  Textarea,
  WorktaskList,
  WorktaskItem,
  WorktaskDescription,
  Button,
  EditButton,
  DeleteButton,
  CancelButton,
} from "./style";
import { Div } from "../style";
// import { Editor } from '@tinymce/tinymce-react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // importe o CSS apropriado

import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

const Worktask = ({ workspaceId, worklistId }) => {
  // const { workspaceId, worklistId } = useParams();

  console.log(
    `Valores em Worktask: workspaceId: ${workspaceId}, worklistId: ${worklistId}`
  );

  const [worktasks, setWorktasks] = useState([]);
  const navigate = useNavigate();
  const [worktaskData, setWorktaskData] = useState({
    description: "",
  });

  useEffect(() => {
    const fetchWorktasks = async () => {
      try {
        const data = await getWorktasks(workspaceId, worklistId);
        setWorktasks(data);
      } catch (error) {
        console.error("Erro ao buscar worktasks", error);
      }
    };

    fetchWorktasks();
  }, [workspaceId, worklistId]);

  const handleEdit = (worktask) => {
    // Set the worktask as the currently editing worktask
    setWorktaskData(worktask);
  };

  const handleUpdate = async (e, worktaskId) => {
    e.preventDefault();
    try {
      const updatedWorktask = await updateWorktask(
        workspaceId,
        worklistId,
        worktaskId,
        worktaskData
      );
      // Atualizar a lista de worktasks localmente
      setWorktasks(
        worktasks.map((wt) => (wt.id === worktaskId ? updatedWorktask : wt))
      );
      // Resetar o formulário de edição
      setWorktaskData({ description: "" });
    } catch (error) {
      console.error("Erro ao atualizar worktask:", error);
    }
  };

  const handleDelete = async (worktaskId) => {
    try {
      await deleteWorktask(workspaceId, worklistId, worktaskId);
      // Refresh the list of worktasks after deletion
      const updatedWorktasks = worktasks.filter((wt) => wt.id !== worktaskId);
      setWorktasks(updatedWorktasks);
    } catch (error) {
      console.error("Erro ao excluir worktask:", error);
    }
  };

  const handleInputChange = (e) => {
    setWorktaskData({ ...worktaskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newWorktask = await createWorktask(
        workspaceId,
        worklistId,
        worktaskData
      );
      setWorktasks([...worktasks, newWorktask]);
      setWorktaskData({ description: "" }); // Resetar o formulário
    } catch (error) {
      console.error("Erro ao criar worktask:", error);
    }
  };

  const handleCreateWorktask = async (worktaskData) => {
    try {
      await createWorktask(workspaceId, worklistId, worktaskData);
      // Atualize a lista de worktasks ou redirecione conforme necessário
    } catch (error) {
      console.error("Erro ao criar worktask:", error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }], // Tamanhos de fonte
      ["bold", "italic", "underline", "strike"], // Estilos de fonte
      [{ color: [] }, { background: [] }], // Cores de fonte e de fundo
      [{ script: "sub" }, { script: "super" }], // Subscript/superscript
      [{ header: 1 }, { header: 2 }], // Estilos de cabeçalho
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ], // Listas e indentação
      ["direction", { align: [] }], // Direção e alinhamento do texto
      ["link", "image", "video", "formula"], // Inserção de mídia e fórmulas
      ["clean"], // Botão para limpar formatações
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "list",
    "bullet",
    "indent",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    <WorktaskContainer>
      {/* Formulário para adicionar uma nova Worktask */}
      <Form onSubmit={handleSubmit}>
        <h2>Adicionar detalhes</h2>
        <label>
          {/* <Textarea
            name="description"
            value={worktaskData.description}
            onChange={handleInputChange}
            required
          /> */}
          <ReactQuill
            value={worktaskData.description}
            onChange={(content) =>
              setWorktaskData({ ...worktaskData, description: content })
            }
            modules={modules}
            formats={formats}
          />
        </label>
        <Button type="submit">Salvar</Button>
      </Form>

      {/* Listagem das Worktasks */}
      <WorktaskList>
        {worktasks.map((worktask) => (
          <WorktaskItem key={worktask.id}>
            {worktaskData.id === worktask.id ? (
              // Formulário para edição de Worktask
              <Form onSubmit={(e) => handleUpdate(e, worktask.id)}>
                <label>
                  Descrição:
                  <ReactQuill
                    className="quill-editor"
                    value={worktaskData.description}
                    onChange={(content) =>
                      setWorktaskData({ ...worktaskData, description: content })
                    }
                    modules={modules}
                    formats={formats}
                  />
                  {/* <Textarea
                    name="description"
                    value={worktaskData.description}
                    onChange={handleInputChange}
                    required
                  /> */}
                </label>
                <Button as="input" type="submit" value="Salvar" />
                <CancelButton
                  onClick={() => setWorktaskData({ description: "" })}
                >
                  Cancelar
                </CancelButton>
              </Form>
            ) : (
              // Exibição padrão da Worktask
              <div>
                <div dangerouslySetInnerHTML={{ __html: worktask.description }}></div>

                <EditButton onClick={() => handleEdit(worktask)}>
                  <FaEdit></FaEdit>
                </EditButton>
                <DeleteButton onClick={() => handleDelete(worktask.id)}>
                  <FaTrash></FaTrash>
                </DeleteButton>
              </div>
            )}
          </WorktaskItem>
        ))}
      </WorktaskList>
    </WorktaskContainer>
  );
};

export default Worktask;

//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\Worklists\Worktasks\index.jsx
//// Em ./components/Workspaces/Worklists/Worktasks/index.jsx

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   getWorktasks,
//   createWorktask,
//   updateWorktask,
//   deleteWorktask,
// } from "../../../../api/worktaskService";

// import {
//   WorktaskContainer,
//   Form,
//   Textarea,
//   WorktaskList,
//   WorktaskItem,
//   WorktaskDescription,
//   Button,
//   EditButton,
//   DeleteButton,
//   CancelButton
// } from './style'
// import { Div } from "../style";
// // import { Editor } from '@tinymce/tinymce-react';
// // import ReactQuill from 'react-quill';
// // import 'react-quill/dist/quill.snow.css'; // importe o CSS apropriado
// import ReactQuill, { Quill } from 'react-quill';
// import ImageResize from 'quill-image-resize-module-react';

// Quill.register('modules/imageResize', ImageResize);

// const Worktask = () => {
//   const { workspaceId, worklistId } = useParams();
//   const [worktasks, setWorktasks] = useState([]);
//   const navigate = useNavigate();
//   const [worktaskData, setWorktaskData] = useState({
//     description: "",
//   });

//   useEffect(() => {
//     const fetchWorktasks = async () => {
//       try {
//         const data = await getWorktasks(workspaceId, worklistId);
//         setWorktasks(data);
//       } catch (error) {
//         console.error("Erro ao buscar worktasks", error);
//       }
//     };

//     fetchWorktasks();
//   }, [workspaceId, worklistId]);

//   const handleEdit = (worktask) => {
//     // Set the worktask as the currently editing worktask
//     setWorktaskData(worktask);
//   };

//   const handleUpdate = async (e, worktaskId) => {
//     e.preventDefault();
//     try {
//       const updatedWorktask = await updateWorktask(workspaceId, worklistId, worktaskId, worktaskData);
//       // Atualizar a lista de worktasks localmente
//       setWorktasks(worktasks.map(wt => wt.id === worktaskId ? updatedWorktask : wt));
//       // Resetar o formulário de edição
//       setWorktaskData({ description: "" });
//     } catch (error) {
//       console.error("Erro ao atualizar worktask:", error);
//     }
//   };

//   const handleDelete = async (worktaskId) => {
//     try {
//       await deleteWorktask(workspaceId, worklistId, worktaskId);
//       // Refresh the list of worktasks after deletion
//       const updatedWorktasks = worktasks.filter((wt) => wt.id !== worktaskId);
//       setWorktasks(updatedWorktasks);
//     } catch (error) {
//       console.error("Erro ao excluir worktask:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setWorktaskData({ ...worktaskData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newWorktask = await createWorktask(workspaceId, worklistId, worktaskData);
//       setWorktasks([...worktasks, newWorktask]);
//       setWorktaskData({ description: "" }); // Resetar o formulário
//     } catch (error) {
//       console.error("Erro ao criar worktask:", error);
//     }
//   };

//   const handleCreateWorktask = async (worktaskData) => {
//     try {
//       await createWorktask(workspaceId, worklistId, worktaskData);
//       // Atualize a lista de worktasks ou redirecione conforme necessário
//     } catch (error) {
//       console.error("Erro ao criar worktask:", error);
//     }
//   };

// const modules = {
//   toolbar: [
//     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//     [{ 'font': [] }],
//     [{ 'size': ['small', false, 'large', 'huge'] }],  // Tamanhos de fonte
//     ['bold', 'italic', 'underline', 'strike'],        // Estilos de fonte
//     [{ 'color': [] }, { 'background': [] }],          // Cores de fonte e de fundo
//     [{ 'script': 'sub'}, { 'script': 'super' }],      // Subscript/superscript
//     [{ 'header': 1 }, { 'header': 2 }],               // Estilos de cabeçalho
//     [{ 'list': 'ordered'}, { 'list': 'bullet'}, { 'indent': '-1'}, { 'indent': '+1' }], // Listas e indentação
//     ['direction', { 'align': [] }],                   // Direção e alinhamento do texto
//     ['link', 'image', 'video', 'formula'],            // Inserção de mídia e fórmulas
//     ['clean']                                         // Botão para limpar formatações
//   ],
//   clipboard: {
//     matchVisual: false,
//   },
//   // Adiciona a configuração do módulo de redimensionamento de imagem
//   imageResize: {
//     parchment: Quill.import('parchment'),
//     modules: ['Resize', 'DisplaySize'],
//   },
// };

//   const formats = [
//     'header', 'font', 'size',
//     'bold', 'italic', 'underline', 'strike',
//     'color', 'background',
//     'script', 'list', 'bullet', 'indent',
//     'direction', 'align',
//     'link', 'image', 'video', 'formula'
//   ];

//   return (
//     <WorktaskContainer>
//       {/* Formulário para adicionar uma nova Worktask */}
//       <Form onSubmit={handleSubmit}>
//         <h2>Criar Worktask</h2>
//         <label>
//           <Div>Descrição:</Div>
//           {/* <Textarea
//             name="description"
//             value={worktaskData.description}
//             onChange={handleInputChange}
//             required
//           /> */}
//           <ReactQuill
//           value={worktaskData.description}
//           onChange={(content) =>
//             setWorktaskData({ ...worktaskData, description: content })
//           }
//           modules={modules}
//           formats={formats}
//         />
//         </label>
//         <Button type="submit">Adicionar Worktask</Button>
//       </Form>

//       {/* Listagem das Worktasks */}
//       <WorktaskList>
//         {worktasks.map((worktask) => (
//           <WorktaskItem key={worktask.id}>
//             {worktaskData.id === worktask.id ? (
//               // Formulário para edição de Worktask
//               <Form onSubmit={(e) => handleUpdate(e, worktask.id)}>
//                 <label>
//                   Descrição:
//                   <ReactQuill
//           value={worktaskData.description}
//           onChange={(content) =>
//             setWorktaskData({ ...worktaskData, description: content })
//           }
//           modules={modules}
//           formats={formats}
//         />
//                   {/* <Textarea
//                     name="description"
//                     value={worktaskData.description}
//                     onChange={handleInputChange}
//                     required
//                   /> */}

//                 </label>
//                 <Button as="input" type="submit" value="Salvar" />
//                 <CancelButton onClick={() => setWorktaskData({ description: "" })}>
//                   Cancelar
//                 </CancelButton>
//               </Form>
//             ) : (
//               // Exibição padrão da Worktask
//               <div>
//                 <WorktaskDescription>{worktask.description}</WorktaskDescription>
//                 <EditButton onClick={() => handleEdit(worktask)}>Editar</EditButton>
//                 <DeleteButton onClick={() => handleDelete(worktask.id)}>Excluir</DeleteButton>
//               </div>
//             )}
//           </WorktaskItem>
//         ))}
//       </WorktaskList>
//     </WorktaskContainer>
//   );
// };

// export default Worktask;

// //C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\Workspaces\Worklists\Worktasks\index.jsx
