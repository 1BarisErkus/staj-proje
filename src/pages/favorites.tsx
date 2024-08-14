import { FC } from "react";
import { Session } from "next-auth";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { dehydrate, QueryClient, useQueries } from "@tanstack/react-query";

import { Product } from "@/lib/types";
import { getFavorites, getProducts } from "@/server/product";
import { CardListWrapper } from "@/styles/GlobalVariables";
import Loading from "@/components/Loading";
import Section from "@/components/Section";
import Card from "@/components/Card";

type FavoritesProps = {
  session: Session & { user: { uid: string } };
};

const Favorites: FC<FavoritesProps> = ({ session }) => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["products"],
        queryFn: getProducts,
      },
      {
        queryKey: ["favorites"],
        queryFn: () => getFavorites(session?.user?.uid),
        enabled: !!session?.user?.uid,
      },
    ],
  });

  if (results.some((result) => result.isLoading)) {
    return <Loading />;
  }

  const products = results[0].data;
  const favorites = results[1].data;

  const favoritesData = products?.filter((product: Product) =>
    favorites.includes(product.id)
  );

  return (
    <Section title="Favorilerim">
      <CardListWrapper>
        {favoritesData.length > 0 ? (
          favoritesData?.map((product: Product) => (
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
              rating={product.rating}
            />
          ))
        ) : (
          <p>Favori ürününüz bulunmamaktadır.</p>
        )}
      </CardListWrapper>
    </Section>
  );
};

export default Favorites;

export const getServerSideProps: GetServerSideProps = async (context) => {
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
