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
import { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import './styles.css';
import { uploadToStorage, writeToDatabase, readFromDatabase } from "../../../firebaseServices"; 


Quill.register('modules/imageResize', ImageResize);


const DetailedTask = ({ pasta, tarefa, onClose, onSave }) => {
  const [details, setDetails] = useState(tarefa.details);

  const [files, setFiles] = useState([]);

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    }
  };


  const handleDetailsSave = async (e) => {
    e.preventDefault();
    onSave(tarefa.id, details);
    await writeToDatabase(`tarefas/${tarefa.id}/details`, details);  // Usando writeToDatabase
    onClose();
  };
  

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = await uploadToStorage(
        `anexos/${tarefa.id}/${file.name}`,
        file
      );
      const newFile = { name: file.name, url };
      setFiles((prevFiles) => [...prevFiles, newFile]);
      await writeToDatabase(`tarefas/${tarefa.id}/anexos`, [...files, newFile]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // Carregar anexos do banco de dados
      const fetchedFiles = await readFromDatabase(`tarefas/${tarefa.id}/anexos`);
      
      if (fetchedFiles) {
        // Atualizar o estado com os anexos recuperados
        setFiles(fetchedFiles);
      }
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
          <Botao type="submit">
            SALVAR
          </Botao>
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