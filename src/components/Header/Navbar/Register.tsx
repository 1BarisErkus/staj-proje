import { FC } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "@/lib/firebase";
import { addUser } from "@/server/user";
import { notify } from "@/lib/notify";

import {
  AlreadyMember,
  Error,
  Input,
  LoginFormButton,
  LoginHead,
} from "@/styles/Header/Navbar/AuthModal";

type RegisterProps = {
  setIsAuth: (value: string) => void;
};

type RegisterInputs = {
  email: string;
  password: string;
  name: string;
  surname: string;
};

export const registerSchema = z.object({
  name: z.string().min(2, { message: "Adınız en az 2 karakter olmalıdır." }),
  surname: z
    .string()
    .min(2, { message: "Soyadınız en az 2 karakter olmalıdır." }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz." }),
  password: z
    .string()
    .min(6, { message: "Şifreniz en az 6 karakter olmalıdır." }),
});

const Register: FC<RegisterProps> = ({ setIsAuth }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: zodResolver(registerSchema),
  });

  const registerSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      notify(`Üyeliğiniz oluşturuldu ${data.name} ${data.surname}`, "success");
      await addUser({
        id: user.uid,
        name: `${data.name} ${data.surname}`,
        email: data.email,
      });
      setIsAuth("login");
    } catch (error: any) {
      notify(error.message, "error");
    }
    reset();
  };

  return (
    <>
      <LoginHead>Üye Ol</LoginHead>
      <form onSubmit={handleSubmit(registerSubmit)}>
        <Input
          type="text"
          placeholder="Ad"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name?.message && <Error>{errors.name?.message}</Error>}
        <Input
          type="text"
          placeholder="Soyad"
          id="surname"
          {...register("surname", { required: true })}
        />
        {errors.surname?.message && <Error>{errors.surname?.message}</Error>}
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
        <LoginFormButton type="submit">Üye Ol</LoginFormButton>
      </form>

      <AlreadyMember onClick={() => setIsAuth("login")}>
        Zaten bir hesabın var mı?
      </AlreadyMember>
    </>
  );
};

export default Register;
