import { ImageWrapper } from "@/styles/GlobalVariables";
import styled from "styled-components";

export const UnOverlay = styled.div`
  position: fixed;
  top: 200px;
  left: 50%;
  background: #f6f5f8;
  z-index: 1000;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    top: 0px;
    padding: 0 20px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 100px;

  @media (max-width: 768px) {
    right: 50px;
  }
`;

export const Content = styled.div`
  padding: 50px 0 255px 0;
  border-radius: 5px;
  width: 60%;

  @media (max-width: 992px) {
    width: 100%;
    padding: 50px 0 105px 0;
  }
`;

export const LoginButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ffc107;
  border: none;
  border-radius: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px;
    margin-bottom: 40px;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    padding: 6px;
    margin-bottom: 30px;
  }
`;

export const LoginText = styled.p`
  font-size: 0.8rem;
  opacity: 0.6;
  margin: 16px 0;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin: 12px 0;
  }

  @media (max-width: 576px) {
    font-size: 0.6rem;
    margin: 8px 0;
  }
`;

export const LoginHead = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 40px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding: 8px;
    margin-bottom: 16px;
  }
`;

export const LoginFormButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ffc107;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px;
  }
`;

export const AlreadyMember = styled.div`
  font-size: 0.8rem;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  &:hover {
    color: #ffc107;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-top: 16px;
  }
`;

export const Error = styled.p`
  color: orangered;
  font-size: 0.8rem;
  margin-bottom: 15px;
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 8px;
  }
`;

export const CustomImageWrapper = styled(ImageWrapper)`
  width: 350px;
  height: 200px;

  @media (max-width: 992px) {
    width: 100%;
    height: auto;
  }
`;
