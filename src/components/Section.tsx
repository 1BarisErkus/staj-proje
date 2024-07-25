import { Col, Container, Row } from "@/styles/GlobalVariables";
import { H1, Wrapper } from "@/styles/Section";

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Wrapper>
            <H1>{title}</H1>
            {children}
          </Wrapper>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
