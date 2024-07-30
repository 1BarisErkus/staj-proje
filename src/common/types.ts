export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  subCategory: string;
  categoryCode: string;
  brandCode: string;
  rating: number;
  discountPercentage: number;
  discountEndTime: string;
  stock: number;
  installmentCount: number;
  installmentPrice: number;
  limit: number;
  seller: string;
  description: string;
  images: string[];
  features: { name: string; value: string }[];
  otherSellers: { seller: string; price: number; rating: number }[];
  configuration: { title: string; options: string[] }[];
  badges: string[];
  comments: {
    id: number;
    userId: number;
    comment: string;
    rating: number;
    date: string;
  }[];
  qa: {
    id: number;
    question: string;
    answer: string;
    questionDate: string;
    answerDate: string;
  }[];
  creditCard: boolean;
  fibabanka: boolean;
  freeShipping: boolean;
  guarantee: boolean;
  isContract: boolean;
  isSpecialForYou: boolean;
  isBestOffer: boolean;
  isNew: boolean;
  isBestSeller: boolean;
  date: string;
}
