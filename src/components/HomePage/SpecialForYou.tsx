import {
  Card,
  CardList,
  Price,
  ProductImage,
  ProductName,
} from "@/styles/HomePage/SpecialForYou";
import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const SpecialForYou = () => {
  return (
    <Section title="Sana Özel Ürünler">
      <CardList>
        <Swiper
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
          <SwiperSlide>
            <Card>
              <ProductImage
                src="/images/products/iphone-15-pro-max-256gb/1.webp"
                alt="İphone 15 Pro Max 256GB"
                width={250}
                height={200}
              />
              <ProductName>İphone 15 Pro Max 256GB</ProductName>
              <Price>89.999 TL</Price>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <ProductImage
                src="/images/products/iphone-15-pro-max-256gb/1.webp"
                alt="İphone 15 Pro Max 256GB"
                width={250}
                height={200}
              />
              <ProductName>İphone 15 Pro Max 256GB</ProductName>
              <Price>89.999 TL</Price>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <ProductImage
                src="/images/products/iphone-15-pro-max-256gb/1.webp"
                alt="İphone 15 Pro Max 256GB"
                width={250}
                height={200}
              />
              <ProductName>İphone 15 Pro Max 256GB</ProductName>
              <Price>89.999 TL</Price>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <ProductImage
                src="/images/products/iphone-15-pro-max-256gb/1.webp"
                alt="İphone 15 Pro Max 256GB"
                width={250}
                height={200}
              />
              <ProductName>İphone 15 Pro Max 256GB</ProductName>
              <Price>89.999 TL</Price>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <ProductImage
                src="/images/products/iphone-15-pro-max-256gb/1.webp"
                alt="İphone 15 Pro Max 256GB"
                width={250}
                height={200}
              />
              <ProductName>İphone 15 Pro Max 256GB</ProductName>
              <Price>89.999 TL</Price>
            </Card>
          </SwiperSlide>
        </Swiper>
      </CardList>
    </Section>
  );
};

export default SpecialForYou;
