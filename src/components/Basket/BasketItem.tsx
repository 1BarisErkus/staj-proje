import React from "react";
import Image from "next/image";
import {
  BasketItemWrapper,
  Bottom,
  BottomText,
  Button,
  Cargo,
  CloseButton,
  Color,
  Count,
  CounterContainer,
  Label,
  Left,
  Middle,
  Name,
  NameDetails,
  Price,
  PriceWrapper,
  Right,
} from "@/styles/Basket/BasketItem";
import { Container, Row } from "@/styles/GlobalVariables";
import { addProductToBasket, removeProductFromBasket } from "@/server/basket";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { notify } from "@/lib/notify";

interface BasketItemProps {
  userId: string;
  productId: string;
  image: string;
  name: string;
  memory: string | null;
  color: string;
  price: number;
  discountPrice: number;
  count: number;
  seller: string;
  limit: number;
}

const BasketItem: React.FC<BasketItemProps> = ({
  userId,
  productId,
  image,
  name,
  memory,
  color,
  price,
  discountPrice,
  count,
  seller,
  limit,
}) => {
  const queryClient = useQueryClient();

  console.log(limit, count);

  const { isPending: isDeleting, mutate: removeProductMutate } = useMutation({
    mutationFn: async () => await removeProductFromBasket(userId, productId),
    onSuccess: () => {
      notify("Ürün sepetten kaldırıldı", "success");
      queryClient.invalidateQueries({
        queryKey: ["basket"],
      });
    },
    onError: () => notify("Ürün sepetten kaldırılamadı", "error"),
  });

  const { isPending: isChangeCount, mutate: changeCount } = useMutation({
    mutationFn: async (newCount: number) => await handleChangeCount(newCount),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["basket"],
      });
    },
    onError: () => notify("Ürün adedi güncellenemedi", "error"),
  });

  const handleChangeCount = async (newCount: number) => {
    if (count + newCount < 1) {
      removeProductMutate();
      return;
    }
    if (limit && count === limit) {
      notify(`Bu üründen en fazla ${limit} adet alabilirsiniz`, "error");
      return;
    }
    if (count < limit || !limit) {
      await addProductToBasket(userId, {
        productId,
        image,
        name,
        memory,
        color,
        price,
        discountPrice,
        count: newCount,
        seller,
      });
      if (newCount < 0) notify("Ürün adedi azaltıldı", "success");
      if (newCount > 0) notify("Ürün adedi artırıldı", "success");
      return;
    }
  };

  return (
    <BasketItemWrapper>
      <CloseButton onClick={() => removeProductMutate()} disabled={isDeleting}>
        X
      </CloseButton>
      <Container>
        <Row>
          <Left size={5}>
            <Image
              src={`/images/products/${image}`}
              alt={image}
              width={95}
              height={70}
              priority
            />
            <NameDetails href={`/product/${productId}`}>
              <Name>
                {name} {memory !== "" && memory}
              </Name>
              <Color>{color}</Color>
            </NameDetails>
          </Left>
          <Middle size={5}>
            <PriceWrapper>
              Birim Fiyat
              <Price>{price} TL</Price>
            </PriceWrapper>
            <div>
              <Label>Adet</Label>
              <CounterContainer>
                <Button
                  onClick={() => changeCount(-1)}
                  disabled={isChangeCount}
                >
                  -
                </Button>
                <Count>{count}</Count>
                <Button
                  onClick={() => changeCount(1)}
                  disabled={isChangeCount || count >= 10}
                >
                  +
                </Button>
              </CounterContainer>
            </div>
          </Middle>
          <Right size={2}>
            <PriceWrapper $mainprice>
              <Label>Tutar</Label>
              <Price>{discountPrice !== 0 ? discountPrice : price} TL</Price>
            </PriceWrapper>
          </Right>
        </Row>
      </Container>
      <Bottom>
        <BottomText>Satıcı: {seller}</BottomText>
        <Cargo>1 iş gününde kargoda</Cargo>
      </Bottom>
    </BasketItemWrapper>
  );
};

export default BasketItem;
