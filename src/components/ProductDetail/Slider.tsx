import { FC } from "react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import CustomSwiper, { CustomSwiperSlide } from "../CustomSwiper";
import { CustomImageWrapper } from "@/styles/ProductDetail";

type SliderProps = {
  images: string[];
};

const Slider: FC<SliderProps> = ({ images }) => {
  return (
    <CustomSwiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((image, index) => (
        <CustomSwiperSlide key={index}>
          <CustomImageWrapper>
            <Image
              src={
                image.startsWith("http") ? image : `/images/products/${image}`
              }
              alt="product"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </CustomImageWrapper>
        </CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default Slider;
