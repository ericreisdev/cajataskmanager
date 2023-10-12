import styled from "styled-components";

export const Janela = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Conteudo = styled.div`
  width: 600px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;  // Adicionado para permitir barra de rolagem
  max-height: calc(100vh - 100px);  // Adicionado para limitar a altura

  .align-buttons{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px; 
    margin-bottom: 10px;
  }

  .editor-quill .ql-container {
    height: 400px !important;
  }
`;


export const NomePasta = styled.h2`
  font-size: 24px;
  color: #3a57e8;
  margin-bottom: 10px;
`;

export const NomeTarefa = styled.h3`
  font-size: 20px;
  color: #3a57e8;
  margin-bottom: 10px;
`;

export const CaixaTexto = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;



export const Botao = styled.button`
  padding: 5px 10px;
  color: #cceafe;
  background-color: #3a57e8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bolder;

  &:hover {
    background-color: #eceffd;
    color: #4768e4;
  }
`;

export const BotaoFechar = styled.button`
  padding: 5px 10px;
  color: #ffffff;
  background-color: #ff4d4d;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #cc0000;
  }
`;

export const InputFile = styled.input`
  display: none; // Mantém escondido até clicar no ícone
`;

export const InputFileLabel = styled.label`
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  color: #cceafe;
  background-color: #3a57e8;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #eceffd;
  color: #4768e4;
  }
`;



/*const ButtonStyle = css`
padding: 4px;
color: #cceafe;
background-color: #3a57e8;
font-weight: bold;
cursor: pointer;
border-radius: 5px;
text-align: center;
margin-bottom: 10px;
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: #eceffd;
  color: #4768e4;
}
`;

*/