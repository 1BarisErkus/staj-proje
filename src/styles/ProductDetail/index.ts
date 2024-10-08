import styled from "styled-components";
import { Col } from "../GlobalVariables";

export const Content = styled.div`
  background-color: var(--primary-background);
  padding-top: 5rem;
`;

export const LeftCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column-reverse;
  }
`;

export const LimitWrapper = styled.div`
  margin: 2rem 0;
  max-width: 25.375rem;
  width: 100%;
  background-image: linear-gradient(6deg, #3697c9, #3baddf);
  font-size: 1rem;
  color: var(--secondary-text);
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
  background-color: var(--primary-background);
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
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 4px 8px;
  margin: 0 0.5rem;
`;

export const TimePart = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) =>
    props.color === "secondary" ? "var(--old-text-color)" : "var(--secondary)"};
  margin: 0 4px;
`;

export const Separator = styled.span`
  margin: 0 4px;
  color: var(--old-text-color);
`;

export const Stock = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary);
  margin-left: 0.5rem;
`;

export const ConfigurationWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
`;

export const OfferWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const Button = styled.button`
  background-color: var(--primary);
  width: 100%;
  margin-top: 2rem;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

export const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    div {
      background-color: orange;
      color: white;
      padding: 1rem;
    }

    span {
      color: orange;
    }
  }
`;

export const Badge = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-background);
  color: gray;
  padding: 1rem;
  border-radius: 50%;
`;

export const BadgeText = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: gray;
  text-align: center;
`;

export const CustomImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 380px;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;
