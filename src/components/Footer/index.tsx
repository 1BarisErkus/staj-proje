import { Col, Container } from "@/styles/GlobalVariables";
import {
  ColLink,
  ColTitle,
  FooterContainer,
  FooterSection,
} from "@/styles/Footer";
import Slider from "./Slider";
import Bottom from "./Bottom";
import Middle from "./Middle";

const datas = [
  {
    title: "Hakkımızda",
    links: [
      "Genel Bakış",
      "Haberler & Duyurular",
      "Kurumsal İletişim ve Sürdürülebilirlik",
      "Kariyer",
      "Gizlilik ve Güvenlik",
      "İletişim",
      "Pasaj'da Satıcı Ol",
      "Pasaj Blog",
      "Pasaj Gaming",
      "Telefon Sat",
    ],
  },
  {
    title: "Popüler Kategoriler",
    links: [
      "Android Telefonlar",
      "iPhone Telefonlar",
      "İkinci El / Yenilenmiş Telefonlar",
      "Akıllı Saatler",
      "Bluetooth Kulaklıklar",
      "Telefon Kılıfları",
      "Tabletler",
      "Laptop",
      "Oyun Bilgisayarları",
      "Modemler",
    ],
  },
  {
    title: "Markalar",
    links: ["Apple", "Samsung", "Dyson"],
  },
  {
    title: "Yardım",
    links: [
      "Yardım Merkezi",
      "İşlem Rehberi",
      "Sipariş Sorgulama",
      "Nasıl İade Edebilirim?",
    ],
  },
  {
    title: "Özel Günler & Kampanyalar",
    links: [
      "Ramazan Kampanyası",
      "Ramazan Teklifleri",
      "Düğün ve Çeyiz Paketleri",
      "Telefon Sat",
      "Eskiyi Getir Yeniyi Al",
      "Teknolojik Cihaz Desteği",
      "Vergisiz Telefonlar",
      "Vergisiz Bilgisayarlar",
      "Fırsatlar Pasajı",
      "Pasaj Günleri",
    ],
  },
  {
    title: "Popüler Ürünler",
    links: [
      "iPhone 15",
      "iPhone 15 Plus",
      "iPhone 15 Pro",
      "iPhone 15 Pro Max",
      "iPhone 14",
      "iPhone 14 Plus",
      "iPhone 14 Pro",
      "iPhone 14 Pro Max",
      "iPhone 13",
      "iPhone 13 Mini",
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterSection>
          {datas.map((data, index) => (
            <Col key={index}>
              <ColTitle>{data.title}</ColTitle>
              {data.links.map((link, index) => (
                <ColLink key={index} href="#">
                  {link}
                </ColLink>
              ))}
            </Col>
          ))}
        </FooterSection>
        <Middle />
        <Slider />
        <Bottom />
      </Container>
    </FooterContainer>
  );
};

export default Footer;
