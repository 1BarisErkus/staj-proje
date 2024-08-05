import {
  Badge,
  BadgeWrapper,
  CardWrapper,
  Discount,
  DiscountlessAmount,
  LikeIconWrapper,
  MinPrice,
  Price,
  PriceWrapper,
  ProductImage,
  ProductName,
  SingleBadgeWrapper,
} from "@/styles/Card";
import { Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import { CiHeart } from "react-icons/ci";
import CustomSwiper from "./CustomSwiper";
import Link from "next/link";

interface CardProps {
  id: string;
  images: string[];
  name: string;
  price: number;
  badges?: string[];
  discountPercentage?: number;
  fibabanka?: boolean;
  isBestSeller?: boolean;
  size?: string;
}

const Card: React.FC<CardProps> = ({
  id,
  images,
  name,
  price,
  badges,
  discountPercentage,
  fibabanka,
  isBestSeller,
  size,
}) => {
  return (
    <Link href={`/product/${id}`}>
      <CardWrapper size={size}>
        {isBestSeller ? (
          <SingleBadgeWrapper type="bestSeller">Çok Satan</SingleBadgeWrapper>
        ) : fibabanka ? (
          <SingleBadgeWrapper type="fibabanka">Fibabanka</SingleBadgeWrapper>
        ) : null}
        <LikeIconWrapper>
          <CiHeart size={30} color="orange" />
        </LikeIconWrapper>
        <CustomSwiper
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
                width={size === "small" ? 130 : 250}
                height={size === "small" ? 100 : 200}
                priority
              />
            </SwiperSlide>
          ))}
        </CustomSwiper>
        <ProductName size={size}>{name}</ProductName>
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

        {discountPercentage === 0 ? (
          <Price>{price} TL</Price>
        ) : (
          <PriceWrapper>
            <Price>
              {price - Math.round(price * ((discountPercentage ?? 0) / 100))} TL
            </Price>
            <Discount>
              <DiscountlessAmount>{price} TL</DiscountlessAmount>{" "}
              {Math.round(price * ((discountPercentage ?? 0) / 100))} TL İndirim
            </Discount>
            <MinPrice>Son 30 günün en düşük fiyatı</MinPrice>
          </PriceWrapper>
        )}
      </CardWrapper>
    </Link>
  );
};

export default Card;
