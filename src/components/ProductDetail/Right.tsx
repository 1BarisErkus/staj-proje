import { FC, useState } from "react";
import { useSession } from "next-auth/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addProductToBasket, getBasket } from "@/server/basket";
import { Configuration, ProductForBasket } from "@/lib/types";
import { notify } from "@/lib/notify";
import { Button } from "@/styles/ProductDetail";
import { Col } from "@/styles/GlobalVariables";
import Configuraiton from "./Configuraiton";
import Head from "./Head";
import Offer from "./Offer";
import Badges from "./Badges";

type RightProps = {
  id: string;
  name: string;
  image: string;
  discountPercentage: number;
  discountEndTime: string;
  stock: number;
  limit: number;
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
};

const Right: FC<RightProps> = ({
  id,
  image,
  name,
  discountPercentage,
  discountEndTime,
  stock,
  limit,
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

  const { data: basket } = useQuery({
    queryKey: ["basket"],
    queryFn: () => getBasket((session.data?.user as { uid: string })?.uid),
  });

  const {
    mutate: addProductToBasketMutate,
    isPending: addProductToBasketPending,
  } = useMutation({
    mutationFn: (newBasketItem: ProductForBasket) =>
      addProductToBasket(
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
    if (stock === 0) {
      notify("Üzgünüz, bu ürün stokta yok", "error");
      return;
    }
    const productCountInBasket = basket?.find(
      (item: ProductForBasket) => item.productId === id
    )?.count;
    if (productCountInBasket === limit) {
      notify(`Bu üründen sadece ${limit} tane alabilirsiniz`, "error");
      return;
    }

    if (productCountInBasket >= stock) {
      notify(`Bu üründen sadece ${stock} tane alabilirsiniz`, "error");
      return;
    }

    const discountPrice = Math.round(
      price - (price * discountPercentage) / 100
    );

    const newBasketItem = {
      productId: id,
      image: image,
      name,
      color: selectedColor ? selectedColor : null,
      price,
      discountPrice,
      count: 1,
      memory: configuration[1] ? selectedMemory : null,
      seller: seller,
      limit,
    };
    addProductToBasketMutate(newBasketItem);
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
      <Button onClick={handleClick} disabled={addProductToBasketPending}>
        Sepete Ekle
      </Button>
      <Badges
        freeShipping={freeShipping}
        guarantee={guarantee}
        isContract={isContract}
      />
    </Col>
  );
};

export default Right;
