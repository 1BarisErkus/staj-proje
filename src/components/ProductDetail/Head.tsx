import React, { useCallback, useEffect, useState } from "react";
import {
  DiscountWrapper,
  FavoriteButton,
  Separator,
  Stock,
  TimePart,
  TimerContainer,
  Title,
  TitleWrapper,
} from "@/styles/ProductDetail";
import { CiHeart } from "react-icons/ci";
import { Rating } from "@smastrom/react-rating";
import { FaHeart } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeFavorite } from "@/server/posts";
import { useSession } from "next-auth/react";
import { notify } from "@/lib/notify";

interface HeadProps {
  title: string;
  targetDate: string;
  stock: number;
  isFavorite: boolean;
  productId: string;
}

const Head: React.FC<HeadProps> = ({
  title,
  targetDate,
  stock,
  isFavorite,
  productId,
}) => {
  const session = useSession();
  const queryClient = useQueryClient();

  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, targetDate]);

  const { isPending, mutate } = useMutation({
    mutationFn: async () =>
      await changeFavorite(
        (session.data?.user as { uid: string })?.uid,
        productId
      ),
    onSuccess: () => {
      if (isFavorite) notify("Ürün favorilerden kaldırıldı", "success");
      else notify("Ürün favorilere eklendi", "success");
      queryClient.invalidateQueries({
        queryKey: ["favorites"],
      });
    },
    onError: () => notify("Ürün favori durumu değiştirilemedi", "error"),
  });

  return (
    <>
      <TitleWrapper>
        <Title>{title}</Title>
        <FavoriteButton onClick={() => mutate()} disabled={isPending}>
          {isFavorite ? (
            <FaHeart size={34} color="orange" />
          ) : (
            <CiHeart size={40} color="orange" />
          )}
        </FavoriteButton>
      </TitleWrapper>
      <Rating value={4} style={{ maxWidth: 75 }} readOnly />
      {targetDate !== "" && (
        <DiscountWrapper>
          <span>İndirimin bitmesine</span>{" "}
          <TimerContainer>
            <TimePart>{timeLeft.days}</TimePart>
            <TimePart color="secondary">Gn</TimePart>
            <Separator>|</Separator>
            <TimePart>{timeLeft.hours}</TimePart>
            <TimePart color="secondary">Sa</TimePart>
            <Separator>|</Separator>
            <TimePart>{timeLeft.minutes}</TimePart>
            <TimePart color="secondary">Dk</TimePart>
          </TimerContainer>{" "}
          <span>kaldı.</span>
          <Separator>|</Separator>
          <Stock>30&apos;dan {stock > 30 ? "fazla" : "az"} ürün vardır.</Stock>
        </DiscountWrapper>
      )}
    </>
  );
};

export default Head;
