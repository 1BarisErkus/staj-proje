import { Navigation } from "swiper/modules";
import CustomSwiper, { CustomSwiperSlide } from "../CustomSwiper";
import Section from "../Section";
import { SwiperSlide } from "swiper/react";
import Card from "../Card";
import { Product, ProductProps } from "@/common/types";
import React from "react";

interface TakenTogetherProps {
  similarProducts: Product[];
  favorites: string[];
}

const TakenTogether: React.FC<TakenTogetherProps> = ({
  similarProducts,
  favorites,
}) => {
  return (
    <Section title="Birlikte Alınanlar">
      <CustomSwiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {similarProducts?.map((product: ProductProps) => (
          <CustomSwiperSlide key={product.id}>
            <Card
              id={product.id}
              images={product.images}
              name={product.name}
              price={product.price}
              badges={product.badges}
              discountPercentage={product.discountPercentage}
              size="small"
              isFavorite={favorites.includes(product.id)}
            />
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Section>
  );
};

export default TakenTogether;
