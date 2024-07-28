import Image from "next/image";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin: 2rem 0;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 500px;
  }

  @media (max-width: 768px) {
    height: 400px;
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    height: 300px;
    margin: 1rem 0;
    padding: 0 0.5rem;
  }
`;

export const SlideContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 12px;
  padding: 0 50px;
  width: 1200px;
  height: 500px;

  @media (max-width: 1200px) {
    width: 1000px;
    height: 400px;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 300px;
    padding: 0 30px;
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 250px;
    padding: 0 20px;
  }
`;

export const BlurredImage = styled(Image)`
  object-fit: cover;
  filter: blur(16px);

  @media (max-width: 1200px) {
    filter: blur(12px);
  }

  @media (max-width: 768px) {
    filter: blur(8px);
  }

  @media (max-width: 576px) {
    filter: blur(4px);
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
