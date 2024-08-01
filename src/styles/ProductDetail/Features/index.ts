import styled from "styled-components";

export const SlideContainer = styled.div`
  padding: 20px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

type SlideItemProps = {
  $active?: boolean;
};

export const SlideItem = styled.div<SlideItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ $active }) =>
    $active &&
    `
    color: #1e88e5;
    border-bottom: 2px solid #1e88e5;
  `}

  &:hover {
    border-bottom: 2px solid #1e88e5;
  }
`;

export const FeaturesContainer = styled.div`
  padding: 100px 0;
`;

export const DescriptionText = styled.p`
  font-size: 20px;
  color: #333;
  line-height: 1.5;
  letter-spacing: 0.5px;
  max-width: 800px;
  margin: 0 auto;
`;
