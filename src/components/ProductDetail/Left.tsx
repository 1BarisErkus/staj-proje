import { FC } from "react";
import { Product } from "@/lib/types";
import { LeftCol, LimitWrapper } from "@/styles/ProductDetail";
import TakenTogether from "./TakenTogether";
import Slider from "./Slider";

type LeftProps = {
  images: string[];
  limit: number;
  similarProducts: Product[];
  favorites: string[];
};

const Left: FC<LeftProps> = ({ images, limit, similarProducts, favorites }) => {
  return (
    <LeftCol size={6}>
      <Slider images={images} />
      {limit && limit > 0 && (
        <LimitWrapper>Ürün alımları {limit} adet ile sınırlıdır.</LimitWrapper>
      )}
      <TakenTogether similarProducts={similarProducts} favorites={favorites} />
    </LeftCol>
  );
};

export default Left;
