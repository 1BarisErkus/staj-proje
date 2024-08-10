import { FC } from "react";
import { getSession, GetSessionParams } from "next-auth/react";
import { Session } from "next-auth";
import { dehydrate, QueryClient, useQueries } from "@tanstack/react-query";

import { getFavorites, getProducts } from "@/server/product";

import AdditionToYourBill from "@/components/HomePage/AdditionToYourBill";
import BestSellers from "@/components/HomePage/BestSellers";
import Campaigns from "@/components/HomePage/Campaigns";
import Opportunities from "@/components/HomePage/Opportunities";
import PopularCategories from "@/components/HomePage/PopularCategories";
import Slider from "@/components/HomePage/Slider";
import WhyPasaj from "@/components/HomePage/WhyPasaj";
import Loading from "@/components/Loading";
import SwiperDataTemplate from "@/components/SwiperDataTemplate";

type HomeProps = {
  session: Session & { user: { uid: string } };
};

const Home: FC<HomeProps> = ({ session }) => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["products"],
        queryFn: getProducts,
      },
      {
        queryKey: ["favorites"],
        queryFn: () => getFavorites(session?.user?.uid),
        enabled: !!session,
      },
    ],
  });

  if (results.some((result) => result.isLoading)) {
    return <Loading />;
  }

  const products = results[0].data;
  const favorites = results[1].data;

  const specialForYouData = products
    ? products.filter(
        (product: { isSpecialForYou: boolean }) => product.isSpecialForYou
      )
    : [];

  const bestOffersData = products
    ? products.filter(
        (product: { isBestOffer: boolean }) => product.isBestOffer
      )
    : [];

  const newOnesData = products
    ? products.filter((product: { isNew: boolean }) => product.isNew)
    : [];

  const recentReviewsData = products ? products.slice(0, 4) : [];

  return (
    <>
      <Slider />
      <PopularCategories />
      <SwiperDataTemplate
        title="Sana Özel Ürünler"
        data={specialForYouData}
        favorites={favorites}
      />
      <AdditionToYourBill />
      <SwiperDataTemplate
        title="En İyi Teklifler"
        data={bestOffersData}
        favorites={favorites}
      />
      <Campaigns />
      <BestSellers title="Çok Satanlar" data={products} favorites={favorites} />
      <Opportunities />
      <SwiperDataTemplate
        title="Pasajın Yenileri"
        data={newOnesData}
        favorites={favorites}
      />
      <SwiperDataTemplate
        title="Son İncelenenler"
        data={recentReviewsData}
        favorites={favorites}
      />
      <WhyPasaj />
    </>
  );
};

export default Home;

export const getServerSideProps = async (context: GetSessionParams) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  await queryClient.prefetchQuery({
    queryKey: ["favorites"],
    queryFn: () => getFavorites((session?.user as { uid: string })?.uid),
  });

  return {
    props: {
      session,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
