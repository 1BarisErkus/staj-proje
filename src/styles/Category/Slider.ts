import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 370px;
`;

export const Text = styled.h1`
  color: var(--secondary);
  position: absolute;
  top: 35%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 2000;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
  max-width: 320px;
  line-height: 1.5;
`;

export const Button = styled.button`
  position: absolute;
  top: 65%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 2000;
  background-color: var(--primary);
  border: none;
  padding: 0.5rem 3rem;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
`;
