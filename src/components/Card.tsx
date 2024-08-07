import CustomSwiper, { CustomSwiperSlide } from "./CustomSwiper";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
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
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeFavorite } from "@/server/posts";
import { notify } from "@/lib/notify";
import { useSession } from "next-auth/react";

interface CardProps {
  id: string;
  images: string[];
  name: string;
  price: number;
  badges?: string[];
  discountPercentage?: number;
  fibabanka?: boolean;
  isBestSeller?: boolean;
  isFavorite: boolean;
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
  isFavorite,
  size,
}) => {
  const session = useSession();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: async () =>
      await changeFavorite((session.data?.user as { uid: string })?.uid, id),
    onSuccess: () => {
      if (isFavorite) notify("Ürün favorilerden kaldırıldı", "success");
      else notify("Ürün favorilere eklendi", "success");
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
    },
    onError: () =>
      notify(
        "Ürün favori durumu değiştirilemedi. Lütfen önce oturum durumunuzu kontrol edin.",
        "error"
      ),
  });

  return (
    <CardWrapper size={size}>
      {isBestSeller ? (
        <SingleBadgeWrapper type="bestSeller">Çok Satan</SingleBadgeWrapper>
      ) : fibabanka ? (
        <SingleBadgeWrapper type="fibabanka">Fibabanka</SingleBadgeWrapper>
      ) : null}
      <LikeIconWrapper onClick={() => mutate()}>
        {isFavorite ? (
          <FaHeart size={24} color="orange" />
        ) : (
          <CiHeart size={30} color="orange" />
        )}
      </LikeIconWrapper>
      <Link href={`/product/${id}`}>
        <CustomSwiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {images.map((image, index) => (
            <CustomSwiperSlide key={index}>
              <ProductImage
                src={`/images/products/${image}`}
                alt={name}
                width={size === "small" ? 130 : 250}
                height={size === "small" ? 100 : 200}
                priority
              />
            </CustomSwiperSlide>
          ))}
        </CustomSwiper>
        <ProductName size={size}>{name}</ProductName>
        <Rating value={4} style={{ maxWidth: 50 }} />
        {size !== "small" && (
          <BadgeWrapper>
            {badges &&
              badges.length !== 0 &&
              badges.map((badge, index) => (
                <Badge key={index} title={badge}>
                  {badge}
                </Badge>
              ))}
          </BadgeWrapper>
        )}

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
      </Link>
    </CardWrapper>
  );
};

export default Card;
