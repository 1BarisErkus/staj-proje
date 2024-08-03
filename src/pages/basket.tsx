import MayInterestYou from "@/components/Basket/MayInterestYou";
import NoItem from "@/components/Basket/NoItem";
import { getProducts } from "@/server/posts";
import { getBasket } from "@/server/user";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export async function getServerSideProps({ params }: { params: any }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["basket"],
    queryFn: () => getBasket,
  });

  return {
    props: {
      params,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Basket = () => {
  const session = useSession();

  const { data } = useQuery({ queryKey: ["products"], queryFn: getProducts });
  const { data: basket } = useQuery({
    queryKey: ["basket"],
    queryFn: () => getBasket((session.data?.user as { uid: string })?.uid),
  });
  const mayInterestYouData = data ? data.slice(0, 6) : [];

  console.log(session);
  return (
    <Container>
      <Row>
        <Col>
          {basket.length > 0 ? <div>asdadsa</div> : <NoItem />}

          <MayInterestYou data={mayInterestYouData} />
        </Col>
      </Row>
    </Container>
  );
};

export default Basket;
