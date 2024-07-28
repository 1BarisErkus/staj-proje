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
  height: auto;
  background-color: #39a6d8;
  padding: 20px;
  border: 10px solid #f1f0f8;
  border-radius: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const StyledCol = styled(Col)`
  padding: 10px;
  flex: ${({ size = 0 }) => (size / 12) * 100}%;

  @media (max-width: 576px) {
    flex: 100%;
    width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex: 100%;
    width: 100%;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 1.45rem;
  color: #fff;
  font-weight: bold;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #ffc900;
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

export const ImageWrapper = styled.div`
  width: 220px;
  height: 150px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
