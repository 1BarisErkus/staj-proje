import Image from "next/image";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import {
  Button,
  StyledCol,
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
          <StyledCol size={3}>
            <Image
              src="/images/teknoloji-group-18.webp"
              alt="Turkcell Grup"
              width={220}
              height={150}
              layout="responsive"
            />
          </StyledCol>
          <StyledCol size={6}>
            <Text>Turkcell Faturana Ek Alabileceğin Cihazlar</Text>
          </StyledCol>
          <StyledCol size={3}>
            <Button>
              <span>İncele</span>
              <FaAngleRight />
            </Button>
          </StyledCol>
        </Wrapper>
      </StyledRow>
    </Container>
  );
};

export default AdditionToYourBill;
