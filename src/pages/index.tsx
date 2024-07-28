import AdditionToYourBill from "@/components/HomePage/AdditionToYourBill";
import BestOffers from "@/components/HomePage/BestOffers";
import Campaigns from "@/components/HomePage/Campaigns";
import PopularCategories from "@/components/HomePage/PopularCategories";
import Slider from "@/components/HomePage/Slider";
import SpecialForYou from "@/components/HomePage/SpecialForYou";
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

  return (
    <>
      <Slider />
      <PopularCategories />
      <SpecialForYou data={specialForYouData} />
      <AdditionToYourBill />
      <BestOffers data={bestOffersData} />
      <Campaigns />
    </>
  );
}
