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

export const ModalHeader = styled.h5`
  opacity: 0.6;
  font-size: 0.7rem;
  margin-bottom: 20px;
`;

export const ModalBottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ModalBottomTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.6;
`;

export const ModalBottomPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  opacity: 0.6;
`;

export const SpecialCategories = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const PopularSearches = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const SearchItem = styled.div`
  display: inline-block;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  font-size: 0.8rem;
  border-radius: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  width: 100%;
`;

export const SearchModalWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 800px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

export const ModalContent = styled.div`
  padding: 20px;
`;
