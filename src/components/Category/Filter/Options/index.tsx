import { FC, Dispatch } from "react";
import { Container } from "@/styles/Category";
import Brands from "./Brands";
import Colors from "./Colors";
import Price from "./Price";
import Sellers from "./Sellers";

type FilterComponentProps = {
  dispatch: Dispatch<{
    type: string;
    payload: string | { min: number; max: number };
  }>;
  brands: string[];
  colors: string[];
  prices: {
    min: number;
    max: number;
  }[];
  sellers: string[];
  sellerOptions: string[];
  brandOptions: string[];
  colorOptions: string[];
};

const FilterComponent: FC<FilterComponentProps> = ({
  dispatch,
  brands,
  colors,
  prices,
  sellers,
  sellerOptions,
  brandOptions,
  colorOptions,
}) => {
  return (
    <Container>
      <Brands dispatch={dispatch} brands={brands} brandOptions={brandOptions} />
      <Colors dispatch={dispatch} colors={colors} colorOptions={colorOptions} />
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
