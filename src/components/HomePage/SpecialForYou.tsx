import { FC } from "react";
import { Navigation } from "swiper/modules";

import Section from "../Section";
import CustomSwiper, { CustomSwiperSlide } from "../CustomSwiper";
import Card from "../Card";

import { SwiperProductProps, SectionProps } from "@/common/types";

const SpecialForYou: FC<SectionProps> = ({ data, favorites }) => {
  return (
    <Section title="Sana Özel Ürünler">
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
        modules={[Navigation]}
        navigation
      >
        {data?.map((product: SwiperProductProps) => (
          <CustomSwiperSlide key={product.id}>
            <Card
              id={product.id}
              images={product.images}
              name={product.name}
              price={product.price}
              discountPercentage={product.discountPercentage}
              isFavorite={favorites.includes(product.id)}
              badges={product.badges}
              fibabanka={product.fibabanka}
              isBestSeller={product.isBestSeller}
            />
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Section>
  );
};

export default SpecialForYou;
