import { GetServerSideProps } from "next";
import { getProduct } from "@/server/product";
import { Product } from "@/common/types";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import CompareCard from "@/components/Compare/CompareCard";
import { List, Title } from "@/styles/Compare";

const Compare = ({ compareItems }: { compareItems: Product[] }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Title>Cihaz Karşılaştırma</Title>
          <List>
            {compareItems.map((item, index) => (
              <CompareCard key={index} {...item} />
            ))}
          </List>
        </Col>
      </Row>
    </Container>
  );
};

export default Compare;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { items } = context.query;

  if (!items || !items[0]) {
    return {
      props: {
        compareItems: [],
      },
    };
  }

  const productIds = await JSON.parse(items as string);

  const compareItems = await Promise.all(
    productIds.map((id: string) => getProduct(id))
  );

  return {
    props: {
      compareItems,
    },
  };
};
