import Image from "next/image";
import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

interface CardWrapperProps {
  type?: string;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 280px;
  min-height: ${(props) =>
    props.type === "SpecialForYou" ? "300px" : "420px"};
`;

export const ProductImage = styled(Image)`
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const ProductName = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  min-height: 50px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2855ac;
  margin-top: 5px;
`;

export const Discount = styled.p`
  font-size: 0.7rem;
  margin-top: 5px;
  font-weight: 600;
  color: #00bafc;
`;

export const DiscountlessAmount = styled.span`
  text-decoration: line-through;
  color: #bfc4c8;
`;

export const MinPrice = styled.p`
  font-size: 0.65rem;
  font-weight: bold;
  color: #4fcd53;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  height: 30px;
`;

export const Badge = styled.span`
  background-color: ${(props) =>
    props.title?.includes("Peşin")
      ? "#E5F8FF"
      : props.title?.includes("Kargo")
      ? "#FDF7E7"
      : props.title?.includes("Hızlı")
      ? "#ff9800"
      : "#E5FDE6"};
  color: #333;
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 0.55rem;
  margin-right: 8px;
  display: flex;
  max-width: 50px;
`;
