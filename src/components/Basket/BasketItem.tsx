import { FC } from "react";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addProductToBasket, removeProductFromBasket } from "@/server/basket";
import { notify } from "@/lib/notify";
import { Container, Row } from "@/styles/GlobalVariables";
import { ProductForBasket } from "@/common/types";
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
  NameDetails,
  Price,
  PriceWrapper,
  Right,
} from "@/styles/Basket/BasketItem";
import MinimalLoading from "../MinimalLoading";

interface BasketItemProps extends ProductForBasket {
  userId: string;
  limit: number;
}

const BasketItem: FC<BasketItemProps> = ({
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

  const { isPending: isDeleting, mutate: removeProductMutate } = useMutation({
    mutationFn: () => removeProductFromBasket(userId, productId),

    onSuccess: () => {
      notify("Ürün sepetten kaldırıldı", "success");
      queryClient.invalidateQueries({
        queryKey: ["basket"],
      });
    },

    onError: () => notify("Ürün sepetten kaldırılamadı", "error"),
  });

  const { isPending: isChangeCount, mutate: changeCount } = useMutation({
    mutationFn: (newCount: number) => handleChangeCount(newCount),

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
    if (limit && count >= limit) {
      notify(`Bu üründen en fazla ${limit} adet alabilirsiniz`, "error");
      return;
    }
    if (count < limit || !limit) {
      const newBasketItem = {
        productId,
        image,
        name,
        memory,
        color,
        price,
        discountPrice,
        count: newCount,
        seller,
      };
      await addProductToBasket(userId, newBasketItem);

      if (newCount < 0) notify("Ürün adedi azaltıldı", "success");
      if (newCount > 0) notify("Ürün adedi artırıldı", "success");
      return;
    }
  };

  return (
    <BasketItemWrapper>
      <CloseButton onClick={() => removeProductMutate()} disabled={isDeleting}>
        {isDeleting ? <MinimalLoading /> : "×"}
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
              <h4>
                {name} {memory !== "" && memory}
              </h4>
              <Color>{color}</Color>
            </NameDetails>
          </Left>
          <Middle size={5}>
            <PriceWrapper>
              Birim Fiyat
              <Price>{price.toLocaleString("tr-TR")} TL</Price>
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
                <Count>
                  {isChangeCount ? <MinimalLoading size={16} /> : count}
                </Count>
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
              <Price>
                {discountPrice !== 0
                  ? discountPrice.toLocaleString("tr-TR")
                  : price.toLocaleString("tr-TR")}{" "}
                TL
              </Price>
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
