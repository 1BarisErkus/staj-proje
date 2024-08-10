import { FC, MouseEvent } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Pagination } from "swiper/modules";
import CustomSwiper, { CustomSwiperSlide } from "./CustomSwiper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCompareStore } from "@/zustand/useCompareStore";

import { changeFavorite } from "@/server/product";
import { notify } from "@/lib/notify";
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
  ProductName,
  SingleBadgeWrapper,
} from "@/styles/Card";
import MinimalLoading from "./MinimalLoading";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { CompareItemProps } from "@/lib/types";

type CardProps = {
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
  compareMode?: boolean;
};

const Card: FC<CardProps> = ({
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
  compareMode,
}) => {
  const queryClient = useQueryClient();
  const session = useSession();
  const { compareItems, addCompareItem, removeCompareItem } = useCompareStore();

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      changeFavorite((session.data?.user as { uid: string })?.uid, id),
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

  const handleCardClick = (
    e: MouseEvent<HTMLAnchorElement>,
    product: CompareItemProps
  ) => {
    if (compareMode) {
      e.preventDefault();
      const isAlreadyAdded = compareItems.some(
        (item) => item?.productId === product.productId
      );

      if (isAlreadyAdded) removeCompareItem(product.productId);
      else addCompareItem(product);
    }
  };

  return (
    <CardWrapper
      size={size}
      $comparemode={compareMode}
      $iscompareitem={compareItems.some((item) => item?.productId === id)}
    >
      {isBestSeller || fibabanka ? (
        <SingleBadgeWrapper type={isBestSeller ? "bestSeller" : "fibabanka"}>
          {isBestSeller ? "Çok Satan" : fibabanka ? "Fibabanka ile 0 faiz" : ""}
        </SingleBadgeWrapper>
      ) : null}

      <LikeIconWrapper onClick={() => !isPending && mutate()}>
        {isPending ? (
          <MinimalLoading />
        ) : isFavorite ? (
          <FaHeart size={24} color="orange" />
        ) : (
          <CiHeart size={32} color="orange" />
        )}
      </LikeIconWrapper>

      <Link
        href={`/product/${id}`}
        onClick={(e) =>
          handleCardClick(e, {
            productId: id,
            name,
            image: images[0],
          })
        }
      >
        <CustomSwiper
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
        >
          {images.map((image, index) => (
            <CustomSwiperSlide key={index}>
              <Image
                src={`/images/products/${image}`}
                alt={name}
                width={size === "small" ? 130 : 250}
                height={size === "small" ? 100 : 200}
                priority
                style={{ margin: "20px 0" }}
              />
            </CustomSwiperSlide>
          ))}
        </CustomSwiper>

        <ProductName size={size}>{name}</ProductName>

        <Rating value={4} style={{ maxWidth: 70 }} readOnly />

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
          <Price>{price.toLocaleString("tr-TR")} TL</Price>
        ) : (
          <PriceWrapper>
            <Price>
              {(
                price - Math.round(price * ((discountPercentage ?? 0) / 100))
              ).toLocaleString("tr-TR")}{" "}
              TL
            </Price>
            <Discount>
              <DiscountlessAmount>{price} TL</DiscountlessAmount>{" "}
              {Math.round(
                price * ((discountPercentage ?? 0) / 100)
              ).toLocaleString("tr-TR")}{" "}
              TL İndirim
            </Discount>
            <MinPrice>Son 30 günün en düşük fiyatı</MinPrice>
          </PriceWrapper>
        )}
      </Link>
    </CardWrapper>
  );
};

export default Card;
