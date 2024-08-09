import { FC, useState } from "react";
import {
  ProductDetailsContainer,
  DetailsRow,
  DetailTitle,
  DetailValue,
  ToggleButton,
} from "@/styles/ProductDetail/Features/ProductFeatures";

type ProductFeaturesProps = {
  features: { name: string; value: string }[];
};

const ProductFeatures: FC<ProductFeaturesProps> = ({ features }) => {
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
