import { FC, Fragment, useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeFavorite } from "@/server/product";
import { notify } from "@/lib/notify";
import { Rating } from "@smastrom/react-rating";
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
import MinimalLoading from "../MinimalLoading";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

type HeadProps = {
  title: string;
  targetDate: string;
  stock: number;
  isFavorite: boolean;
  productId: string;
};

const Head: FC<HeadProps> = ({
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

  const { mutate: changeFavoriteMutate, isPending: changeFavoritePending } =
    useMutation({
      mutationFn: () =>
        changeFavorite((session.data?.user as { uid: string })?.uid, productId),

      onSuccess: () => {
        if (isFavorite) notify("Ürün favorilerden kaldırıldı", "success");
        else notify("Ürün favorilere eklendi", "success");
        queryClient.invalidateQueries({
          queryKey: ["favorites"],
        });
      },

      onError: () => notify("Ürün favori durumu değiştirilemedi", "error"),
    });

  const timeDatas = [
    {
      title: "Gn",
      value: timeLeft.days,
    },
    {
      title: "Sa",
      value: timeLeft.hours,
    },
    {
      title: "Dk",
      value: timeLeft.minutes,
    },
  ];

  return (
    <>
      <TitleWrapper>
        <Title>{title}</Title>
        <FavoriteButton
          onClick={() => changeFavoriteMutate()}
          disabled={changeFavoritePending}
        >
          {changeFavoritePending ? (
            <MinimalLoading />
          ) : isFavorite ? (
            <FaHeart size={34} color="orange" />
          ) : (
            <CiHeart size={40} color="orange" />
          )}
        </FavoriteButton>
      </TitleWrapper>
      <Rating value={4} style={{ maxWidth: 100 }} readOnly />
      {targetDate !== "" && (
        <DiscountWrapper>
          <span>İndirimin bitmesine</span>{" "}
          <TimerContainer>
            {timeDatas.map((data, index) => (
              <Fragment key={index}>
                <TimePart>{data.value}</TimePart>
                <TimePart color="secondary">{data.title}</TimePart>
                {index !== timeDatas.length - 1 && <Separator>|</Separator>}
              </Fragment>
            ))}
          </TimerContainer>{" "}
          <span>kaldı.</span>
          <Stock>30&apos;dan {stock > 30 ? "fazla" : "az"} ürün vardır.</Stock>
        </DiscountWrapper>
      )}
    </>
  );
};

export default Head;
