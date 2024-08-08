import Image from "next/image";
import { Navigation } from "swiper/modules";
import Section from "../Section";
import CustomSwiper, { CustomSwiperSlide } from "../CustomSwiper";

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
    <Section title="Kaçırılmayacak Fırsatlar">
      <CustomSwiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1700: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {data?.map((image, index) => (
          <CustomSwiperSlide key={index}>
            <Image
              src={`/images/opportunities/${image}`}
              alt={image}
              width={280}
              height={420}
              priority
            />
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Section>
  );
};

export default Opportunities;
