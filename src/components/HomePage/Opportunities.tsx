import { Swiper, SwiperSlide } from "swiper/react";
import Section from "../Section";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const data = [
  "pacunku-kfa.webp",
  "r1-spor-voit-KF.webp",
  "pmf-kf.webp",
  "go4-KF.webp",
  "cfgo1305-KF.webp",
  "Herschel-kacirilmayacak-firsatlar.webp",
  "r1-tvpluspro-KF.webp",
  "thermos-KF.webp",
];

const Opportunities = () => {
  return (
    <Section title="Opportunities">
      {/* <CardList> */}
      <Swiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: data?.length < 2 ? data?.length : 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: data?.length < 3 ? data?.length : 3,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: data?.length < 4 ? data?.length : 4,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {data?.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={`/images/opportunities/${image}`}
              alt={image}
              width={280}
              height={420}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </CardList> */}
    </Section>
  );
};

export default Opportunities;
