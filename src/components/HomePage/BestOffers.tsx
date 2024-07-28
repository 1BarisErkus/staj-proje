import { Product } from "@/common/types";
import Section from "../Section";
import { CardList } from "@/styles/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import { Navigation } from "swiper/modules";

const BestOffers = ({ data }: { data: Product[] }) => {
  return (
    <Section title="En İyi Teklifler">
      <CardList>
        <Swiper
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
        </Swiper>
      </CardList>
    </Section>
  );
};

export default BestOffers;
