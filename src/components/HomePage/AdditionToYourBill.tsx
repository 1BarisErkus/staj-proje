import Image from "next/image";
import { Container } from "@/styles/GlobalVariables";
import {
  Button,
  ImageWrapper,
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
            <ImageWrapper>
              <Image
                src="/images/teknoloji-group-18.webp"
                alt="Turkcell Grup"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </ImageWrapper>
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
