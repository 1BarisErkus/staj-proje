import styled from "styled-components";
import { Col } from "../GlobalVariables";

export const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
  border: 1px solid #e0e0e0;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const CardTitle = styled.h5`
  font-size: 0.9rem;
  font-weight: 600;
  color: #2855ac;
`;

export const CardRating = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  background-color: #0bc15c;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #5f6b76;
`;

export const Currency = styled.span`
  position: absolute;
  font-size: 0.7rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  gap: 1rem;
  border: none;
  background-color: #ffd917;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 0.95rem;

  &:hover {
    background-color: orange;
  }
`;

export const Shipping = styled.p`
  font-size: 0.8rem;
  color: #5f6b76;
  margin-top: 1rem;
`;
