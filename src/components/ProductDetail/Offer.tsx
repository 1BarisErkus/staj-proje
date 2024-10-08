import { FC, useState } from "react";
import { OfferWrapper } from "@/styles/ProductDetail";
import OfferBox from "./OfferBox";

type OfferProps = {
  creditCard: boolean;
  installmentPrice: number;
  installmentCount: number;
  seller: string;
  freeShipping: boolean;
  price: number;
  discountPercentage: number;
};

const Offer: FC<OfferProps> = ({
  creditCard,
  installmentPrice,
  installmentCount,
  seller,
  freeShipping,
  price,
  discountPercentage,
}) => {
  const [selectedOffer, setSelectedOffer] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelectedOffer(index);
  };

  const discountAmount = (price * discountPercentage) / 100;
  const discountPrice = price - discountAmount;

  return (
    <OfferWrapper>
      {creditCard && installmentPrice !== 0 && installmentCount !== 0 && (
        <OfferBox
          title="Kredi Kartı Limitine Takılmayın!"
          subtitle="Kredi sorgulama sonucunza göre tutarlar değişiklik gösterebilir."
          price={installmentPrice}
          installmentCount={installmentCount}
          selected={selectedOffer === 0}
          onSelect={() => handleSelect(0)}
        />
      )}

      <OfferBox
        title={seller}
        price={discountPercentage > 0 ? discountPrice : price}
        oldPrice={price}
        discountPercentage={discountPercentage}
        selected={selectedOffer === 1}
        tag={freeShipping ? "Ücretsiz Kargo" : ""}
        tagColor="#2855AC"
        deliveryTime="1 iş gününde kargoda"
        onSelect={() => handleSelect(1)}
      />
    </OfferWrapper>
  );
};

export default Offer;
