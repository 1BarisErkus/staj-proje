import { FC, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

import { Col, Row } from "@/styles/GlobalVariables";
import {
  CloseButton,
  Content,
  LoginButton,
  LoginFormButton,
  LoginText,
  UnOverlay,
} from "@/styles/Header/Navbar/AuthModal";
import Login from "./Login";
import Register from "./Register";

type ModalProps = {
  isOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  onClose: () => void;
};

const AuthModal: FC<ModalProps> = ({ isOpen, setIsModalOpen, onClose }) => {
  const [isAuth, setIsAuth] = useState<string | null>(null);
  const session = useSession();

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
              priority
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
            {session.data ? (
              <LoginFormButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Çıkış Yap
              </LoginFormButton>
            ) : (
              <>
                <h1>Giriş</h1>
                <LoginText>
                  Size özel ödeme avantajları ve size özel tekliflerden
                  faydalanmak için Giriş Yap/Üye Ol seçeneği ile devam
                  edebilirsiniz.
                </LoginText>
                <LoginButton onClick={() => setIsAuth("register")}>
                  Giriş Yap / Üye Ol
                </LoginButton>
                <>
                  {isAuth === "login" ? (
                    <Login
                      isAuth={isAuth}
                      setIsAuth={setIsAuth}
                      setIsModalOpen={setIsModalOpen}
                    />
                  ) : isAuth === "register" ? (
                    <Register setIsAuth={setIsAuth} />
                  ) : null}
                </>
              </>
            )}
          </Col>
        </Row>
      </Content>
    </UnOverlay>
  );
};

export default AuthModal;
