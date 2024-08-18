import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const SearchModalWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 800px;
  background: var(--primary-background);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

export const ModalContent = styled.div`
  padding: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;
