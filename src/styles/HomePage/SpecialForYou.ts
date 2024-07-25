import Image from "next/image";
import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const ProductImage = styled(Image)`
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const ProductName = styled.h2`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 50px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #0070f3;
  margin-top: 8px;
`;
