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
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 100px;
`;

export const Content = styled.div`
  padding: 50px 0 255px 0;
  border-radius: 5px;
  width: 60%;
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
`;

export const LoginText = styled.p`
  font-size: 0.8rem;
  opacity: 0.6;
  margin: 16px 0;
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
`;
