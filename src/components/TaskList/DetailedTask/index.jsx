import React, { useState, useRef } from "react";
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

const DetailedTask = ({ pasta, tarefa, onClose, onSave }) => {
  const [details, setDetails] = useState(tarefa.details);

  const [files, setFiles] = useState([]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["link", "image"],
      [{ color: [] }, { background: [] }], // isso habilita a paleta de cores
    ],
  };

  const handleDetailsSave = (e) => {
    e.preventDefault();
    onSave(tarefa.id, details);
    onClose();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileObjectURL = URL.createObjectURL(file);
    setFiles([...files, { name: file.name, url: fileObjectURL }]);
  };


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
          <InputFileLabel htmlFor="fileInput">
            <FaPaperclip />
          </InputFileLabel>
          <InputFile
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <Botao type="submit">
            <FaSave />
          </Botao>
          <BotaoFechar onClick={onClose}>
            <FaTimes></FaTimes>
          </BotaoFechar>
        </form>
        <div>
          <h4>Anexos:</h4>
          <ul>
          {files.map((file, index) => (
            <li key={index}>
              <a href={file.url} download={file.name}>{file.name}</a>
            </li>
          ))}
        </ul>
        </div>
      </Conteudo>
    </Janela>
  );
};

export default DetailedTask;
