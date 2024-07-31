import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 250px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
`;

export const DropdownTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownTitle = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  color: #8e9fad;
`;

export const DropdownHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1000;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  margin-top: 5px;
`;

export const ListItem = styled.li<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#f0f0f0" : "#fff")};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ColorCircle = styled.span<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 1px solid #ddd;
`;

export const ArrowIcon = styled.span<{ $isopen: boolean }>`
  display: inline-block;
  transform: ${({ $isopen }) => ($isopen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease;
  color: #8e9fad;
`;
