import { FC } from "react";
import { Container } from "@/styles/GlobalVariables";
import {
  BreadcrumbIcon,
  BreadcrumbItem,
  BreadcrumbWrapper,
} from "@/styles/Breadcrumb";

type BreadcrumbProps = {
  category: string;
  subCategory?: string;
};

const Breadcrumb: FC<BreadcrumbProps> = ({ category, subCategory }) => {
  return (
    <Container>
      <BreadcrumbWrapper>
        <BreadcrumbItem href="/">Pasaj</BreadcrumbItem>
        <BreadcrumbIcon> {">"} </BreadcrumbIcon>
        <BreadcrumbItem href={"#"}>{category}</BreadcrumbItem>
        {subCategory && (
          <>
            <BreadcrumbIcon>{">"} </BreadcrumbIcon>
            <BreadcrumbItem href={"#"}>{subCategory}</BreadcrumbItem>
          </>
        )}
      </BreadcrumbWrapper>
    </Container>
  );
};

export default Breadcrumb;
