import { FC } from "react";
import { SwiperProductProps } from "@/common/types";
import { CardListWrapper } from "@/styles/GlobalVariables";
import Card from "@/components/Card";

interface CardListProductProps extends SwiperProductProps {
  fibabanka: boolean;
  isBestSeller: boolean;
}

type CardListProps = {
  filteredData: CardListProductProps[];
  favorites: string[];
};

const CardList: FC<CardListProps> = ({ filteredData, favorites }) => {
  return (
    <CardListWrapper>
      {filteredData?.slice(0, 8).map((product: SwiperProductProps) => (
        <Card
          key={product.id}
          id={product.id}
          images={product.images}
          name={product.name}
          price={product.price}
          badges={product.badges}
          discountPercentage={product.discountPercentage}
          fibabanka={product.fibabanka}
          isBestSeller={product.isBestSeller}
          isFavorite={favorites.includes(product.id)}
        />
      ))}
    </CardListWrapper>
  );
};

export default CardList;
