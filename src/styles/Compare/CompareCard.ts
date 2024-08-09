import Link from "next/link";
import styled from "styled-components";

export const CardContainer = styled(Link)`
  width: 350px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 20px;
`;

export const ProductImage = styled.img`
  width: 130px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  display: flex;
  margin: 0 auto;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  height: 50px;
  letter-spacing: 0.5px;
`;

export const Price = styled.div`
  font-size: 20px;
  color: #1b4795;
  font-weight: bold;
`;

export const FeaturesList = styled.ul`
  margin-top: 20px;
  padding: 0;
`;

export const FeatureListItem = styled.li`
  font-size: 14px;
  color: #333;
  list-style: none;
  margin-bottom: 10px;

  span {
    font-weight: bold;
  }
`;
