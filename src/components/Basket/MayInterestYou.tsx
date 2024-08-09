import { FC } from "react";
import { Navigation } from "swiper/modules";
import { SectionProps, SwiperProductProps } from "@/common/types";
import CustomSwiper, { CustomSwiperSlide } from "../CustomSwiper";
import Section from "../Section";
import Card from "../Card";

const MayInterestYou: FC<SectionProps> = ({ data, favorites }) => {
  return (
    <Section title="İlginizi Çekebilecek Ürünler">
      <CustomSwiper
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1700: {
            slidesPerView: 4,
            spaceBetween: 50,
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

export default MayInterestYou;
