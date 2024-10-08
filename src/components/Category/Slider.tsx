import Image from "next/image";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { CustomSwiperSlide } from "../CustomSwiper";
import { Button, ImageWrapper, Text } from "@/styles/Category/Slider";

const images = [
  {
    text: "Apple dünyasını Pasaj ayrıcalıklarıyla keşfedin!",
    image: "apple-bs-kategori-web.webp",
  },
  {
    text: "Yenile! Yenilen!",
    image: "et2-kategori-web.webp",
  },
  {
    text: "Apple dünyasını Pasaj ayrıcalıklarıyla keşfedin!",
    image: "brandstoreapple-kategori-web.webp",
  },
];

const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((item, index) => (
        <CustomSwiperSlide key={index}>
          <ImageWrapper>
            <Text>{item.text}</Text>
            <Image
              src={`/images/categorySlider/${item.image}`}
              alt="Slider"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              style={{ objectFit: "cover", borderRadius: "30px" }}
            />
            <Button>İncele</Button>
          </ImageWrapper>
        </CustomSwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
