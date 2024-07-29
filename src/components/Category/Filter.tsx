import { Col, Container, Row } from "@/styles/GlobalVariables";
import SwitchButton from "./SwitchButton";
import { StyledCol, StyledLeftCol } from "@/styles/Category/Filter";
import InfoBox from "./InfoBox";
import SortBy from "./SortBy";
import { Container as Background } from "@/styles/Category";
import Options from "./Options";
import Slider from "./Slider";

const Filter = () => {
  return (
    <Container>
      <Row>
        <StyledCol>
          <SwitchButton title="Karşılaştırma Modu" />
        </StyledCol>
      </Row>
      <Row>
        <StyledLeftCol size={3}>
          <InfoBox />
          <SortBy />
          <Background>
            <SwitchButton title="Kontratlı Ürünler" />
          </Background>
          <Options />
        </StyledLeftCol>
        <Col size={9}>
          <Slider />
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
