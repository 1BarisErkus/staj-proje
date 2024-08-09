import { FC } from "react";
import { Navigation } from "swiper/modules";

import { SectionProps, SwiperProductProps } from "@/common/types";
import CustomSwiper, { CustomSwiperSlide } from "../CustomSwiper";
import Section from "../Section";
import Card from "../Card";

const BestOffers: FC<SectionProps> = ({ data, favorites }) => {
  return (
    <Section title="En İyi Teklifler">
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
        {data?.map((product: SwiperProductProps) => (
          <CustomSwiperSlide key={product.id}>
            <Card
              id={product.id}
              images={product.images}
              name={product.name}
              price={product.price}
              badges={product.badges}
              discountPercentage={product.discountPercentage}
              isFavorite={favorites.includes(product.id)}
              fibabanka={product.fibabanka}
              isBestSeller={product.isBestSeller}
            />
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Section>
  );
};

export default BestOffers;
