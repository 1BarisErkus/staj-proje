import React from "react";
import { Col } from "@/styles/GlobalVariables";
import { Button } from "@/styles/ProductDetail";
import Configuraiton from "./Configuraiton";
import Head from "./Head";
import Offer from "./Offer";
import Badges from "./Badges";

interface RightProps {
  name: string;
  discountEndTime: string;
  stock: number;
  configuration: { title: string; options: string[] }[];
  creditCard: boolean;
  installmentPrice: number;
  installmentCount: number;
  seller: string;
  price: number;
  freeShipping: boolean;
  guarantee: boolean;
  isContract: boolean;
}

const Right: React.FC<RightProps> = ({
  name,
  discountEndTime,
  stock,
  configuration,
  creditCard,
  installmentPrice,
  installmentCount,
  seller,
  price,
  freeShipping,
  guarantee,
  isContract,
}) => {
  return (
    <Col size={6}>
      <Head title={name} targetDate={discountEndTime} stock={stock} />
      <Configuraiton configuration={configuration} />
      <Offer
        creditCard={creditCard}
        installmentPrice={installmentPrice}
        installmentCount={installmentCount}
        seller={seller}
        price={price}
        freeShipping={freeShipping}
      />
      <Button>Sepete Ekle</Button>
      <Badges
        freeShipping={freeShipping}
        guarantee={guarantee}
        isContract={isContract}
      />
    </Col>
  );
};

export default Right;
