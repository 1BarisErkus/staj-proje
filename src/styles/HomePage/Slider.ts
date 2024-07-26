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
`;

export const BlurredImage = styled(Image)`
  object-fit: cover;
  filter: blur(16px);
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;