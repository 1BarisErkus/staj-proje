import { FC, Key } from "react";
import { GetServerSideProps } from "next";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import MayInterestYou from "@/components/Basket/MayInterestYou";
import NoItem from "@/components/Basket/NoItem";
import { getFavorites, getProducts } from "@/server/posts";
import { getBasket } from "@/server/basket";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import BasketItem from "@/components/Basket/BasketItem";
import { BasketItemsContainer, TitleOrder, Wrapper } from "@/styles/Basket";
import BasketSummary from "@/components/Basket/BasketSummary";

interface BasketProps {
  dehydratedState: unknown;
  session: any;
}

interface BasketItemProps {
  id: Key | null | undefined;
  userId: string;
  productId: string;
  image: string;
  name: string;
  memory: string;
  color: string;
  price: number;
  count: number;
  seller: string;
}

const Basket: FC<BasketProps> = ({ session }) => {
  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  const { data: basket } = useQuery({
    queryKey: ["basket"],
    queryFn: () => getBasket((session?.user as { uid: string })?.uid),
  });

  const { data: favorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: async () =>
      await getFavorites((session?.user as { uid: string })?.uid),
  });

  const mayInterestYouData = data ? data.slice(0, 6) : [];

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
                      count={item.count}
                      seller={item.seller}
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
