import Image from "next/image";
import { Col, Container, ImageWrapper } from "@/styles/GlobalVariables";
import {
  Button,
  StyledRow,
  Text,
  Wrapper,
} from "@/styles/HomePage/AdditionToYourBill";
import { FaAngleRight } from "react-icons/fa6";

const AdditionToYourBill = () => {
  return (
    <Container>
      <StyledRow>
        <Wrapper size={12}>
          <Col size={3}>
            <ImageWrapper width={220} height={150}>
              <Image
                src="/images/teknoloji-group-18.webp"
                alt="Turkcell Grup"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ImageWrapper>
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
      </StyledRow>
    </Container>
  );
};

export default AdditionToYourBill;
