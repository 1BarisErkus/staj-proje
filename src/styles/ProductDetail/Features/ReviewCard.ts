import styled from "styled-components";

export const ReviewCardContainer = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-top: 1px solid #f0f0f0;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const ReviewerName = styled.span`
  font-size: 12px;
  margin-right: 10px;
`;

export const ReviewDate = styled.span`
  font-size: 12px;
  color: #666;
  margin-right: 10px;
`;

export const SellerInfo = styled.span`
  font-size: 12px;
  margin-right: 10px;
  font-weight: bold;
`;

export const PurchaseStatus = styled.span`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 12px;
  font-weight: bold;
`;

export const ReviewText = styled.p`
  color: #333;
  margin: 20px 0;
`;

export const HelpfulSection = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  color: #666;
`;

export const HelpfulText = styled.span`
  margin-right: 10px;
`;

export const ThumbsUpIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 5px;
`;

export const HelpfulCount = styled.span`
  font-weight: bold;
`;
