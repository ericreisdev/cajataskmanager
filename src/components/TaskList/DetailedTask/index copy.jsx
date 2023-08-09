import React, { useState } from 'react';
import { Janela, Conteudo, NomePasta, NomeTarefa, CaixaTexto } from './style';

const DetailedTask = ({ pasta, tarefa, onClose, onSave }) => {
  const [details, setDetails] = useState(tarefa.details);

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleDetailsSave = (e) => {
    e.preventDefault();
    onSave(tarefa.id, details);
    onClose();
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
            placeholder="Digite aqui..."
          />
          <button type="submit">Salvar</button>
        </form>
        <button onClick={onClose}>Fechar</button>
      </Conteudo>
    </Janela>
  );
};

export default DetailedTask;
