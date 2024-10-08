import { FC } from "react";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useQueries } from "@tanstack/react-query";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getBasket } from "@/server/basket";
import { getFavorites, getProducts } from "@/server/product";
import { Product, ProductForBasket } from "@/lib/types";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import { BasketItemsContainer, TitleOrder, Wrapper } from "@/styles/Basket";
import SwiperDataTemplate from "@/components/SwiperDataTemplate";
import BasketSummary from "@/components/Basket/BasketSummary";
import BasketItem from "@/components/Basket/BasketItem";
import NoItem from "@/components/Basket/NoItem";
import Loading from "@/components/Loading";

type BasketProps = {
  session: Session & { user: { uid: string } };
};

interface BasketItemProps extends ProductForBasket {
  id: string;
}

const Basket: FC<BasketProps> = ({ session }) => {
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
      {
        queryKey: ["basket"],
        queryFn: () => getBasket(session?.user?.uid),
        enabled: !!session?.user?.uid,
      },
    ],
  });

  if (results.some((result) => result.isLoading)) {
    return <Loading />;
  }

  const products = results[0].data;
  const favorites = results[1].data;
  const basket = results[2].data;

  const mayInterestYouData = products ? products.slice(0, 6) : [];

  return (
    <Wrapper>
      <Container>
        {basket?.length === 0 ? (
          <NoItem />
        ) : (
          <>
            <TitleOrder>Sepetim</TitleOrder>
            <Row>
              <Col size={8}>
                <BasketItemsContainer>
                  {basket?.map((item: BasketItemProps) => (
                    <BasketItem
                      key={item.id}
                      userId={session?.user.uid}
                      productId={item.productId}
                      image={item.image}
                      name={item.name}
                      memory={item.memory ? item.memory : null}
                      color={item.color}
                      price={item.price}
                      discountPrice={item.discountPrice}
                      count={item.count}
                      seller={item.seller}
                      limit={item.limit}
                      stock={
                        products?.find(
                          (product: Product) => product.id === item.productId
                        )?.stock
                      }
                    />
                  ))}
                </BasketItemsContainer>
              </Col>
              <Col size={4}>
                <BasketSummary />
              </Col>
            </Row>
          </>
        )}
        <SwiperDataTemplate
          title="İlginizi Çekebilecek Ürünler"
          data={mayInterestYouData}
          favorites={favorites}
        />
      </Container>
    </Wrapper>
  );
};

export default Basket;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const session = await getSession(context);

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  await queryClient.prefetchQuery({
    queryKey: ["basket"],
    queryFn: () => getBasket((session?.user as { uid: string })?.uid),
  });

  await queryClient.prefetchQuery({
    queryKey: ["favorites"],
    queryFn: () => getFavorites((session?.user as { uid: string })?.uid),
  });

  return {
    props: {
      session,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
