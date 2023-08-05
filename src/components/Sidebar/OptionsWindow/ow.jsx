import React from "react";
import { Options, WindowContainer } from "./style";

const OptionsWindow = ({
  isOpen,
  onClose,
  selectedSpace,
  onNewListSubmit,
}) => {
  const handleOptionClick = (label) => {
    onNewListSubmit(selectedSpace.id, label);
    onClose();
  };

  return (
    <WindowContainer style={isOpen ? { right: 0 } : { right: "-200px" }}>
      <Options>
               <button onClick={() => handleOptionClick("PastaBlaster")}>Lista</button>
             </Options>
      <button onClick={onClose}>Fechar</button>
    </WindowContainer>
  );
};

export default OptionsWindow;
