import { useState } from "react";
import { StyledCol, StyledLeftCol } from "@/styles/Category/Filter";
import { Container as Background } from "@/styles/Category";
import { CardList } from "@/styles/HomePage/BestSellers";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import { Product } from "@/common/types";
import SwitchButton from "./SwitchButton";
import InfoBox from "./InfoBox";
import SortBy from "./SortBy";
import Options from "./Options";
import Slider from "./Slider";
import Card from "../Card";

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
  const [compareMode, setCompareMode] = useState(false);
  const [contractedProducts, setContractedProducts] = useState(false);
  const [brands, setBrands] = useState<string[]>([]);

  return (
    <Container>
      <Row>
        <StyledCol>
          <SwitchButton
            title="Karşılaştırma Modu"
            handleChange={() => setCompareMode(!compareMode)}
          />
        </StyledCol>
      </Row>
      <Row>
        <StyledLeftCol size={3}>
          <InfoBox dataLength={data.length} params={params} />
          <SortBy />
          <Background>
            <SwitchButton
              title="Kontratlı Ürünler"
              handleChange={() => setContractedProducts(!contractedProducts)}
            />
          </Background>
          <Options />
        </StyledLeftCol>
        <Col size={9}>
          <Slider />
          <CardList>
            {data?.map((product: BestSellersProductProps) => (
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
