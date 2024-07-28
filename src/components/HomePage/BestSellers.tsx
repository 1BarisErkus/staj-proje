import { Product } from "@/common/types";
import Section from "../Section";
import Card from "../Card";
import { CardList } from "@/styles/HomePage/BestSellers";

interface BestSellersProductProps {
  id: string;
  images: string[];
  name: string;
  price: number;
  badges: string[];
  discountPercentage: number;
  fibabanka: boolean;
  isBestSeller: boolean;
}

const BestSellers = ({ data }: { data: Product[] }) => {
  return (
    <Section title="Çok Satanlar">
      <CardList>
        {data?.map((product: BestSellersProductProps) => (
          <Card
            key={product.id}
            images={product.images}
            name={product.name}
            price={product.price}
            badges={product.badges}
            type="BestOffers"
            discountPercentage={product.discountPercentage}
            fibabanka={product.fibabanka}
            isBestSeller={product.isBestSeller}
          />
        ))}
      </CardList>
    </Section>
  );
};

export default BestSellers;
