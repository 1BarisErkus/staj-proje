import React, { useState } from "react";
import { Col } from "@/styles/GlobalVariables";
import { Button } from "@/styles/ProductDetail";
import Configuraiton from "./Configuraiton";
import Head from "./Head";
import Offer from "./Offer";
import Badges from "./Badges";
import { useSession } from "next-auth/react";
import { notify } from "@/lib/notify";
import { addProductToBasket } from "@/server/basket";
import { Configuration } from "@/common/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface RightProps {
  id: string;
  name: string;
  image: string;
  discountPercentage: number;
  discountEndTime: string;
  stock: number;
  configuration: Configuration[];
  creditCard: boolean;
  installmentPrice: number;
  installmentCount: number;
  seller: string;
  price: number;
  freeShipping: boolean;
  guarantee: boolean;
  isContract: boolean;
  isFavorite: boolean;
}

interface BasketItem {
  productId: string;
  image: string;
  name: string;
  color: string | null;
  price: number;
  count: number;
  memory: string | null;
  seller: string;
}

const Right: React.FC<RightProps> = ({
  id,
  image,
  name,
  discountPercentage,
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
  isFavorite,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedMemory, setSelectedMemory] = useState<string | null>(null);

  const session = useSession();
  const queryClient = useQueryClient();

  const addProductMutation = useMutation({
    mutationFn: async (newBasketItem: BasketItem) =>
      await addProductToBasket(
        (session.data?.user as { uid: string })?.uid,
        newBasketItem
      ),
    onSuccess: () => {
      notify("Ürün sepete eklendi", "success");
      queryClient.invalidateQueries({
        queryKey: ["basket"],
      });
    },
    onError: () => notify("Ürün sepete eklenirken bir hata oluştu", "error"),
  });

  const handleClick = () => {
    if (!session.data) {
      notify("Lütfen önce giriş yapınız", "error");
      return;
    }
    const newBasketItem = {
      productId: id,
      image: image,
      name,
      color: selectedColor ? selectedColor : null,
      price,
      count: 1,
      memory: configuration[1] ? selectedMemory : null,
      seller: seller,
    };

    addProductMutation.mutate(newBasketItem);
  };

  return (
    <Col size={6}>
      <Head
        title={name}
        targetDate={discountEndTime}
        stock={stock}
        isFavorite={isFavorite}
        productId={id}
      />
      <Configuraiton
        configuration={configuration}
        setSelectedColor={setSelectedColor}
        setSelectedMemory={setSelectedMemory}
      />
      <Offer
        creditCard={creditCard}
        installmentPrice={installmentPrice}
        installmentCount={installmentCount}
        seller={seller}
        price={price}
        freeShipping={freeShipping}
        discountPercentage={discountPercentage}
      />
      <Button onClick={handleClick}>Sepete Ekle</Button>
      <Badges
        freeShipping={freeShipping}
        guarantee={guarantee}
        isContract={isContract}
      />
    </Col>
  );
};

export default Right;
