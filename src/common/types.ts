export type Product = {
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
  configuration: {
    title: string;
    options: string[] | { label: string; color: string }[];
  }[];
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
};

export type SwiperProductProps = {
  id: string;
  images: string[];
  name: string;
  price: number;
  badges: string[];
  discountPercentage: number;
};

export type ProductForBasket = {
  productId: string;
  image: string;
  name: string;
  color: string | null;
  memory: string | null;
  price: number;
  discountPrice: number;
  count: number;
  seller: string;
};

export type ColorOptions = {
  label: string;
  color: string;
};

export type Configuration = {
  title: string;
  options: ColorOptions[] | string[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  basket: ProductForBasket[];
  favorites: string[];
};

export type SectionProps = { data: Product[]; favorites: string[] };
