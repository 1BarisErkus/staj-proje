import Link from "next/link";
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
  min-height: 40px;
  border-bottom: 2px solid transparent;

  &:not(:last-child) {
    border-right: 1px solid #dee2e6;
  }

  &:hover {
    color: #ffc900;
    border-bottom: 2px solid #ffc900;
  }
`;

export const SubmenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const SubmenuItem = styled(Link)`
  padding: 0.5rem 1rem;
  color: #343a40;
  text-decoration: none;

  &:hover {
    background: #f8f9fa;
    color: #ffc900;
  }
`;
