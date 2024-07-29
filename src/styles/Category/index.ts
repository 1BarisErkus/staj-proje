import styled from "styled-components";

export const Content = styled.div`
  background-color: #fff;
`;

export const Container = styled.div`
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  background-color: #f5f7f9;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e4e8;
  color: #5f6b76;
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
