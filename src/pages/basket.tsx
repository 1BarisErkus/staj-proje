import { FC } from "react";
import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useQueries } from "@tanstack/react-query";
import { dehydrate, QueryClient } from "@tanstack/react-query";

import { getFavorites, getProducts } from "@/server/posts";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import MayInterestYou from "@/components/Basket/MayInterestYou";
import { BasketItemsContainer, TitleOrder, Wrapper } from "@/styles/Basket";
import BasketSummary from "@/components/Basket/BasketSummary";
import BasketItem from "@/components/Basket/BasketItem";
import NoItem from "@/components/Basket/NoItem";
import { getBasket } from "@/server/basket";
import { ProductForBasket } from "@/common/types";

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
        enabled: !!session,
      },
      {
        queryKey: ["basket"],
        queryFn: () => getBasket(session?.user?.uid),
      },
    ],
  });

  const products = results[0].data;
  const favorites = results[1].data;
  const basket = results[2].data;

  const limitData = products
    ? products.filter((item: any) =>
        basket?.find((b: any) => b.productId === item.id)
      )[0]
    : null;

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
                      limit={limitData.limit}
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
        <MayInterestYou data={mayInterestYouData} favorites={favorites} />
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
