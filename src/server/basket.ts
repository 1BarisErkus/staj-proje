import { ProductForBasket } from "@/common/types";
import { getUser } from "./user";
import { v4 as uuidv4 } from "uuid";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getBasket = async (userId: string) => {
  if (!userId) return [];

  const data = await getUser(userId);
  return data.basket;
};

export const addProductToBasket = async (
  userId: string,
  {
    productId,
    image,
    name,
    color,
    memory,
    price,
    discountPrice,
    count,
    seller,
  }: ProductForBasket
) => {
  const user = await getUser(userId);

  const basket = user.basket;
  const productIndex = basket.findIndex(
    (product: ProductForBasket) =>
      product.productId === productId &&
      product.color === color &&
      product.memory === memory &&
      product.name === name &&
      product.seller === seller
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
      discountPrice,
      count,
      seller,
    };
    basket.push(newBasketItem);
  }

  const response = await fetch(`${baseUrl}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...user, basket }),
  });

  const data = await response.json();
  return data.basket;
};

export const removeProductFromBasket = async (
  userId: string,
  productId: string
) => {
  const user = await getUser(userId);

  const basket = user.basket;
  const productIndex = basket.findIndex(
    (product: ProductForBasket) => product.productId === productId
  );

  if (productIndex !== -1) {
    basket.splice(productIndex, 1);
  }

  const response = await fetch(`${baseUrl}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...user, basket }),
  });

  const data = await response.json();
  return data.basket;
};

export const clearBasket = async (userId: string) => {
  const user = await getUser(userId);

  const response = await fetch(`${baseUrl}/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...user, basket: [] }),
  });

  const data = await response.json();
  return data.basket;
};
