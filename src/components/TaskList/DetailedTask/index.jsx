import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FaPaperclip, FaSave, FaTimes } from "react-icons/fa";
import Draggable from 'react-draggable';  // Importação adicional aqui
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
import {
  writeToDatabase,
  readFromDatabase,
  uploadToStorage,
} from "../../../firebaseServices";
import { Resizable } from "react-resizable";

const DetailedTask = ({ pasta, tarefa, onClose, onSave }) => {
  const [details, setDetails] = useState(tarefa.details || "");
  const [files, setFiles] = useState([]);

  const [showUrl, setShowUrl] = useState(false);


  // Inicializando editorState com EditorState.createEmpty()
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [error, setError] = useState(null);

  // Aqui é onde você trata dos detalhes.
  useEffect(() => {
    if (tarefa.details) {
      try {
        // Tente fazer o JSON.parse(). Se falhar, irá para o bloco catch.
        const parsedDetails = JSON.parse(tarefa.details);

        // Se chegou aqui, significa que o JSON.parse foi bem-sucedido.
        const contentState = convertFromRaw(parsedDetails);
        const newEditorState = EditorState.createWithContent(contentState);
        setEditorState(newEditorState);
      } catch (e) {
        // Lidando com o erro de JSON.parse
        if (e instanceof SyntaxError) {
          console.error("JSON inválido:", tarefa.details);
        } else {
          console.error("Outro erro:", e);
        }
        setEditorState(EditorState.createEmpty());
      }
    }
  }, [tarefa.details]);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  useEffect(() => {
    const fetchAttachments = async () => {
      const attachments = await readFromDatabase(`tarefas/${tarefa.id}/anexos`);
      setFiles(attachments || []);
    };
    fetchAttachments();
  }, [tarefa.id]);

  const handleDetailsSave = async (e) => {
    e.preventDefault();
    const details = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    onSave(tarefa.id, details);
    await writeToDatabase(`tarefas/${tarefa.id}/details`, details);
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

  const uploadImageCallBack = async (file) => {
    const url = await uploadToStorage(`imagens/${tarefa.id}/${file.name}`, file);
    setShowUrl(false); // Definir como false para esconder o URL após o upload
    return {
      data: {
        link: url,
        component: (
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <Resizable
              width={200}
              height={200}
              minConstraints={[100, 100]}
              maxConstraints={[500, 500]}
              lockAspectRatio={true}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            >
              <img 
                src={url} 
                alt="example" 
                width="100%" 
                height="100%" 
                style={{ objectFit: 'cover' }}
                onClick={() => console.log("Imagem clicada")}  
              />
            </Resizable>
          </div>
        ),
      },
    };
  };
  

  return (
    <Janela onClick={onClose}>
      
      <Conteudo onClick={(e) => e.stopPropagation()}>
        <NomePasta>{pasta}</NomePasta>
        <NomeTarefa>{tarefa.nome}</NomeTarefa>
        <form onSubmit={handleDetailsSave}>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                uploadCallback: uploadImageCallBack,
                alt: { present: true, mandatory: false },
              },
            }}
          />
          {showUrl && <label for="file" class="rdw-image-modal-upload-option-label">{url}</label>}

          <div>
            {/* Adicionado aqui: ícone e campo de input para anexar arquivos */}
            <InputFile type="file" id="fileInput" onChange={handleFileUpload} />
            <InputFileLabel htmlFor="fileInput">
              <FaPaperclip /> Anexar
            </InputFileLabel>
            {/* Fim da adição */}

            <Botao type="submit">SALVAR</Botao>
            <BotaoFechar onClick={onClose}>
              <FaTimes />
            </BotaoFechar>
          </div>
        </form>
        <div>
          <h4>Anexos:</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.url ? (
                  <a href={file.url} target="_blank" rel="noopener noreferrer">
                    {file.name}
                  </a>
                ) : (
                  <span>{file.name} (Não disponível)</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Conteudo>
    </Janela>
  );
};

export default DetailedTask;
