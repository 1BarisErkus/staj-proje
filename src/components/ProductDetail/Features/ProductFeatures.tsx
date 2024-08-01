import React, { useState } from "react";
import {
  ProductDetailsContainer,
  DetailsRow,
  DetailTitle,
  DetailValue,
  ToggleButton,
} from "@/styles/ProductDetail/Features/ProductFeatures";

interface ProductFeaturesProps {
  features: { name: string; value: string }[];
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ features }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <ProductDetailsContainer>
      {!expanded
        ? features.slice(0, 4).map((feature, index) => (
            <DetailsRow key={index}>
              <DetailTitle>{feature.name}</DetailTitle>
              <DetailValue>{feature.value}</DetailValue>
            </DetailsRow>
          ))
        : features.map((feature, index) => (
            <DetailsRow key={index}>
              <DetailTitle>{feature.name}</DetailTitle>
              <DetailValue>{feature.value}</DetailValue>
            </DetailsRow>
          ))}
      <ToggleButton onClick={toggleExpanded}>
        {expanded ? "Daha az" : "Daha fazla"}
      </ToggleButton>
    </ProductDetailsContainer>
  );
};

export default ProductFeatures;
