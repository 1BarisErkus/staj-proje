import { FC } from "react";
import { Product } from "@/lib/types";
import {
  CardContainer,
  FeatureListItem,
  FeaturesList,
  Price,
  ProductImage,
  ProductTitle,
} from "@/styles/Compare/CompareCard";

const CompareCard: FC<Product> = ({ id, images, name, features, price }) => {
  return (
    <CardContainer href={`/product/${id}`}>
      <ProductImage
        src={
          images[0].startsWith("http")
            ? images[0]
            : `/images/products/${images[0]}`
        }
        alt={images[0]}
      />
      <ProductTitle>{name}</ProductTitle>
      <Price>{price} TL</Price>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureListItem key={index}>
            <span>{feature.name}:</span> {feature.value}
          </FeatureListItem>
        ))}
      </FeaturesList>
    </CardContainer>
  );
};

export default CompareCard;
