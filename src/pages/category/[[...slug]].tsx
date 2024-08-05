import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import JustForYou from "@/components/Category/JustForYou";
import Title from "@/components/Category/Title";
import { getFavorites, getProducts } from "@/server/posts";
import { Content } from "@/styles/Category";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Filter from "@/components/Category/Filter";
import { getSession } from "next-auth/react";

interface ProductFilterProps {
  session: { user: { uid: string } };
  params: any;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ session, params }) => {
  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  const { data: favorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: async () => await getFavorites(session?.user.uid),
  });

  const justForYouData = data
    ? data.filter(
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
        <Title title={params.slug[params.slug.length - 1]} />
        <JustForYou data={justForYouData} favorites={favorites} />
        <Filter data={justForYouData} params={params} favorites={favorites} />
      </Content>
    </>
  );
};

export default ProductFilter;

export const getServerSideProps = async (context: any) => {
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
