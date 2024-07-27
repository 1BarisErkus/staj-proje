import Image from "next/image";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import { Button, Text, Wrapper } from "@/styles/HomePage/AdditionToYourBill";
import { FaAngleRight } from "react-icons/fa6";

const AdditionToYourBill = () => {
  return (
    <Container>
      <Row>
        <Wrapper>
          <Col size={3}>
            <Image
              src="/images/teknoloji-group-18.webp"
              alt="Turkcell Grup"
              width={220}
              height={150}
            />
          </Col>
          <Col size={6}>
            <Text>Turkcell Faturana Ek Alabileceğin Cihazlar</Text>
          </Col>
          <Col size={3}>
            <Button>
              <span>İncele</span>
              <FaAngleRight />
            </Button>
          </Col>
        </Wrapper>
      </Row>
    </Container>
  );
};

export default AdditionToYourBill;
