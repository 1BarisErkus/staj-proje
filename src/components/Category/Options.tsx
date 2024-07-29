import React from "react";
import { Container } from "@/styles/Category";
import Brands from "./Brands";
import Colors from "./Colors";
import Price from "./Price";
import Sellers from "./Sellers";

export const filterColors = [
  "black",
  "white",
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "darkblue",
];

const FilterComponent: React.FC = () => {
  return (
    <Container>
      <Brands />
      <Colors />
      <Price />
      <Sellers />
    </Container>
  );
};

export default FilterComponent;
