import { Col, Row } from "@/styles/GlobalVariables";
import {
  CloseButton,
  Content,
  LoginBottomText,
  LoginButton,
  LoginText,
  UnOverlay,
} from "@/styles/Header/Navbar/AuthModal";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <UnOverlay>
      <Content>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Row>
          <Col size={6}>
            <Image
              src="/images/login-image.png"
              alt="Login"
              width={350}
              height={200}
            />
            <h2>Turkcell Pasaj’ın fırsatlarla dolu dünyasına hoş geldiniz!</h2>
            <LoginText>
              Turkcell Pasaj’da fırsatlar bitmez! İhtiyacınız olan bir çok
              ürüne, güvenli ve esnek ödeme seçenekleri ile hem de kredi kartı
              limitinize takılmadan sahip olabilirsiniz. Favorilediğiniz ürünler
              için bilgilendirmelerden, siparişlerinizle ilgili tüm işlemlere ve
              daha da fazlasına kolaylıkla erişim sağlayabilirsiniz.
            </LoginText>
          </Col>
          <Col size={6}>
            <h1>Giriş</h1>
            <LoginText>
              Size özel ödeme avantajları ve size özel tekliflerden faydalanmak
              için Giriş Yap/Üye Ol seçeneği ile devam edebilirsiniz.
            </LoginText>
            <LoginButton>Giriş Yap / Üye Ol</LoginButton>
            <LoginBottomText>Kurumsal Yetkili Girişi</LoginBottomText>
          </Col>
        </Row>
      </Content>
    </UnOverlay>
  );
};

export default AuthModal;
