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
  background-color: var(--primary-background);
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
  color: var(--old-text-color);
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
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--primary-background);
  margin-top: 5px;
`;

export const ListItem = styled.li<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? "var(--secondary-background)" : "var(--primary-background)"};

  &:hover {
    background-color: var(--primary-secondary);
  }
`;

export const ColorCircle = styled.span<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 1px solid var(--border-color);
`;

export const ArrowIcon = styled.span<{ $isopen: boolean }>`
  display: inline-block;
  transform: ${({ $isopen }) => ($isopen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.2s ease;
  color: var(--fourth-text);
`;
