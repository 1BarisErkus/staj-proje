import { getBasket } from "@/server/basket";
import {
  Button,
  CheckboxContainer,
  CheckboxLabel,
  ContinueButton,
  Discount,
  Item,
  Price,
  SummaryContainer,
  SummaryTitle,
} from "@/styles/Basket/BasketSummary";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { FaPlus } from "react-icons/fa6";

const BasketSummary: React.FC = () => {
  const session = useSession();

  const { data: basket } = useQuery({
    queryKey: ["basket"],
    queryFn: () => getBasket((session.data?.user as { uid: string })?.uid),
  });

  const total = basket?.reduce(
    (acc: number, item: { price: number; count: number }) =>
      acc + item.price * item.count,
    0
  );

  const totalPriceWithDiscount = basket?.reduce(
    (acc: number, item: { discountPrice: number; count: number }) =>
      acc + item.discountPrice * item.count,
    0
  );

  const discount = total - totalPriceWithDiscount;

  return (
    <SummaryContainer>
      <SummaryTitle>
        <span>Sipariş Özeti</span> ({basket?.length})
      </SummaryTitle>
      <Item>
        <span>Ürünler Toplamı</span>
        <Price>{total} TL</Price>
      </Item>
      <Item>
        <span>Kargo Tutarı</span>
        <Price>Ücretsiz</Price>
      </Item>
      <Item>
        <span>İndirimler</span>
        <Discount>- {discount} TL</Discount>
      </Item>
      <Item>
        <span>Ödenecek Tutar (KDV Dahil)</span>
        <Price>{totalPriceWithDiscount} TL</Price>
      </Item>
      <Button>
        İndirim Kodu Ekle
        <span style={{ marginLeft: "auto" }}>
          <FaPlus />
        </span>
      </Button>
      <CheckboxContainer>
        <input type="checkbox" id="agreement" />
        <CheckboxLabel htmlFor="agreement">
          <span>Kullanıcı sözleşmesini</span> okudum, onaylıyorum.
        </CheckboxLabel>
      </CheckboxContainer>
      <ContinueButton>Siparişe Devam Et</ContinueButton>
    </SummaryContainer>
  );
};

export default BasketSummary;
