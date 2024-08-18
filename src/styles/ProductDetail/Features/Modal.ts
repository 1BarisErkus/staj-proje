import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: var(--primary-background);
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  resize: none;
`;

export const SubmitButton = styled.button`
  background-color: var(--secondary);
  color: var(--secondary-text);
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: var(--secondary-hover);
  }
`;
