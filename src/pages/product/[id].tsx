import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Breadcrumb from "@/components/Breadcrumb";
import { getProduct, getSimilarProducts } from "@/server/posts";
import { Container, Row } from "@/styles/GlobalVariables";
import { Content } from "@/styles/ProductDetail";
import Left from "@/components/ProductDetail/Left";
import Right from "@/components/ProductDetail/Right";
import OtherSellers from "@/components/ProductDetail/OtherSellers";
import RecentReviews from "@/components/RecentReviews";
import Features from "@/components/ProductDetail/Features";

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
            <Left
              images={data.images}
              limit={data.limit}
              similarProducts={similarProducts}
            />
            <Right
              id={data.id}
              image={data.images[0]}
              name={data.name}
              discountPercentage={data.discountPercentage}
              discountEndTime={data.discountEndTime}
              stock={data.stock}
              configuration={data.configuration}
              creditCard={data.creditCard}
              installmentPrice={data.installmentPrice}
              installmentCount={data.installmentCount}
              seller={data.seller}
              price={data.price}
              freeShipping={data.freeShipping}
              guarantee={data.guarantee}
              isContract={data.isContract}
            />
          </Row>
        </Container>
      </Content>
      <OtherSellers data={data.otherSellers} />
      <RecentReviews data={similarProducts} />
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