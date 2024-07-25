import styled, { css } from "styled-components";

export const CartBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ff6f61;
  color: white;
  border-radius: 50%;
  border: 4px solid white;
  font-size: 1rem;
  position: absolute;
  right: -15px;
`;

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

export const SearchModal = styled.div`
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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #eff2f5;
  border-radius: 10px;
`;

export const SearchIcon = styled.span`
  margin-right: 10px;
  font-size: 1.6rem;
  font-weight: 700;
  color: #5a7184;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: #253342;
  font-size: 1rem;
  width: 100%;

  &::placeholder {
    color: #253342;
  }
`;

export const Button = styled.button<{
  $primary?: boolean;
  $withicon?: boolean;
  $border?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  border: ${(props) => (props.$border ? "1px solid #e9ecef" : "none")};
  border-radius: 6px;
  cursor: pointer;
  background-color: white;
  color: #343a40;
  width: 100%;
  height: 100%;
  gap: 8px;
  transition: all 0.3s ease;

  ${(props) =>
    props.$primary &&
    css`
      background-color: #ffca00;
      color: #343a40;
    `}

  ${(props) =>
    props.$withicon &&
    css`
      padding-left: 14px;
      padding-right: 14px;

      span {
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;
