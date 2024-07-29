import AdditionToYourBill from "@/components/HomePage/AdditionToYourBill";
import BestOffers from "@/components/HomePage/BestOffers";
import BestSellers from "@/components/HomePage/BestSellers";
import Campaigns from "@/components/HomePage/Campaigns";
import NewOnes from "@/components/HomePage/NewOnes";
import Opportunities from "@/components/HomePage/Opportunities";
import PopularCategories from "@/components/HomePage/PopularCategories";
import RecentReviews from "@/components/HomePage/RecentReviews";
import Slider from "@/components/HomePage/Slider";
import SpecialForYou from "@/components/HomePage/SpecialForYou";
import WhyPasaj from "@/components/HomePage/WhyPasaj";
import { getProducts } from "@/server/posts";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });

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
      <SpecialForYou data={specialForYouData} />
      <AdditionToYourBill />
      <BestOffers data={bestOffersData} />
      <Campaigns />
      <BestSellers data={data} />
      <Opportunities />
      <NewOnes data={newOnesData} />
      <RecentReviews data={recentReviewsData} />
      <WhyPasaj />
    </>
  );
}
