import Image from "next/image";
import styled from "styled-components";

interface CardWrapperProps {
  size?: string;
}

interface SingleBadgeWrapperProps {
  type?: string;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 280px;
  min-height: 420px;
  position: relative;

  ${({ size }) =>
    size === "small" &&
    `
    width: 160px;
    min-height: 250px;
    `}

  &:hover {
    border: 2px solid #ffc900;
  }
`;

export const ProductImage = styled(Image)`
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const ProductName = styled.h2<{ size?: string }>`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  min-height: 50px;

  ${({ size }) =>
    size === "small" &&
    `
    font-size: 0.8rem;
    min-height: 30px;
    word-wrap: break-word;
    max-width: 100px;
    `}
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
  height: 25px;
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

export const LikeIconWrapper = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
`;

export const SingleBadgeWrapper = styled.div<SingleBadgeWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${(props) =>
    props.type === "bestSeller" ? "#ff9800" : "#5BCC34"};
  color: white;
  padding: 4px 8px;
  border-end-end-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
`;
