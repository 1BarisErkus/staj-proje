import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CardList } from "@/styles/Card";
import Card from "../Card";
import { Key } from "react";
import { Product } from "@/common/types";

const SpecialForYou = ({ data }: { data: Product[] }) => {
  return (
    <Section title="Sana Özel Ürünler">
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
              id: Key | null | undefined;
              images: string[];
              name: string;
              price: number;
            }) => (
              <SwiperSlide key={product.id}>
                <Card
                  images={product.images}
                  name={product.name}
                  price={product.price}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </CardList>
    </Section>
  );
};

export default SpecialForYou;
