import {
  Badge,
  BadgeWrapper,
  CardWrapper,
  Discount,
  DiscountlessAmount,
  MinPrice,
  Price,
  PriceWrapper,
  ProductImage,
  ProductName,
} from "@/styles/Card";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

interface CardProps {
  images: string[];
  name: string;
  price: number;
  badges?: string[];
  type: string;
  discountPercentage?: number;
}

const Card: React.FC<CardProps> = ({
  images,
  name,
  price,
  badges,
  type,
  discountPercentage,
}) => {
  return (
    <CardWrapper type={type}>
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
      {type === "BestOffers" && (
        <>
          <Rating value={4} style={{ maxWidth: 50 }} />
          <BadgeWrapper>
            {badges &&
              badges.length !== 0 &&
              badges.map((badge, index) => (
                <Badge key={index} title={badge}>
                  {badge}
                </Badge>
              ))}
          </BadgeWrapper>
        </>
      )}

      {type === "SpecialForYou" || discountPercentage === 0 ? (
        <Price>{price} TL</Price>
      ) : (
        discountPercentage !== 0 && (
          <PriceWrapper>
            <Price>
              {price - Math.round(price * ((discountPercentage ?? 0) / 100))} TL
            </Price>
            <Discount>
              <DiscountlessAmount>{price} TL</DiscountlessAmount>
              {Math.round(price * ((discountPercentage ?? 0) / 100))} TL İndirim
            </Discount>
            <MinPrice>Son 30 günün en düşük fiyatı</MinPrice>
          </PriceWrapper>
        )
      )}
    </CardWrapper>
  );
};

export default Card;
