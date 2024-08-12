import NextAuth from "next-auth/next";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { notify } from "@/lib/notify";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials?.email || "",
            credentials?.password || ""
          );
          if (userCredential.user) {
            return userCredential.user;
          }
          return null;
        } catch (error) {
          notify("Beklenmedik bir hata oluştu!", "error");
          throw new Error("Kimlik doğrulama başarısız");
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token?.user) {
        session.user = token.user as {
          id: string;
          email: string;
        };
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async redirect({ baseUrl }: { baseUrl: string }) {
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
