import { FC } from "react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import {
  dehydrate,
  QueryClient,
  useQueries,
  useQuery,
} from "@tanstack/react-query";

import { getFavorites, getProduct, getSimilarProducts } from "@/server/product";
import { Container, Row } from "@/styles/GlobalVariables";
import OtherSellers from "@/components/ProductDetail/OtherSellers";
import Features from "@/components/ProductDetail/Features";
import Right from "@/components/ProductDetail/Right";
import Left from "@/components/ProductDetail/Left";
import Breadcrumb from "@/components/Breadcrumb";
import { Content } from "@/styles/ProductDetail";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import SwiperDataTemplate from "@/components/SwiperDataTemplate";

type ProductProps = {
  session: { user: { uid: string } };
  id: string;
};

const Product: FC<ProductProps> = ({ session, id }) => {
  const { data: product, isLoading: productLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  const results = useQueries({
    queries: [
      {
        queryKey: ["similarProducts"],
        queryFn: () => getSimilarProducts(product.categoryCode),
        enabled: !!product,
      },
      {
        queryKey: ["favorites"],
        queryFn: () => getFavorites((session?.user as { uid: string })?.uid),
        enabled: !!(session?.user as { uid: string })?.uid,
      },
    ],
  });

  if (productLoading || results.some((result) => result.isLoading)) {
    return <Loading />;
  }

  const similarProducts = results[0].data;
  const favorites = results[1].data;

  if (!product || Object.keys(product).length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <Breadcrumb
        category={product.category}
        subCategory={product.subCategory}
      />
      <Content>
        <Container>
          <Row>
            <Left
              images={product.images}
              limit={product.limit}
              similarProducts={similarProducts}
              favorites={favorites}
            />
            <Right
              id={product.id}
              image={product.images[0]}
              name={product.name}
              discountPercentage={product.discountPercentage}
              discountEndTime={product.discountEndTime}
              stock={product.stock}
              limit={product.limit}
              configuration={product.configuration}
              creditCard={product.creditCard}
              installmentPrice={product.installmentPrice}
              installmentCount={product.installmentCount}
              seller={product.seller}
              price={product.price}
              freeShipping={product.freeShipping}
              guarantee={product.guarantee}
              isContract={product.isContract}
              isFavorite={favorites.includes(product.id)}
              rating={product.rating}
            />
          </Row>
        </Container>
      </Content>
      <OtherSellers data={product.otherSellers} />
      <SwiperDataTemplate
        title="Son Gezilenler"
        data={similarProducts}
        favorites={favorites}
      />
      <Features
        description={product.description}
        features={product.features}
        reviews={product.comments}
        seller={product.seller}
        productId={id}
        qas={product.qa}
      />
    </>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

  const { id } = context.params as { id: string };

  const product = await getProduct(id as string);

  if (!product) {
    return {
      notFound: true,
    };
  }

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
      id,
      session,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
