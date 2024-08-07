import { Col, Container, Row } from "@/styles/GlobalVariables";
import { H1, Wrapper } from "@/styles/Section";

const Section = ({
  children,
  title,
  id,
}: {
  children: React.ReactNode;
  title: string;
  id?: string;
}) => {
  return (
    <Container id={id}>
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
