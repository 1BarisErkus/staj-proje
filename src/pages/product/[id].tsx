import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import SelectBox from "@/components/ProductDetail/SelectBox";
import Head from "@/components/ProductDetail/Head";
import Limit from "@/components/ProductDetail/Limit";
import Slider from "@/components/ProductDetail/Slider";
import TakenTogether from "@/components/ProductDetail/TakenTogether";
import { getProduct, getSimilarProducts } from "@/server/posts";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import {
  Badge,
  BadgeContainer,
  BadgeText,
  BadgeWrapper,
  Button,
  Configuration,
  Content,
  LeftCol,
  Offer,
} from "@/styles/ProductDetail";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import OfferBox from "@/components/ProductDetail/OfferBox";
import { FaShippingFast } from "react-icons/fa";
import { GoShield } from "react-icons/go";
import { LuCalendarPlus } from "react-icons/lu";

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

  const [selectedOffer, setSelectedOffer] = useState<number>(1);

  const handleSelect = (index: number) => {
    setSelectedOffer(index);
  };

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
              <Offer>
                {data.creditCard &&
                  data.installmentPrice !== 0 &&
                  data.installmentCount !== 0 && (
                    <OfferBox
                      title="Kredi Kartı Limitine Takılmayın!"
                      subtitle="Kredi sorgulama sonucunza göre tutarlar değişiklik gösterebilir."
                      price={data.installmentPrice}
                      installmentCount={data.installmentCount}
                      selected={selectedOffer === 0}
                      onSelect={() => handleSelect(0)}
                    />
                  )}
                <OfferBox
                  title={data.seller}
                  price={data.price}
                  selected={selectedOffer === 1}
                  tag={data.freeShipping ? "Ücretsiz Kargo" : ""}
                  tagColor="#2855AC"
                  deliveryTime="1 iş gününde kargoda"
                  onSelect={() => handleSelect(1)}
                />
              </Offer>
              <Button>Sepete Ekle</Button>
              <BadgeContainer>
                {data.freeShipping && (
                  <BadgeWrapper>
                    <Badge>
                      <FaShippingFast size={24} />
                    </Badge>
                    <BadgeText>Ücretsiz Kargo</BadgeText>
                  </BadgeWrapper>
                )}

                {data.guarantee && (
                  <BadgeWrapper>
                    <Badge>
                      <GoShield size={24} />
                    </Badge>
                    <BadgeText>Turkcell Pasaj Garantisi</BadgeText>
                  </BadgeWrapper>
                )}

                {data.isContract && (
                  <BadgeWrapper>
                    <Badge>
                      <LuCalendarPlus size={24} />
                    </Badge>
                    <BadgeText>Taksitli Alışveriş</BadgeText>
                  </BadgeWrapper>
                )}
              </BadgeContainer>
            </Col>
          </Row>
        </Container>
      </Content>
    </>
  );
};

export default Product;
