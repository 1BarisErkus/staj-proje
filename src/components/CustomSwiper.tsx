import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { SwiperOptions, NavigationOptions } from "swiper/types";
import { ButtonNext, ButtonPrev, SwiperContainer } from "@/styles/Swiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "swiper/css";
import styled from "styled-components";

interface CustomSwiperProps {
  children: React.ReactNode;
  breakpoints?: SwiperOptions["breakpoints"];
  modules: SwiperOptions["modules"];
  slidesPerView: SwiperOptions["slidesPerView"];
  spaceBetween?: SwiperOptions["spaceBetween"];
  pagination?: SwiperOptions["pagination"];
  navigation?: SwiperOptions["navigation"];
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  children,
  breakpoints,
  modules,
  slidesPerView,
  spaceBetween,
  pagination = false,
  navigation = false,
  ...props
}) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperUpdate = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current;

    if (swiperInstance) {
      if (
        swiperInstance.params.navigation &&
        typeof swiperInstance.params.navigation !== "boolean" &&
        swiperInstance.navigation
      ) {
        const navigationParams = swiperInstance.params
          .navigation as NavigationOptions;
        navigationParams.prevEl = prevRef.current;
        navigationParams.nextEl = nextRef.current;
        swiperInstance.navigation.update();
      }

      handleSwiperUpdate();

      swiperInstance.on("slideChange", handleSwiperUpdate);
      swiperInstance.on("reachBeginning", handleSwiperUpdate);
      swiperInstance.on("reachEnd", handleSwiperUpdate);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", handleSwiperUpdate);
        swiperInstance.off("reachBeginning", handleSwiperUpdate);
        swiperInstance.off("reachEnd", handleSwiperUpdate);
      }
    };
  }, []);

  return (
    <SwiperContainer className="swiper-container">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={pagination}
        modules={modules}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            const navigationParams = swiper.params
              .navigation as NavigationOptions;
            navigationParams.prevEl = prevRef.current;
            navigationParams.nextEl = nextRef.current;
          }
        }}
        {...props}
      >
        {children}
      </Swiper>
      {navigation && (
        <>
          <ButtonPrev ref={prevRef} disabled={isBeginning}>
            <FaAngleLeft />
          </ButtonPrev>
          <ButtonNext ref={nextRef} disabled={isEnd}>
            <FaAngleRight />
          </ButtonNext>
        </>
      )}
    </SwiperContainer>
  );
};

export default CustomSwiper;

export const CustomSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;
