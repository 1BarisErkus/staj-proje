import {
  WhyPasajWrapper,
  CardDescription,
  CardTitle,
  Description,
  IconCard,
  IconsContainer,
  ImageWrapper,
  Title,
} from "@/styles/HomePage/WhyPasaj";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPayments, MdOutlineCancel } from "react-icons/md";

const data = [
  {
    title: "Hızlı ve Kolay Teslimat",
    description:
      "Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla gelin ve mağazadan teslim alın.",
    Icon: TbTruckDelivery,
  },
  {
    title: "Esnek Ödeme Seçenekleri",
    description:
      "Alışverişlerinizi ister kredi kartınıza taksitlendirin ister Turkcell faturanıza ek, 36 aya varan vade imkanından faydalanın.",
    Icon: MdPayments,
  },
  {
    title: "Ücretsiz İptal ve İade",
    description:
      "Ürünlerinizi kolayca ve hiçbir ücret ödemeden iptal ve iade edebilirsiniz.",
    Icon: MdOutlineCancel,
  },
];

const WhyPasaj = () => {
  return (
    <WhyPasajWrapper>
      <Title>Neden Pasaj?</Title>
      <Description>
        Akıllı telefondan elektrikli süpürgeye, hobi ürünlerinden akıllı
        saatlere binlerce çeşit elektronik ürünü Turkcell Pasaj güvencesi ve
        Turkcell Pasaj ayrıcalığıyla keşfedin.
      </Description>

      <IconsContainer>
        {data.map((item, index) => (
          <IconCard key={index}>
            <ImageWrapper>
              <item.Icon size={44} />
            </ImageWrapper>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </IconCard>
        ))}
      </IconsContainer>
    </WhyPasajWrapper>
  );
};

export default WhyPasaj;
