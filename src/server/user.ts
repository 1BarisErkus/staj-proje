const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getUser = async (id: string) => {
  const response = await fetch(`${baseUrl}/users/${id}`);
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

  const response = await fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  const data = await response.json();

  return data;
};
