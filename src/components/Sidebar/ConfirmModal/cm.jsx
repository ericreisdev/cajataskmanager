import React from "react";
import { useState } from "react";
import { ModalWrapper, ModalContent, ModalHeader, ModalText, ModalInput, ModalButton } from './style';

const ConfirmModal = ({ isOpen, onClose, onConfirm, spaceTitle }) => {
  const [inputValue, setInputValue] = useState("");

  const handleConfirm = () => {
    if (inputValue === spaceTitle) {
      onConfirm();
      onClose();
    } else {
      alert("O nome da pasta está incorreto.");
    }
  };

  return isOpen ? (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>Confirme a exclusão</ModalHeader>
        <ModalText>Digite o nome da pasta para confimar a exclusão: {spaceTitle} </ModalText>
        <ModalInput
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ModalButton onClick={handleConfirm}>Confirmar</ModalButton>
        <ModalButton cancel onClick={onClose}>Cancelar</ModalButton>
      </ModalContent>
    </ModalWrapper>
  ) : null;
};



export default ConfirmModal;
