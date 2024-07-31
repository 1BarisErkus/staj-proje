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
  price: string;
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
          <Price>{price}</Price>
          <PriceDetail>
            TL{installmentCount && "x" + installmentCount + "Ay"}
          </PriceDetail>
        </PriceWrapper>
      </BoxLeft>
      <BoxRight>{deliveryTime && <SubText>{deliveryTime}</SubText>}</BoxRight>
      <BoxText>{subtitle && <SubText>{subtitle}</SubText>}</BoxText>
    </BoxContainer>
  );
};

export default OfferBox;
