import React, { useState, useRef } from "react";
import { Janela, Conteudo, NomePasta, NomeTarefa, CaixaTexto, Botao, BotaoFechar } from "./style";

const DetailedTask = ({ pasta, tarefa, onClose, onSave }) => {
  const [details, setDetails] = useState(tarefa.details);
  const textAreaRef = useRef(null);

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleDetailsSave = (e) => {
    e.preventDefault();
    onSave(tarefa.id, details);
    onClose();
  };

  const handleBold = (e) => {
    e.preventDefault();
    document.execCommand('bold', false, null);
    textAreaRef.current.focus();
  };

  const handleItalic = (e) => {
    e.preventDefault();
    document.execCommand('italic', false, null);
    textAreaRef.current.focus();
  };

  return (
    <Janela onClick={onClose}>
      <Conteudo onClick={(e) => e.stopPropagation()}>
        <NomePasta>{pasta}</NomePasta>
        <NomeTarefa>{tarefa.nome}</NomeTarefa>
        <form onSubmit={handleDetailsSave}>
          <CaixaTexto
            value={details}
            onChange={handleDetailsChange}
            ref={textAreaRef}
          />
          <Botao onClick={handleBold}>Negrito</Botao>
          <Botao onClick={handleItalic}>Itálico</Botao>
          <Botao type="submit">Salvar</Botao>
          <BotaoFechar onClick={onClose}>Fechar</BotaoFechar>
        </form>
      </Conteudo>
    </Janela>
  );
};

export default DetailedTask;
