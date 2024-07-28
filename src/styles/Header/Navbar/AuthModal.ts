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

  @media (max-width: 768px) {
    top: 100px;
    padding: 0 20px;
  }

  @media (max-width: 576px) {
    top: 50px;
    padding: 0 10px;
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

  @media (max-width: 576px) {
    right: 20px;
  }
`;

export const Content = styled.div`
  padding: 50px 0 255px 0;
  border-radius: 5px;
  width: 60%;

  @media (max-width: 768px) {
    width: 80%;
    padding: 30px 0 155px 0;
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 20px 0 105px 0;
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

export const LoginBottomText = styled.p`
  font-size: 0.7rem;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  color: #ffc107;
  text-align: end;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding-top: 15px;
  }

  @media (max-width: 576px) {
    font-size: 0.5rem;
    padding-top: 10px;
  }
`;
