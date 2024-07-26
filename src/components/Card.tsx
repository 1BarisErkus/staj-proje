import { CardWrapper, Price, ProductImage, ProductName } from "@/styles/Card";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CardProps {
  images: string[];
  name: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ images, name, price }) => {
  return (
    <CardWrapper>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ProductImage
              src={`/images/products/${image}`}
              alt={name}
              width={250}
              height={200}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ProductName>{name}</ProductName>
      <Price>{price} TL</Price>
    </CardWrapper>
  );
};

export default Card;
