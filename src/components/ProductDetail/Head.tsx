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

interface HeadProps {
  title: string;
  targetDate: string;
  stock: number;
}

const Head: React.FC<HeadProps> = ({ title, targetDate, stock }) => {
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

  return (
    <>
      <TitleWrapper>
        <Title>{title}</Title>
        <FavoriteButton>
          <CiHeart size={40} color="orange" />
        </FavoriteButton>
      </TitleWrapper>
      <Rating value={4} style={{ maxWidth: 75 }} readOnly />
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
    </>
  );
};

export default Head;
