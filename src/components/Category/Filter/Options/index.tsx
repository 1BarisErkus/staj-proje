import React from "react";
import { Container } from "@/styles/Category";
import Brands from "./Brands";
import Colors from "./Colors";
import Price from "./Price";
import Sellers from "./Sellers";

interface FilterComponentProps {
  dispatch: any;
  brands: string[];
  colors: string[];
  prices: {
    min: number;
    max: number;
  }[];
  sellers: string[];
  sellerOptions: string[];
  brandOptions: string[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  dispatch,
  brands,
  colors,
  prices,
  sellers,
  sellerOptions,
  brandOptions,
}) => {
  return (
    <Container>
      <Brands dispatch={dispatch} brands={brands} brandOptions={brandOptions} />
      <Colors dispatch={dispatch} colors={colors} />
      <Price dispatch={dispatch} prices={prices} />
      <Sellers
        dispatch={dispatch}
        sellers={sellers}
        sellerOptions={sellerOptions}
      />
    </Container>
  );
};

export default FilterComponent;
