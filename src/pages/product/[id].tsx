import Breadcrumb from "@/components/Breadcrumb";
import SelectBox from "@/components/ProductDetail/SelectBox";
import Head from "@/components/ProductDetail/Head";
import Limit from "@/components/ProductDetail/Limit";
import Slider from "@/components/ProductDetail/Slider";
import TakenTogether from "@/components/ProductDetail/TakenTogether";
import { getProduct, getSimilarProducts } from "@/server/posts";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import { Configuration, Content, LeftCol } from "@/styles/ProductDetail";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

export async function getServerSideProps({ params }: { params: any }) {
  const queryClient = new QueryClient();

  const product = await getProduct(params.id);

  await queryClient.prefetchQuery({
    queryKey: ["product"],
    queryFn: () => product,
  });

  const similarProducts = await getSimilarProducts(product.categoryCode);

  await queryClient.prefetchQuery({
    queryKey: ["similarProducts"],
    queryFn: () => similarProducts,
  });

  return {
    props: {
      params,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Product = ({ params }: { params: any }) => {
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(params.id),
  });

  const { data: similarProducts } = useQuery({
    queryKey: ["similarProducts"],
    queryFn: () => getSimilarProducts(data.categoryCode),
  });

  return (
    <>
      <Breadcrumb category={data.category} subCategory={data.subCategory} />
      <Content>
        <Container>
          <Row>
            <LeftCol size={6}>
              <Slider images={data.images} />
              <Limit limit={data.limit} />
              <TakenTogether similarProducts={similarProducts} />
            </LeftCol>
            <Col size={6}>
              <Head
                title={data.name}
                targetDate={data.discountEndTime}
                stock={data.stock}
              />
              <Configuration>
                <SelectBox title="RENK" configuration={data.configuration[0]} />
                {data.configuration[1] && (
                  <SelectBox
                    title="DAHİLİ HAFIZA"
                    configuration={data.configuration[1]}
                  />
                )}
              </Configuration>
            </Col>
          </Row>
        </Container>
      </Content>
    </>
  );
};

export default Product;
