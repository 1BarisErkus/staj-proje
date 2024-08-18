import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: var(--third-background);
  border-radius: 10px;
`;

export const SearchIcon = styled.span`
  margin-right: 10px;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--old-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: var(--third-text);
  font-size: 1rem;
  width: 100%;

  &::placeholder {
    color: var(--third-text);
  }
`;
