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
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #39a6d8;
  padding: 20px;
  border: 10px solid #f1f0f8;
  border-radius: 10px;
`;

export const StyledCol = styled(Col)`
  padding: 10px;
  width: 100%;
  flex: ${({ size = 0 }) => (size / 12) * 100}%;

  @media (max-width: 576px) {
    flex: 100%;
    width: 100%;
  }
`;

export const Text = styled.p`
  font-size: 1.45rem;
  color: #fff;
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
  gap: 25px;
  background-color: #ffc900;
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  font-size: 0.9rem;
  margin-left: auto;
  @media (max-width: 576px) {
    padding: 5px 10px;
    font-size: 0.75rem;
  }
`;
