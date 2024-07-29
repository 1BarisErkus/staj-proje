import React from "react";
import { categoryNames } from "@/lib/categoryNames";
import {
  BreadcrumbIcon,
  BreadcrumbItem,
  BreadcrumbWrapper,
} from "@/styles/Breadcrumb";
import { Container } from "@/styles/GlobalVariables";

const Breadcrumb = ({ items }: { items: string[] }) => {
  return (
    <Container>
      <BreadcrumbWrapper>
        <BreadcrumbItem href="/">Pasaj</BreadcrumbItem>
        <BreadcrumbIcon> {">"} </BreadcrumbIcon>
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem href={item}>{categoryNames[item]}</BreadcrumbItem>
              <BreadcrumbIcon>
                {index < items.length - 1 && " > "}
              </BreadcrumbIcon>
            </React.Fragment>
          );
        })}
      </BreadcrumbWrapper>
    </Container>
  );
};

export default Breadcrumb;
