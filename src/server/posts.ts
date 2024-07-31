import { BASE_URL } from "./baseUrl";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();

  return data;
};

export const getProduct = async (id: string) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const data = await response.json();

  return data;
};

export const getSimilarProducts = async (categoryCode: string) => {
  const response = await fetch(
    `${BASE_URL}/products?categoryCode=${categoryCode}`
  );
  const data = await response.json();

  return data;
};
