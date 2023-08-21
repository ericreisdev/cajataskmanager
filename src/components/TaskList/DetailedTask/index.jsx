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

const DetailedTask = ({ pasta, tarefa, onClose, onSave }) => {
  const [details, setDetails] = useState(tarefa.details);

  const [files, setFiles] = useState([]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["link", "image"],
      [{ color: [] }, { background: [] }], // Habilitar paleta de cores
      [{ size: ["small", false, "large", "huge"] }], // Tamanho da fonte
    ],
  };


  const handleDetailsSave = (e) => {
    e.preventDefault();
    onSave(tarefa.id, details);
    onClose();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const fileObjectURL = URL.createObjectURL(file);
    const newFile = { name: file.name, url: fileObjectURL };
    setFiles([...files, newFile]);

    await axios.post('http://localhost:5000/upload', newFile);
  };

  useEffect(() => {
    const fetchData = async () => {
      // newFile is not defined in this context.
      // await axios.post('http://localhost:5000/upload', newFile);
    };
  
    fetchData();
}, []);



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
