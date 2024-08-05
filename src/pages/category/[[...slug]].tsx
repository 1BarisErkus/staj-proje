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
        <JustForYou data={justForYouData} />
        <Filter data={justForYouData} params={params} />
      </Content>
    </>
  );
};

export default ProductFilter;
