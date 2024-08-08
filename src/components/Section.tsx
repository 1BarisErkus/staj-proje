import { Col, Container, Row } from "@/styles/GlobalVariables";
import { H1, Wrapper } from "@/styles/Section";
import { FC } from "react";

type SectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

const Section: FC<SectionProps> = ({ id, title, children }) => {
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
