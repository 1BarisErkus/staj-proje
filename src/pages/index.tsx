import AdditionToYourBill from "@/components/HomePage/AdditionToYourBill";
import BestOffers from "@/components/HomePage/BestOffers";
import BestSellers from "@/components/HomePage/BestSellers";
import Campaigns from "@/components/HomePage/Campaigns";
import NewOnes from "@/components/HomePage/NewOnes";
import Opportunities from "@/components/HomePage/Opportunities";
import PopularCategories from "@/components/HomePage/PopularCategories";
import RecentReviews from "@/components/RecentReviews";
import Slider from "@/components/HomePage/Slider";
import SpecialForYou from "@/components/HomePage/SpecialForYou";
import WhyPasaj from "@/components/HomePage/WhyPasaj";
import { getFavorites, getProducts } from "@/server/posts";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import React from "react";

interface HomeProps {
  dehydratedState: unknown;
  session: any;
}

const Home: React.FC<HomeProps> = ({ session }) => {
  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  const { data: favorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: async () =>
      await getFavorites((session?.user as { uid: string })?.uid),
  });

  const specialForYouData = data
    ? data.filter(
        (product: { isSpecialForYou: boolean }) => product.isSpecialForYou
      )
    : [];

  const bestOffersData = data
    ? data.filter((product: { isBestOffer: boolean }) => product.isBestOffer)
    : [];

  const newOnesData = data
    ? data.filter((product: { isNew: boolean }) => product.isNew)
    : [];

  const recentReviewsData = data ? data.slice(0, 4) : [];

  return (
    <>
      <Slider />
      <PopularCategories />
      <SpecialForYou data={specialForYouData} favorites={favorites} />
      <AdditionToYourBill />
      <BestOffers data={bestOffersData} favorites={favorites} />
      <Campaigns />
      <BestSellers data={data} favorites={favorites} />
      <Opportunities />
      <NewOnes data={newOnesData} favorites={favorites} />
      <RecentReviews data={recentReviewsData} favorites={favorites} />
      <WhyPasaj />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
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
