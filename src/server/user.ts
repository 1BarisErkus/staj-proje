import { BASE_URL } from "./baseUrl";

export const getUser = async (id: string) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const data = await response.json();

  return data;
};
