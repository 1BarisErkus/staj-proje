import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperWrapper } from "@/styles/Footer";

const logos = [
  "fizy-logo",
  "sol-yeni-logo",
  "platinum-logo",
  "bip-logo",
  "tv-plus-logo-yeni",
  "LifeBox-Logo",
  "paycell_logo2",
  "gnc-logo",
  "logo_gaming",
  "suit-logo2",
  "Global-Bilgi-Logo",
  "wiyo-v2",
  "Gelecegi-YazanKadinlar-Logo",
  "Turkcell-Bulut",
];

const Slider = () => {
  return (
    <SwiperWrapper>
      <Swiper
        slidesPerView={9}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 50,
        //   },
        // }}
        navigation={true}
        modules={[Navigation]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div style={{ position: "relative", width: 100, height: 30 }}>
              <Image
                src={`/images/footerSlider/${logo}.webp`}
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};

export default Slider;
