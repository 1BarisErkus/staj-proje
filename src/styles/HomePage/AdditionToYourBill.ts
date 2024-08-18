import styled from "styled-components";
import { Col, Row } from "../GlobalVariables";

export const StyledRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--your-bill);
  border: 10px solid var(--border-color);
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 1.45rem;
  color: var(--secondary-text);
  font-weight: bold;
  text-align: center;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: var(--primary);
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  font-size: 0.95rem;
  margin-left: auto;

  @media (max-width: 576px) {
    padding: 5px 10px;
    font-size: 0.75rem;
  }
`;
