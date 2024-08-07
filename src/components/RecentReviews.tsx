import { SwiperSlide } from "swiper/react";
import Section from "./Section";
import { Product, ProductProps } from "@/common/types";
import { Navigation } from "swiper/modules";
import Card from "./Card";
import CustomSwiper, { CustomSwiperSlide } from "./CustomSwiper";

const RecentReviews = ({
  data,
  favorites,
}: {
  data: Product[];
  favorites: string[];
}) => {
  return (
    <Section title="Son İncelenenler">
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
        {data?.map((product: ProductProps) => (
          <CustomSwiperSlide key={product.id}>
            <Card
              id={product.id}
              images={product.images}
              name={product.name}
              price={product.price}
              badges={product.badges}
              discountPercentage={product.discountPercentage}
              isFavorite={favorites.includes(product.id)}
            />
          </CustomSwiperSlide>
        ))}
      </CustomSwiper>
    </Section>
  );
};

export default RecentReviews;
