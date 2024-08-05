import { LeftCol } from "@/styles/ProductDetail";
import Limit from "./Limit";
import Slider from "./Slider";
import TakenTogether from "./TakenTogether";
import React from "react";
import { Product } from "@/common/types";

interface LeftProps {
  images: string[];
  limit: number;
  similarProducts: Product[];
  favorites: string[];
}

const Left: React.FC<LeftProps> = ({
  images,
  limit,
  similarProducts,
  favorites,
}) => {
  return (
    <LeftCol size={6}>
      <Slider images={images} />
      <Limit limit={limit} />
      <TakenTogether similarProducts={similarProducts} favorites={favorites} />
    </LeftCol>
  );
};

export default Left;
