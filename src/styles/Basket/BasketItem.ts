import styled from "styled-components";
import { Col } from "../GlobalVariables";
import Link from "next/link";

export const BasketItemWrapper = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

export const Left = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Middle = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Right = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NameDetails = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h4``;

export const Color = styled.p`
  color: #9e9e9e;
`;

interface PriceWrapperProps {
  $mainprice?: boolean;
}

export const PriceWrapper = styled.div<PriceWrapperProps>`
  color: ${({ $mainprice }) => ($mainprice ? "#000" : "#9e9e9e")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Price = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 30px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0 10px;

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const Count = styled.span`
  font-size: 1rem;
  margin: 0 10px;
`;

export const Label = styled.div`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 15px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #9e9e9e;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  position: absolute;
  right: 15px;
  top: 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
  font-size: 0.8rem;
`;

export const BottomText = styled.p`
  color: #2855ac;
`;

export const Cargo = styled.span`
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid #e0e0e0;
  color: #9e9e9e;
`;
