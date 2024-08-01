import styled from "styled-components";

export const Conainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const RatingCard = styled.div`
  background-color: #fff;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 500px;
`;

export const RatingTitle = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const RatingCount = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
`;

export const WriteReviewButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #3a6ccd;
  width: 50%;
  border: none;
  border-radius: 1.1rem;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1565c0;
  }
`;

export const Note = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 10px;
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 450px;
`;

export const DropdownHeader = styled.div`
  position: relative;
  background-color: transparent;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  z-index: 1000;
`;

export const DropdownItem = styled.li<{ $active?: boolean }>`
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  ${({ $active }) =>
    $active &&
    `
    font-weight: bold;
  `}
`;
