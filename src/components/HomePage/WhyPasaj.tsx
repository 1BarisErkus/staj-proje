import Image from "next/image";
import {
  CardDescription,
  CardTitle,
  Container,
  Description,
  IconCard,
  IconsContainer,
  ImageWrapper,
  Title,
} from "@/styles/HomePage/WhyPasaj";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayments, MdOutlineCancel } from "react-icons/md";

const WhyPasaj = () => {
  return (
    <Container>
      <Title>Neden Pasaj?</Title>
      <Description>
        Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı
        saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve
        Turkcell Pasaj ayrıcalığıyla keşfedin.
      </Description>
      <IconsContainer>
        <IconCard>
          <ImageWrapper>
            <TbTruckDelivery size={44} />
          </ImageWrapper>
          <CardTitle>Hızlı ve Kolay Teslimat</CardTitle>
          <CardDescription>
            Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla gelin
            ve mağazadan teslim alın.
          </CardDescription>
        </IconCard>
        <IconCard>
          <ImageWrapper>
            <MdPayments size={44} />
          </ImageWrapper>
          <CardTitle>Esnek Ödeme Seçenekleri</CardTitle>
          <CardDescription>
            Alışverişlerinizi ister kredi kartınıza taksitlendirin ister
            Turkcell faturanıza ek, 36 aya varan vade imkanından faydalanın.
          </CardDescription>
        </IconCard>
        <IconCard>
          <ImageWrapper>
            <MdOutlineCancel size={44} />
          </ImageWrapper>
          <CardTitle>Ücretsiz İptal ve İade</CardTitle>
          <CardDescription>
            Ürünlerinizi kolayca ve hiçbir ücret ödemeden iptal ve iade
            edebilirsiniz.
          </CardDescription>
        </IconCard>
      </IconsContainer>
    </Container>
  );
};

export default WhyPasaj;
