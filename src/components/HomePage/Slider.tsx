import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { BlurredImage, Container, SlideContent } from "@/styles/Home/Slider";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "pdaf-pasaj-hero.webp",
  "Pasaj_Yaz-hero-banner-web.webp",
  "Pasaj_fibabanka-heroff-banner-web.webp",
  "AppleWatch-Kordon-hero-banner-web.webp",
  "gwul-pasaj-hero.webp",
  "Sepete-kredi-0-faiz-06-hero-banner-webffd.webp",
  "ay2-temmuz-pasaj-herof.webp",
  "Klima-hero-banner-webx.webp",
  "BONUS_PLATINUM-3-xhero-banner-wexb.webp",
  "pasaj_paycell-07-hero-banner-web.webp",
  "bisiklet-pasaj-hero.webp",
  "isbnk15k-pasaj-hero.webp",
  "Pasajdan-Aldm-iPhone15-hero-banner-web.webp",
  "androidlk-pasaj-hero.webp",
  "Sepete-kredi-0-faiz-SamsoniteCM5-hero-banner-web.webp",
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleSlideChange = (swiper: any) => {
    setCurrentImage(images[swiper.activeIndex]);
  };

  return (
    <Container>
      <BlurredImage
        src={`/images/mainSlider/${currentImage}`}
        alt="Slider"
        fill
        sizes="100vw"
        priority
      />
      <Swiper
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <SlideContent>
              <Image
                src={`/images/mainSlider/${image}`}
                alt="Slider"
                width={1180}
                height={500}
                priority
              />
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
