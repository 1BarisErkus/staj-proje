import { FC } from "react";
import {
  Badge,
  BadgeContainer,
  BadgeText,
  BadgeWrapper,
} from "@/styles/ProductDetail";
import { FaShippingFast } from "react-icons/fa";
import { GoShield } from "react-icons/go";
import { LuCalendarPlus } from "react-icons/lu";

type BadgesProps = {
  freeShipping: boolean;
  guarantee: boolean;
  isContract: boolean;
};

const Badges: FC<BadgesProps> = ({ freeShipping, guarantee, isContract }) => {
  return (
    <BadgeContainer>
      {freeShipping && (
        <BadgeWrapper>
          <Badge>
            <FaShippingFast size={24} />
          </Badge>
          <BadgeText>Ücretsiz Kargo</BadgeText>
        </BadgeWrapper>
      )}

      {guarantee && (
        <BadgeWrapper>
          <Badge>
            <GoShield size={24} />
          </Badge>
          <BadgeText>Turkcell Pasaj Garantisi</BadgeText>
        </BadgeWrapper>
      )}

      {isContract && (
        <BadgeWrapper>
          <Badge>
            <LuCalendarPlus size={24} />
          </Badge>
          <BadgeText>Taksitli Alışveriş</BadgeText>
        </BadgeWrapper>
      )}
    </BadgeContainer>
  );
};

export default Badges;
