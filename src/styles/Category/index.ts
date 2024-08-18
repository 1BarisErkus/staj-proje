import styled from "styled-components";

export const Content = styled.div`
  background-color: var(--primary-background);
`;

export const Container = styled.div`
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  background-color: var(--secondary-background);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
  color: var(--old-text-color);
`;

export const Header = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Item = styled.div<{ $active: boolean }>`
  font-size: 14px;
  font-weight: normal;
  margin: 8px 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${({ $active }) =>
    $active &&
    `
    font-weight: bold;
  `}
`;

export const Icon = styled.span`
  margin-left: 1rem;
  cursor: pointer;
`;

export const TitleText = styled.h1`
  font-size: 32px;
  font-weight: bold;
  padding-top: 30px;
  text-align: center;
`;
