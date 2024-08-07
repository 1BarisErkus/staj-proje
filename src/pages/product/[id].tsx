import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Breadcrumb from "@/components/Breadcrumb";
import { getFavorites, getProduct, getSimilarProducts } from "@/server/posts";
import { Container, Row } from "@/styles/GlobalVariables";
import { Content } from "@/styles/ProductDetail";
import Left from "@/components/ProductDetail/Left";
import Right from "@/components/ProductDetail/Right";
import OtherSellers from "@/components/ProductDetail/OtherSellers";
import RecentReviews from "@/components/RecentReviews";
import Features from "@/components/ProductDetail/Features";

interface ProductProps {
  session: { user: { uid: string } };
  params: any;
}

const Product: React.FC<ProductProps> = ({ session, params }) => {
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(params.id),
  });

  const { data: similarProducts } = useQuery({
    queryKey: ["similarProducts"],
    queryFn: () => getSimilarProducts(data.categoryCode),
  });

  const { data: favorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => getFavorites((session?.user as { uid: string })?.uid),
  });

  return (
    <>
      <Breadcrumb category={data.category} subCategory={data.subCategory} />
      <Content>
        <Container>
          <Row>
            <Left
              images={data.images}
              limit={data.limit}
              similarProducts={similarProducts}
              favorites={favorites}
            />
            <Right
              id={data.id}
              image={data.images[0]}
              name={data.name}
              discountPercentage={data.discountPercentage}
              discountEndTime={data.discountEndTime}
              stock={data.stock}
              limit={data.limit}
              configuration={data.configuration}
              creditCard={data.creditCard}
              installmentPrice={data.installmentPrice}
              installmentCount={data.installmentCount}
              seller={data.seller}
              price={data.price}
              freeShipping={data.freeShipping}
              guarantee={data.guarantee}
              isContract={data.isContract}
              isFavorite={favorites.includes(data.id)}
            />
          </Row>
        </Container>
      </Content>
      <OtherSellers data={data.otherSellers} />
      <RecentReviews data={similarProducts} favorites={favorites} />
      <Features
        description={data.description}
        features={data.features}
        reviews={data.comments}
        seller={data.seller}
        productId={params.id}
        qas={data.qa}
      />
    </>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

  const { params } = context;

  const product = await getProduct(params?.id as string);

  await queryClient.prefetchQuery({
    queryKey: ["product"],
    queryFn: () => product,
  });

  await queryClient.prefetchQuery({
    queryKey: ["similarProducts"],
    queryFn: () => getSimilarProducts(product.categoryCode),
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
