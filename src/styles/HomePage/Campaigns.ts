import styled from "styled-components";
import { Col, Row } from "../GlobalVariables";

export const StyledRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledCol = styled(Col)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex: ${({ size = 0 }) => (size / 12) * 100}%;
  }

  &:nth-child(1) {
    order: 1;
  }

  &:nth-child(2) {
    order: 2;
  }

  @media (max-width: 767px) {
    &:nth-child(2) {
      order: 1;
    }

    &:nth-child(1) {
      order: 2;
    }
  }
`;

export const ImageWrapper = styled.div<{ $pos: string }>`
  position: relative;
  width: 100%;
  height: 300px;

  @media (min-width: 768px) {
    width: ${({ $pos }) => ($pos === "right" ? "100%" : "100%")};
    height: ${({ $pos }) => ($pos === "right" ? "580px" : "280px")};
  }
`;