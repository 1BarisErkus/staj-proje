import CustomSwiper, { CustomSwiperSlide } from "../CustomSwiper";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { ImageWrapper } from "@/styles/ProductDetail";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
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
          <ImageWrapper>
            <Image
              src={`/images/products/${image}`}
              alt="product"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </ImageWrapper>
        </CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default Slider;
