import { FC } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { notify } from "@/lib/notify";

import {
  AlreadyMember,
  Error,
  Input,
  LoginFormButton,
  LoginHead,
} from "@/styles/Header/Navbar/AuthModal";

type LoginProps = {
  isAuth: string | null;
  setIsAuth: (value: string | null) => void;
  setIsModalOpen: (isOpen: boolean) => void;
};

type LoginInputs = {
  email: string;
  password: string;
};

export const loginSchema = z.object({
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  password: z
    .string()
    .min(6, { message: "Şifreniz en az 6 karakter olmalıdır." }),
});

const Login: FC<LoginProps> = ({ setIsAuth, setIsModalOpen }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  const loginSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/",
    });

    if (!result?.error) {
      setIsAuth(null);
      setIsModalOpen(false);
      router.push("/");
      notify("Giriş başarılı", "success");
    } else {
      notify("Kullanıcı adı veya şifre hatalı !", "error");
    }
    reset();
  };

  return (
    <>
      <LoginHead>Giriş Yap</LoginHead>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <Input
          type="email"
          placeholder="E-posta"
          id="email"
          {...register("email", { required: true })}
        />
        {errors.email?.message && <Error>{errors.email?.message}</Error>}
        <Input
          type="password"
          placeholder="Şifre"
          id="password"
          {...register("password", { required: true })}
        />
        {errors.password?.message && <Error>{errors.password?.message}</Error>}
        <LoginFormButton type="submit">Giriş Yap</LoginFormButton>
      </form>
      <AlreadyMember onClick={() => setIsAuth("register")}>
        Üye Ol!
      </AlreadyMember>
    </>
  );
};

export default Login;
