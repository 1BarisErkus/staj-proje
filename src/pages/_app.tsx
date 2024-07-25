import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "@/styles/GlobalStyles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const greycliffCF = localFont({
  src: [
    {
      path: "../../public/fonts/GreycliffCF-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/GreycliffCF-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-greycliffcf",
});

const query = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={query}>
      <Head>
        <title>Staj Final</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className={`${greycliffCF.className}`}>
        <GlobalStyles />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <ToastContainer />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
