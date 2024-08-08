import Image from "next/image";
import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 576px) {
    height: 300px;
  }
`;

export const SlideContent = styled.div`
  position: relative;
  width: 1200px;
  height: 500px;
`;

export const BlurredImage = styled(Image)`
  object-fit: cover;
  filter: blur(16px);
`;
