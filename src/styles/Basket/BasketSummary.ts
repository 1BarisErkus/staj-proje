import styled from "styled-components";

export const SummaryContainer = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 30px 20px;
  background-color: var(--secondary-background);
`;

export const SummaryTitle = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  font-weight: 500;

  span {
    font-weight: bold;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.85rem;
`;

export const Price = styled.span`
  font-weight: bold;
`;

export const Discount = styled.span`
  color: var(--secondary);
`;

export const Button = styled.button`
  background-color: var(--secondary);
  color: var(--secondary-text);
  border: none;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 30px 0;
  font-weight: 500;
  font-size: 1rem;

  span {
    padding: 5px;
    border-radius: 50%;
    background-color: #fff;
    color: #0056b3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: #004494;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CheckboxLabel = styled.label`
  margin-left: 10px;
  font-size: 0.85rem;

  span {
    color: var(--secondary);
    font-weight: 600;
  }
`;

export const ContinueButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  color: var(--primary-text);
  border: none;
  border-radius: 35px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  font-size: 0.9rem;

  &:hover {
    background-color: var(--primary-hover);
  }
`;
