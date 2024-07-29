import { Product } from "@/common/types";
import Section from "../Section";
import Card from "../Card";
import {
  CardList,
  CategoryCard,
  CategoryImage,
  CategoryName,
} from "@/styles/HomePage/BestSellers";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import CustomSwiper from "../CustomSwiper";

interface BestSellersProductProps {
  id: string;
  images: string[];
  name: string;
  price: number;
  badges: string[];
  discountPercentage: number;
  fibabanka: boolean;
  isBestSeller: boolean;
}

const categories = [
  { name: "Cep Telefonu-Aksesuar", image: "ceptelefonuaksesuar.webp" },
  { name: "Bilgisayar-Tablet", image: "bilgisayartablet.webp" },
  { name: "Elektrikli Ev Aletleri", image: "elektriklievaletleri.webp" },
  { name: "Sağlık-Kişisel Bakım", image: "saglikkisiselbakim.webp" },
  { name: "Beyaz Eşya", image: "beyaz-esya.webp" },
  { name: "Hobi-Oyun", image: "hobioyun.webp" },
  { name: "TV-Ses Sistemleri", image: "tvsessistemleri.webp" },
  { name: "Ev-Yaşam", image: "evyasam.webp" },
  { name: "Anne-Bebek-Oyuncak", image: "annebebekcocuk.webp" },
];

const BestSellers = ({ data }: { data: Product[] }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    "Cep Telefonu-Aksesuar"
  );

  const filteredData = data.filter(
    (product) => product.category === activeCategory
  );

  return (
    <Section title="Çok Satanlar">
      <CustomSwiper
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1700: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {categories?.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryCard
              $active={activeCategory === category.name}
              onClick={() => setActiveCategory(category.name)}
            >
              <CategoryImage>
                <Image
                  src={`/images/bestSellerCategories/${category.image}`}
                  alt={category.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </CategoryImage>
              <CategoryName>{category.name}</CategoryName>
            </CategoryCard>
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <CardList>
        {filteredData?.slice(0, 8).map((product: BestSellersProductProps) => (
          <Card
            key={product.id}
            images={product.images}
            name={product.name}
            price={product.price}
            badges={product.badges}
            type="BestOffers"
            discountPercentage={product.discountPercentage}
            fibabanka={product.fibabanka}
            isBestSeller={product.isBestSeller}
          />
        ))}
      </CardList>
    </Section>
  );
};

export default BestSellers;
