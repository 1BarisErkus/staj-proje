// components/OfferBox.tsx
import React from "react";
import {
  BoxContainer,
  BoxLeft,
  BoxText,
  BoxRight,
  MainText,
  SubText,
  Price,
  Tag,
  RadioInput,
  TextWrapper,
  PriceWrapper,
  PriceDetail,
} from "@/styles/ProductDetail/OfferBox";

interface OfferBoxProps {
  title: string;
  subtitle?: string;
  price: number;
  oldPrice?: number;
  discountPercentage?: number;
  selected?: boolean;
  tag?: string;
  tagColor?: string;
  deliveryTime?: string;
  installmentCount?: number;
  onSelect: () => void;
}

const OfferBox: React.FC<OfferBoxProps> = ({
  title,
  subtitle,
  price,
  oldPrice,
  discountPercentage,
  selected,
  tag,
  tagColor = "#1d4ed8",
  deliveryTime,
  installmentCount,
  onSelect,
}) => {
  return (
    <BoxContainer selected={selected} onClick={onSelect}>
      {tag && <Tag color={tagColor}>{tag}</Tag>}
      <BoxLeft>
        <TextWrapper>
          <RadioInput checked={selected} readOnly />
          <MainText>{title}</MainText>
        </TextWrapper>
        <PriceWrapper>
          <div>
            <Price>{price.toLocaleString("tr-TR")}</Price>
            <PriceDetail>
              TL{installmentCount && "x" + installmentCount + "Ay"}
            </PriceDetail>
          </div>
          {discountPercentage && discountPercentage !== 0 ? (
            <>
              <Price type="old">{oldPrice !== 0 ? oldPrice : "asdasdsa"}</Price>
              <PriceDetail type="old">
                TL <span>%{discountPercentage} indirim</span>
              </PriceDetail>
            </>
          ) : null}
        </PriceWrapper>
      </BoxLeft>
      <BoxRight>{deliveryTime && <SubText>{deliveryTime}</SubText>}</BoxRight>
      <BoxText>{subtitle && <SubText>{subtitle}</SubText>}</BoxText>
    </BoxContainer>
  );
};

export default OfferBox;
