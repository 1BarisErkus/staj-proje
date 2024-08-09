import styled, { css } from "styled-components";

const gutter = "1.5rem";

type ColProps = {
  size?: number;
};

type ImageWrapperProps = {
  width: number;
  height: number;
};

export const Container = styled.div`
  width: 100%;
  padding-right: ${gutter};
  padding-left: ${gutter};
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1200px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(${gutter} / -2);
  margin-left: calc(${gutter} / -2);
`;

export const Col = styled.div<ColProps>`
  flex: 1;
  position: relative;
  width: 100%;
  padding-right: calc(${gutter} / 2);
  padding-left: calc(${gutter} / 2);
  ${(props) =>
    props.size &&
    css`
      flex: 0 0 ${(props.size / 12) * 100}%;
      max-width: ${(props.size / 12) * 100}%;
    `}

  @media (max-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin: 1rem 0;
  }
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const CardListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid gainsboro;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
