import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  padding: 50px 100px;
  background-color: var(--primary-background);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const DetailTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
  color: var(--fourth-text);
`;

export const DetailValue = styled.div`
  font-size: 14px;
  color: var(--fourth-text);
`;

export const ToggleButton = styled.button`
  margin: 20px auto 0;
  display: block;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 20px;
  background-color: var(--primary-background);
  color: var(--fourth-text);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--secondary-background);
  }
`;
