import { Product } from "@/common/types";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { getFavorites, getProducts } from "@/server/posts";
import { CardList } from "@/styles/HomePage/BestSellers";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getSession, GetSessionParams } from "next-auth/react";
import React from "react";

const Favorites = ({ session }: { session: any }) => {
  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  const { data: favorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: async () =>
      await getFavorites((session?.user as { uid: string })?.uid),
  });

  const favoritesDate = data?.filter((product: Product) =>
    favorites.includes(product.id)
  );

  return (
    <Section title="Favorilerim">
      <CardList>
        {favoritesDate?.slice(0, 8).map((product: Product) => (
          <Card
            key={product.id}
            id={product.id}
            images={product.images}
            name={product.name}
            price={product.price}
            badges={product.badges}
            discountPercentage={product.discountPercentage}
            fibabanka={product.fibabanka}
            isBestSeller={product.isBestSeller}
            isFavorite={favorites.includes(product.id)}
          />
        ))}
      </CardList>
    </Section>
  );
};

export default Favorites;

export const getServerSideProps = async (
  context: GetSessionParams | undefined
) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  await queryClient.prefetchQuery({
    queryKey: ["favorites"],
    queryFn: async () =>
      await getFavorites((session?.user as { uid: string })?.uid),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      session,
    },
  };
};
