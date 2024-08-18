import { useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "swiper/swiper-bundle.css";
import "@smastrom/react-rating/style.css";

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

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <SessionProvider session={pageProps.session}>
          <ThemeProvider enableSystem={false} defaultTheme="light">
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
          </ThemeProvider>
        </SessionProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
