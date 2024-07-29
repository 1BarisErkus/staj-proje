import { categoryNames } from "@/lib/categoryNames";
import { TitleText } from "@/styles/Category/Title";
import { Col, Container, Row } from "@/styles/GlobalVariables";

const Title = ({ title }: { title: string }) => {
  return (
    <Container>
      <Row>
        <Col>
          <TitleText>{categoryNames[title]}</TitleText>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
