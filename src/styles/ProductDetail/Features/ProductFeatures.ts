import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  padding: 50px 100px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const DetailTitle = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
`;

export const DetailValue = styled.div`
  font-size: 14px;
  color: #666;
`;

export const ToggleButton = styled.button`
  margin: 20px auto 0;
  display: block;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid #000;
  border-radius: 20px;
  background-color: #fff;
  color: #333;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;
