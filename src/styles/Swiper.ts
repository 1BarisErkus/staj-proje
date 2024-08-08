import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

export const SwiperContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Button = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

export const ButtonPrev = styled(Button)<{ disabled?: boolean }>`
  left: 0;
`;

export const ButtonNext = styled(Button)<{ disabled?: boolean }>`
  right: 0;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
