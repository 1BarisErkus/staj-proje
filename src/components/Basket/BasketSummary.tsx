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
import { FaPlus } from "react-icons/fa6";

const BasketSummary: React.FC = () => {
  return (
    <SummaryContainer>
      <SummaryTitle>
        <span>Sipariş Özeti</span> (2 Ürün)
      </SummaryTitle>
      <Item>
        <span>Ürünler Toplamı</span>
        <Price>90.088 TL</Price>
      </Item>
      <Item>
        <span>Kargo Tutarı</span>
        <Price>Ücretsiz</Price>
      </Item>
      <Item>
        <span>İndirimler</span>
        <Discount>- 11.000 TL</Discount>
      </Item>
      <Item>
        <span>Ödenecek Tutar (KDV Dahil)</span>
        <Price>79.088 TL</Price>
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
