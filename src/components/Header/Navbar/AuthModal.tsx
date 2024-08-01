import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Col, Row } from "@/styles/GlobalVariables";
import {
  AlreadyMember,
  CloseButton,
  Content,
  Error,
  Input,
  LoginButton,
  LoginFormButton,
  LoginHead,
  LoginText,
  UnOverlay,
} from "@/styles/Header/Navbar/AuthModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LoginInputs {
  email: string;
  password: string;
}

interface RegisterInputs extends LoginInputs {
  name: string;
  surname: string;
}

const registerSchema = z.object({
  name: z.string().min(2, { message: "Adınız en az 2 karakter olmalıdır." }),
  surname: z
    .string()
    .min(2, { message: "Soyadınız en az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  password: z
    .string()
    .min(6, { message: "Şifreniz en az 6 karakter olmalıdır." }),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  password: z
    .string()
    .min(6, { message: "Şifreniz en az 6 karakter olmalıdır." }),
});

const AuthModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isAuth, setIsAuth] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(isAuth === "register" ? registerSchema : loginSchema),
  });
  const loginSubmit: SubmitHandler<LoginInputs> = (data) =>
    console.log("login", data);
  const registerSubmit: SubmitHandler<RegisterInputs> = (data) =>
    console.log("register", data);

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
            <h1>Giriş</h1>
            <LoginText>
              Size özel ödeme avantajları ve size özel tekliflerden faydalanmak
              için Giriş Yap/Üye Ol seçeneği ile devam edebilirsiniz.
            </LoginText>
            <LoginButton onClick={() => setIsAuth("register")}>
              Giriş Yap / Üye Ol
            </LoginButton>
            <>
              {isAuth === "login" ? (
                <>
                  <LoginHead>Giriş Yap</LoginHead>
                  <form onSubmit={handleSubmit(loginSubmit)}>
                    <Input
                      type="email"
                      placeholder="E-posta"
                      {...register("email", { required: true })}
                    />
                    {errors.email?.message && (
                      <Error>{errors.email?.message}</Error>
                    )}
                    <Input
                      type="password"
                      placeholder="Şifre"
                      {...register("password", { required: true })}
                    />
                    {errors.password?.message && (
                      <Error>{errors.password?.message}</Error>
                    )}
                    <LoginFormButton type="submit">Giriş Yap</LoginFormButton>
                  </form>
                  <AlreadyMember onClick={() => setIsAuth("register")}>
                    Üye Ol!
                  </AlreadyMember>
                </>
              ) : isAuth === "register" ? (
                <>
                  <LoginHead>Üye Ol</LoginHead>
                  <form onSubmit={handleSubmit(registerSubmit)}>
                    <Input
                      type="text"
                      placeholder="Ad"
                      {...register("name", { required: true })}
                    />
                    {errors.name?.message && (
                      <Error>{errors.name?.message}</Error>
                    )}
                    <Input
                      type="text"
                      placeholder="Soyad"
                      {...register("surname", { required: true })}
                    />
                    {errors.surname?.message && (
                      <Error>{errors.surname?.message}</Error>
                    )}
                    <Input
                      type="email"
                      placeholder="E-posta"
                      {...register("email", { required: true })}
                    />
                    {errors.email?.message && (
                      <Error>{errors.email?.message}</Error>
                    )}
                    <Input
                      type="password"
                      placeholder="Şifre"
                      {...register("password", { required: true })}
                    />
                    {errors.password?.message && (
                      <Error>{errors.password?.message}</Error>
                    )}
                    <LoginFormButton type="submit">Üye Ol</LoginFormButton>
                  </form>

                  <AlreadyMember onClick={() => setIsAuth("login")}>
                    Zaten bir hesabın var mı?
                  </AlreadyMember>
                </>
              ) : null}
            </>
          </Col>
        </Row>
      </Content>
    </UnOverlay>
  );
};

export default AuthModal;
