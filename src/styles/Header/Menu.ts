import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

export const MenuItem = styled.div`
  font-size: 15px;
  color: #343a40;
  padding: 0.5rem 1rem;
  text-align: center;
  max-width: 140px;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid #dee2e6;
  }

  &:hover {
    color: #ffc900;
    border-bottom: 2px solid #ffc900;
  }
`;
