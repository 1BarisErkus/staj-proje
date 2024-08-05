import { v4 as uuidv4 } from "uuid";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getProducts = async () => {
  const response = await fetch(`${baseUrl}/products`);
  const data = await response.json();

  return data;
};

export const getProduct = async (id: string) => {
  const response = await fetch(`${baseUrl}/products/${id}`);
  const data = await response.json();

  return data;
};

export const getSimilarProducts = async (categoryCode: string) => {
  const response = await fetch(
    `${baseUrl}/products?categoryCode=${categoryCode}`
  );
  const data = await response.json();

  return data;
};

export const addComment = async (
  comment: {
    userName: string;
    comment: string;
    rating: number;
  },
  productId: string
) => {
  const newComment = {
    id: uuidv4(),
    ...comment,
    date: new Date().toISOString(),
    helpfulCount: 0,
  };

  const response = await fetch(`${baseUrl}/products/${productId}`);
  const product = await response.json();

  const updatedComments = [...product.comments, newComment];

  const updateResponse = await fetch(`${baseUrl}/products/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comments: updatedComments }),
  });

  const data = await updateResponse.json();
  return data;
};

export const addQa = async (questionText: string, productId: string) => {
  const newQa = {
    id: uuidv4(),
    questionText,
    questionDate: new Date().toISOString(),
    answerText: "",
    answerDate: "",
    storeName: "",
  };

  const response = await fetch(`${baseUrl}/products/${productId}`);
  const product = await response.json();

  newQa.storeName = product.seller;

  const updatedQas = [...product.qa, newQa];

  const updateResponse = await fetch(`${baseUrl}/products/${productId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ qa: updatedQas }),
  });

  const data = await updateResponse.json();
  return data;
};
