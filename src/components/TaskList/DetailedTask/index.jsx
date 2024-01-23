import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaPaperclip, FaSave, FaTimes } from "react-icons/fa";
import {
  Janela,
  Conteudo,
  NomePasta,
  NomeTarefa,
  CaixaTexto,
  Botao,
  BotaoFechar,
  InputFile,
  InputFileLabel,
} from "./style";
import axios from "axios";
import { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import "./styles.css";

import {
  getWorktaskDetails,
  updateWorktask,
  uploadTaskAttachment,
  getWorktasks,
} from "../../../api/workdetailService";

Quill.register("modules/imageResize", ImageResize);

const DetailedTask = ({ pasta, tarefa, onClose, onSave }) => {
  if (!tarefa) {
    return null;
  }
  const [details, setDetails] = useState(tarefa.details);

  const [files, setFiles] = useState([]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
  };

  const handleDetailsSave = async (e) => {
    e.preventDefault();
    try {
      await updateWorktask(tarefa.worklistId, tarefa.id, { details: details });
      // Outras ações após salvar
    } catch (error) {
      console.error("Erro ao salvar detalhes da worktask:", error);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await uploadTaskAttachment(
          tarefa.worklistId,
          tarefa.id,
          formData
        );
        // Lógica para lidar com a resposta
      } catch (error) {
        console.error("Erro ao fazer upload do arquivo:", error);
      }
    }
  };

  useEffect(() => {
    const fetchTaskDetails = async () => {
      console.log("Tarefa:", tarefa); // Adicione esta linha para depuração
      if (tarefa && tarefa.id && tarefa.worklistId) {
        const taskDetails = await getWorktaskDetails(
          tarefa.worklistId,
          tarefa.id
        );
        // Restante do código...
      }
    };

    fetchTaskDetails();
  }, [tarefa]);

  return (
    <Janela onClick={onClose}>
      <Conteudo onClick={(e) => e.stopPropagation()}>
        <NomePasta>{pasta}</NomePasta>
        <NomeTarefa>{tarefa.nome}</NomeTarefa>
        <form onSubmit={handleDetailsSave}>
          <ReactQuill
            className="editor-quill"
            value={details}
            modules={modules}
            onChange={setDetails}
          />
          <div className="align-buttons">
            <InputFileLabel htmlFor="fileInput">
              <FaPaperclip />
            </InputFileLabel>
            <InputFile
              type="file"
              id="fileInput"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <Botao type="submit">SALVAR</Botao>
            <BotaoFechar onClick={onClose}>
              <FaTimes></FaTimes>
            </BotaoFechar>
          </div>
        </form>
        <div>
          <h4>Anexos:</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <a href={file.url} download={file.name}>
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Conteudo>
    </Janela>
  );
};

export default DetailedTask;
//C:\Users\Eric\OneDrive\Área de Trabalho\Projetos\Digital Mais\digital-mais\src\components\TaskList\DetailedTask\index.jsx