import { BASE_URL } from "./baseUrl";

export const getUser = async (id: string) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const data = await response.json();

  return data;
};

export const addUser = async (user: {
  id: string;
  name: string;
  email: string;
}) => {
  const newUser = {
    ...user,
    isAdmin: false,
    basket: [],
    favorites: [],
  };

  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const data = await response.json();

  return data;
};

export const getBasket = async (userId: string) => {
  const data = await getUser(userId);

  return data.basket;
};
