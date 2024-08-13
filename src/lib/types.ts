import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

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
  limit: number | null;
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
  fibabanka: boolean;
  isBestSeller: boolean;
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
  limit: number;
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

export type SectionProps = {
  title: string;
  data: Product[];
  favorites: string[];
  size?: string;
};

export type CompareItemProps = {
  productId: string;
  image: string;
  name: string;
};

type SortByPayload = string;
type ContractPayload = null;
type BrandsPayload = string;
type ColorsPayload = string;
type PricePayload = {
  min: number;
  max: number;
};
type SellersPayload = string;

export type FilterAction =
  | {
      type: "SORT_BY";
      payload: SortByPayload;
    }
  | {
      type: "CONTRACT";
      payload: ContractPayload;
    }
  | {
      type: "BRANDS";
      payload: BrandsPayload;
    }
  | {
      type: "COLORS";
      payload: ColorsPayload;
    }
  | {
      type: "PRICE";
      payload: PricePayload;
    }
  | {
      type: "SELLERS";
      payload: SellersPayload;
    };

export type FeaturesProps = {
  register: UseFormRegister<Product>;
  setValue: UseFormSetValue<Product>;
  errors: FieldErrors<Product>;
};
