import { BASE_URL } from "./baseUrl";

export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();

  return data;
};
