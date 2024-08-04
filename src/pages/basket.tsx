import { FC } from "react";
import { GetServerSideProps } from "next";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import MayInterestYou from "@/components/Basket/MayInterestYou";
import NoItem from "@/components/Basket/NoItem";
import { getProducts } from "@/server/posts";
import { getBasket } from "@/server/basket";
import { Col, Container, Row } from "@/styles/GlobalVariables";

interface BasketProps {
  dehydratedState: unknown;
  session: any;
}

const Basket: FC<BasketProps> = ({ session }) => {
  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });
  const { data: basket } = useQuery({
    queryKey: ["basket"],
    queryFn: () => getBasket((session?.user as { uid: string })?.uid),
  });
  const mayInterestYouData = data ? data.slice(0, 6) : [];

  return (
    <Container>
      <Row>
        <Col>
          {basket?.length > 0 ? <div>asdadsa</div> : <NoItem />}
          <MayInterestYou data={mayInterestYouData} />
        </Col>
      </Row>
    </Container>
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

  return {
    props: {
      session,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
