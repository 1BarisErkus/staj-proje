import { Navigation } from "swiper/modules";
import CustomSwiper from "../CustomSwiper";
import Section from "../Section";
import { SwiperSlide } from "swiper/react";
import Card from "../Card";
import { Product, ProductProps } from "@/common/types";
import React from "react";

interface TakenTogetherProps {
  similarProducts: Product[];
}

const TakenTogether: React.FC<TakenTogetherProps> = ({ similarProducts }) => {
  return (
    <Section title="Birlikte Alınanlar">
      <CustomSwiper slidesPerView={3} navigation={true} modules={[Navigation]}>
        {similarProducts?.map((product: ProductProps) => (
          <SwiperSlide key={product.id}>
            <Card
              id={product.id}
              images={product.images}
              name={product.name}
              price={product.price}
              badges={product.badges}
              type="SpecialForYou"
              discountPercentage={product.discountPercentage}
              size="small"
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </Section>
  );
};

export default TakenTogether;
