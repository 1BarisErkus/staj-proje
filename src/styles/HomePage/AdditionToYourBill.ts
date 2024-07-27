import styled from "styled-components";
import { Col } from "../GlobalVariables";

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

export const Text = styled.p`
  font-size: 1.45rem;
  color: #fff;
  font-weight: bold;
  text-align: center;
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
`;
