import { ProductForBasket } from "@/common/types";
import { BASE_URL } from "./baseUrl";
import { getUser } from "./user";
import { v4 as uuidv4 } from "uuid";

export const getBasket = async (userId: string) => {
  if (!userId) return [];

  const data = await getUser(userId);
  return data.basket;
};

export const addProductToBasket = async (
  userId: string,
  { productId, image, name, color, memory, price, count }: ProductForBasket
) => {
  const user = await getUser(userId);

  const basket = user.basket;
  const productIndex = basket.findIndex(
    (product: ProductForBasket) =>
      product.productId === productId &&
      product.color === color &&
      product.memory === memory &&
      product.price === price &&
      product.name === name &&
      product.image === image
  );

  if (productIndex !== -1) {
    basket[productIndex].count += count;
  } else {
    const newBasketItem = {
      id: uuidv4(),
      productId,
      image,
      name,
      color,
      memory,
      price,
      count,
    };
    basket.push(newBasketItem);
  }

  const response = await fetch(`${BASE_URL}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...user, basket }),
  });

  const data = await response.json();
  return data.basket;
};
