import { FC } from "react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { dehydrate, QueryClient, useQueries } from "@tanstack/react-query";
import { getFavorites, getProducts } from "@/server/product";
import { categoryNames } from "@/lib/categoryNames";
import Breadcrumb from "@/components/Breadcrumb";
import JustForYou from "@/components/Category/JustForYou";
import { Content } from "@/styles/Category";
import Filter from "@/components/Category/Filter";
import { TitleText } from "@/styles/Category";

interface ProductFilterProps {
  session: { user: { uid: string } };
  params: any;
}

const ProductFilter: FC<ProductFilterProps> = ({ session, params }) => {
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

  const products = results[0].data;
  const favorites = results[1].data;

  const justForYouData = products
    ? products.filter(
        (product: { categoryCode: string; subCategoryCode: string }) =>
          params.slug.length > 1
            ? product.categoryCode === params.slug[params.slug.length - 2] &&
              product.subCategoryCode === params.slug[params.slug.length - 1]
            : product.categoryCode === params.slug[params.slug.length - 1]
      )
    : [];

  return (
    <>
      <Breadcrumb
        category={justForYouData[0]?.category}
        subCategory={
          params.slug.length > 1 ? justForYouData[0]?.subCategory : ""
        }
      />
      <Content>
        <TitleText>
          {categoryNames[params.slug[params.slug.length - 1]]}
        </TitleText>
        <JustForYou data={justForYouData} favorites={favorites} />
        <Filter data={justForYouData} params={params} favorites={favorites} />
      </Content>
    </>
  );
};

export default ProductFilter;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

  const { params } = context;

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
      params,
      session,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
