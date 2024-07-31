import { Product } from "@/common/types";
import CustomSwiper from "../CustomSwiper";
import Section from "../Section";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Card from "../Card";

const JustForYou = ({ data }: { data: Product[] }) => {
  return (
    <Section title="Bu Ürünler Tam Size Göre">
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
        {data?.map((product) => (
          <SwiperSlide key={product.id}>
            <Card
              id={product.id}
              images={product.images}
              name={product.name}
              price={product.price}
              badges={product.badges}
              type="SpecialForYou"
              discountPercentage={product.discountPercentage}
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </Section>
  );
};

export default JustForYou;
