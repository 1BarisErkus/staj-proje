import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import JustForYou from "@/components/Category/JustForYou";
import Title from "@/components/Category/Title";
import { getProducts } from "@/server/posts";
import { Content } from "@/styles/Category";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

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

  console.log(params.slug[params.slug.length - 1]);

  const justForYouData = data
    ? data.filter(
        (product: { brandCode: string }) =>
          product.brandCode === params.slug[params.slug.length - 1]
      )
    : [];

  return (
    <>
      <Breadcrumb items={params.slug} />
      <Content>
        <Title title={params.slug[params.slug.length - 1]} />
        <JustForYou data={justForYouData} />
      </Content>
    </>
  );
};

export default ProductFilter;
