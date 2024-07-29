import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import JustForYou from "@/components/Category/JustForYou";
import Title from "@/components/Category/Title";
import { getProducts } from "@/server/posts";
import { Content } from "@/styles/Category";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Filter from "@/components/Category/Filter";

export async function getServerSideProps({ params }: { params: any }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return {
    props: {
      params,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const ProductFilter = ({ params }: { params: any }) => {
  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  const justForYouMainData = data
    ? data.filter(
        (product: { brandCode: string }) =>
          product.brandCode === params.slug[params.slug.length - 1]
      )
    : [];

  const justForYouData =
    justForYouMainData.length > 1
      ? justForYouMainData
      : data.filter(
          (product: { categoryCode: string }) =>
            product.categoryCode === params.slug[params.slug.length - 1]
        );

  return (
    <>
      <Breadcrumb items={params.slug} />
      <Content>
        <Title title={params.slug[params.slug.length - 1]} />
        <JustForYou data={justForYouData} />
        <Filter />
      </Content>
    </>
  );
};

export default ProductFilter;
