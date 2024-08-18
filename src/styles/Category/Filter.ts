import styled from "styled-components";
import { Col } from "../GlobalVariables";

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const StyledLeftCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const CompareContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--secondary-background);
  padding: 15px 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CompareItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background-color: var(--secondary-text);
  border-radius: 10px;
  margin-right: 10px;
  flex: 1;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  &:last-child {
    margin-right: 0;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: var(--old-text-color);
  }
`;

export const CompareButton = styled.button`
  background-color: var(--primary);
  border: none;
  color: var(--primary-text);
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 15px;
  margin-left: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-hover);
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-text);
  margin-left: 20px;
  font-size: 16px;
  padding: 10px;
  transition: color 0.3s;

  &:hover {
    color: var(--old-text-color);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1px;
  right: 1px;
  background: none;
  border: none;
  color: var(--primary-text);
  font-size: 16px;
  padding: 10px;
  transition: color 0.3s;

  &:hover {
    color: var(--old-text-color);
  }
`;
