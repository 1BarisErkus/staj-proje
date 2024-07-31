import styled from "styled-components";
import { Col } from "../GlobalVariables";

export const Content = styled.div`
  background-color: #fff;
  padding-top: 5rem;
`;

export const LeftCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 380px;
`;

export const LimitWrapper = styled.div`
  margin-top: 2rem;
  max-width: 25.375rem;
  width: 100%;
  background-image: linear-gradient(6deg, #3697c9, #3baddf);
  font-size: 1rem;
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.625rem;
  margin-bottom: 1rem;
`;

export const FavoriteButton = styled.button`
  background-color: #fff;
  border: 1px solid gainsboro;
  padding: 1rem 0.75rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const DiscountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 4px 8px;
  margin: 0 0.5rem;
`;

export const TimePart = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.color === "secondary" ? "#6b7280" : "#1d4ed8")};
  margin: 0 4px;
`;

export const Separator = styled.span`
  margin: 0 4px;
  color: #6b7280;
`;

export const Stock = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffca00;
`;

export const Configuration = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
`;
