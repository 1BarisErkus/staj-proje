import React from "react";
import {
  BreadcrumbIcon,
  BreadcrumbItem,
  BreadcrumbWrapper,
} from "@/styles/Breadcrumb";
import { Container } from "@/styles/GlobalVariables";

const Breadcrumb = ({
  category,
  subCategory,
}: {
  category: string;
  subCategory?: string;
}) => {
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
