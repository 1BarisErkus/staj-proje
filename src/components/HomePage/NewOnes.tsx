import { SwiperSlide } from "swiper/react";
import Section from "../Section";
import Card from "../Card";
import { Product } from "@/common/types";
import { Navigation } from "swiper/modules";
import CustomSwiper from "../CustomSwiper";

const NewOnes = ({ data }: { data: Product[] }) => {
  return (
    <Section title="Pasajın Yenileri">
      <CustomSwiper
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
        {data?.map(
          (product: {
            id: string;
            images: string[];
            name: string;
            price: number;
            badges: string[];
            discountPercentage: number;
          }) => (
            <SwiperSlide key={product.id}>
              <Card
                images={product.images}
                name={product.name}
                price={product.price}
                badges={product.badges}
                type="BestOffers"
                discountPercentage={product.discountPercentage}
              />
            </SwiperSlide>
          )
        )}
      </CustomSwiper>
    </Section>
  );
};

export default NewOnes;
