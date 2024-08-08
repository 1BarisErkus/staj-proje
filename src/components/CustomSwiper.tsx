import { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { SwiperOptions, NavigationOptions } from "swiper/types";

import styled from "styled-components";
import { ButtonNext, ButtonPrev, SwiperContainer } from "@/styles/Swiper";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface CustomSwiperProps {
  children: React.ReactNode;
  breakpoints?: SwiperOptions["breakpoints"];
  modules: SwiperOptions["modules"];
  slidesPerView: SwiperOptions["slidesPerView"];
  spaceBetween?: SwiperOptions["spaceBetween"];
  pagination?: SwiperOptions["pagination"];
  navigation?: SwiperOptions["navigation"];
  autoplay?: SwiperOptions["autoplay"];
}

const CustomSwiper: FC<CustomSwiperProps> = ({
  children,
  breakpoints,
  modules,
  slidesPerView,
  spaceBetween,
  pagination = false,
  navigation = false,
  autoplay,
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
    <SwiperContainer>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
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
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        pagination={pagination}
        modules={modules}
        autoplay={autoplay}
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
