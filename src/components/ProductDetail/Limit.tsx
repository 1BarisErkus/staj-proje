import { LimitWrapper } from "@/styles/ProductDetail";
import React from "react";

interface LimitProps {
  limit: number;
}

const Limit: React.FC<LimitProps> = ({ limit }) => {
  if (limit)
    return (
      <LimitWrapper>Ürün alımları {limit} adet ile sınırlıdır.</LimitWrapper>
    );
};

export default Limit;
