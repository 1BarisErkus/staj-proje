import { FC } from "react";
import Image from "next/image";
import { ImageWrapper } from "@/styles/GlobalVariables";
import CustomSwiper, { CustomSwiperSlide } from "@/components/CustomSwiper";
import { CategoryCard, CategoryName } from "@/styles/HomePage/BestSellers";
import { Navigation } from "swiper/modules";

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

type CategoryListProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const CategoryList: FC<CategoryListProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
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
        <CustomSwiperSlide key={index}>
          <CategoryCard
            $active={activeCategory === category.name}
            onClick={() => setActiveCategory(category.name)}
          >
            <ImageWrapper width={30} height={20}>
              <Image
                src={`/images/bestSellerCategories/${category.image}`}
                alt={category.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "contain" }}
              />
            </ImageWrapper>
            <CategoryName>{category.name}</CategoryName>
          </CategoryCard>
        </CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default CategoryList;
