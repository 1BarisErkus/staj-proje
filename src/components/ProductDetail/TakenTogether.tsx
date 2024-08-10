import { FC } from "react";
import { Navigation } from "swiper/modules";
import { Product, SwiperProductProps } from "@/lib/types";
import CustomSwiper, { CustomSwiperSlide } from "../CustomSwiper";
import Section from "../Section";
import Card from "../Card";

type TakenTogetherProps = {
  similarProducts: Product[];
  favorites: string[];
};

const TakenTogether: FC<TakenTogetherProps> = ({
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
        {similarProducts?.map((product: SwiperProductProps) => (
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
              fibabanka={product.fibabanka}
              isBestSeller={product.isBestSeller}
            />
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Section>
  );
};

export default TakenTogether;
