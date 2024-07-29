import { Col, Container, Row } from "@/styles/GlobalVariables";
import SwitchButton from "./SwitchButton";
import { StyledCol, StyledLeftCol } from "@/styles/Category/Filter";
import InfoBox from "./InfoBox";
import SortBy from "./SortBy";
import { Container as Background } from "@/styles/Category";
import Options from "./Options";
import Slider from "./Slider";
import { CardList } from "@/styles/HomePage/BestSellers";
import Card from "../Card";
import { Product } from "@/common/types";
import { useState } from "react";

interface BestSellersProductProps {
  id: string;
  images: string[];
  name: string;
  price: number;
  badges: string[];
  discountPercentage: number;
  fibabanka: boolean;
  isBestSeller: boolean;
}

const Filter = ({ data, params }: { data: Product[]; params: any }) => {
  const [filteredData, setFilteredData] = useState<Product[]>(data);

  return (
    <Container>
      <Row>
        <StyledCol>
          <SwitchButton title="Karşılaştırma Modu" />
        </StyledCol>
      </Row>
      <Row>
        <StyledLeftCol size={3}>
          <InfoBox data={data} params={params} />
          <SortBy setFilteredData={setFilteredData} />
          <Background>
            <SwitchButton title="Kontratlı Ürünler" />
          </Background>
          <Options />
        </StyledLeftCol>
        <Col size={9}>
          <Slider />
          <CardList>
            {filteredData?.map((product: BestSellersProductProps) => (
              <Card
                key={product.id}
                images={product.images}
                name={product.name}
                price={product.price}
                badges={product.badges}
                type="BestOffers"
                discountPercentage={product.discountPercentage}
                fibabanka={product.fibabanka}
                isBestSeller={product.isBestSeller}
              />
            ))}
          </CardList>
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
