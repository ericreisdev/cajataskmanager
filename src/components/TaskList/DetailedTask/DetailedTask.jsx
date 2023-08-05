
import React from 'react';
import { Janela, Conteudo, NomePasta, NomeTarefa, CaixaTexto } from './style';

const DetailedTask = ({ pasta, tarefa, onClose }) => {
  return (
    <Janela onClick={onClose}>
      <Conteudo onClick={(e) => e.stopPropagation()}>
        <NomePasta>{pasta}</NomePasta>
        <NomeTarefa>{tarefa.nome}</NomeTarefa>
        <CaixaTexto placeholder="Digite aqui..." />
        <button onClick={onClose}>Fechar</button>
      </Conteudo>
    </Janela>
  );
};

export default DetailedTask;
