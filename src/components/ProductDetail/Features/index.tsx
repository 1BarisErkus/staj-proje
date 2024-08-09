import { FC, useState } from "react";
import { Navigation } from "swiper/modules";
import { Container } from "@/styles/GlobalVariables";
import CustomSwiper, { CustomSwiperSlide } from "@/components/CustomSwiper";
import {
  FeaturesContainer,
  SlideContainer,
  SlideItem,
} from "@/styles/ProductDetail/Features";
import Description from "./Description";
import ProductFeatures from "./ProductFeatures";
import Reviews from "./Reviews";
import Qa from "./Qa";
import CreditCard from "./CreditCard";
import Bank from "./Bank";
import Cancel from "./Cancel";

const titles = [
  "Ürün Açıklamaları",
  "Ürün Özellikleri",
  "Değerlendirmeler",
  "Ürün Soru & Cevapları",
  "Kredi Kartı Taksit Seçenekleri",
  "Banka Kampanyaları",
  "İptal/İade Koşulları",
];

type FeaturesSlideProps = {
  description: string;
  features: { name: string; value: string }[];
  reviews: {
    id: string;
    userName: string;
    comment: string;
    rating: number;
    date: string;
    helpfulCount: number;
  }[];
  seller: string;
  productId: string;
  qas: {
    questionDate: string;
    questionText: string;
    answerDate: string;
    storeName: string;
    answerText: string;
  }[];
};

const FeaturesSlide: FC<FeaturesSlideProps> = ({
  description,
  features,
  reviews,
  seller,
  productId,
  qas,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SlideContainer>
      <Container>
        <CustomSwiper
          slidesPerView={2}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 5,
            },
          }}
          navigation={true}
          modules={[Navigation]}
        >
          {titles.map((title, index) => (
            <CustomSwiperSlide
              key={index}
              onClick={() => handleSlideClick(index)}
            >
              <SlideItem $active={activeIndex === index}>{title}</SlideItem>
            </CustomSwiperSlide>
          ))}
        </CustomSwiper>
        <FeaturesContainer>
          {activeIndex === 0 && <Description description={description} />}
          {activeIndex === 1 && <ProductFeatures features={features} />}
          {activeIndex === 2 && (
            <Reviews reviews={reviews} seller={seller} productId={productId} />
          )}
          {activeIndex === 3 && <Qa qas={qas} productId={productId} />}
          {activeIndex === 4 && <CreditCard />}
          {activeIndex === 5 && <Bank />}
          {activeIndex === 6 && <Cancel />}
        </FeaturesContainer>
      </Container>
    </SlideContainer>
  );
};

export default FeaturesSlide;
