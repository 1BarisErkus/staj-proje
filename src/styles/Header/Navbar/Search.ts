import styled from "styled-components";

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
