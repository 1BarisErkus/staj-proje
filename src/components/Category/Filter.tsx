import { useEffect, useReducer, useState } from "react";
import { StyledCol, StyledLeftCol } from "@/styles/Category/Filter";
import { Container as Background } from "@/styles/Category";
import { CardList } from "@/styles/HomePage/BestSellers";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import { Product } from "@/common/types";
import SwitchButton from "./SwitchButton";
import InfoBox from "./InfoBox";
import SortBy from "./SortBy";
import Options from "./Options";
import Slider from "./Slider";
import Card from "../Card";
import Faqs from "./Faqs";

interface BestSellersProductProps {
  id: string;
  images: string[];
  name: string;
  price: number;
  badges: string[];
  discountPercentage: number;
  fibabanka: boolean;
  isBestSeller: boolean;
}

interface FilterState {
  sortBy: string;
  isContract: boolean;
  brands: string[];
  colors: string[];
  prices: {
    min: number;
    max: number;
  }[];
  sellers: string[];
}

type FilterAction = {
  type: string;
  payload: any;
};

function reducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };
    case "CONTRACT":
      return { ...state, isContract: !state.isContract };
    case "BRANDS":
      if (state.brands.includes(action.payload)) {
        return {
          ...state,
          brands: state.brands.filter((brand) => brand !== action.payload),
        };
      }
      return { ...state, brands: [...state.brands, action.payload] };
    case "COLORS":
      if (state.colors.includes(action.payload)) {
        return {
          ...state,
          colors: state.colors.filter((color) => color !== action.payload),
        };
      }
      return { ...state, colors: [...state.colors, action.payload] };
    case "PRICE":
      if (state.prices.includes(action.payload)) {
        return {
          ...state,
          prices: state.prices.filter((price) => price !== action.payload),
        };
      }
      return { ...state, prices: [...state.prices, action.payload] };
    case "SELLERS":
      if (state.sellers.includes(action.payload)) {
        return {
          ...state,
          sellers: state.sellers.filter((seller) => seller !== action.payload),
        };
      }
      return { ...state, sellers: [...state.sellers, action.payload] };
    default:
      return state;
  }
}

const initialArgs = {
  sortBy: "En Popüler",
  isContract: false,
  brands: [],
  colors: [],
  prices: [],
  sellers: [],
};

const applyFilters = (data: Product[], state: FilterState) => {
  return data
    .filter((product) => (state.isContract ? product.isContract : true))
    .filter((product) =>
      state.brands.length ? state.brands.includes(product.brandCode) : true
    )
    .filter((product) =>
      state.colors.length
        ? product.configuration.some((config) =>
            config.options.some((option) => state.colors.includes(option))
          )
        : true
    )
    .filter((product) =>
      state.prices.length
        ? state.prices.some(
            (price) =>
              product.price >= price.min &&
              (price.max ? product.price <= price.max : true)
          )
        : true
    )
    .filter((product) =>
      state.sellers.length ? state.sellers.includes(product.seller) : true
    )
    .sort((a, b) => {
      if (state.sortBy === "En Yeniler")
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (state.sortBy === "En Düşük Fiyat") return a.price - b.price;
      if (state.sortBy === "En Yüksek Fiyat") return b.price - a.price;
      if (state.sortBy === "En Yüksek Puan") return b.rating - a.rating;
      return 0;
    });
};

const Filter = ({ data, params }: { data: Product[]; params: any }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<FilterState, FilterAction>
  >(reducer, initialArgs);
  const [compareMode, setCompareMode] = useState(false);
  const [filteredData, setFilteredData] = useState<Product[]>(data);

  useEffect(() => {
    setFilteredData(applyFilters(data, state));
  }, [data, state]);

  let sellerOptions: string[] = [];
  data.forEach((product) => {
    if (!sellerOptions.includes(product.seller)) {
      sellerOptions.push(product.seller);
    }
  });

  return (
    <Container>
      <Row>
        <StyledCol>
          <SwitchButton
            title="Karşılaştırma Modu"
            handleChange={() => setCompareMode(!compareMode)}
          />
        </StyledCol>
      </Row>
      <Row>
        <StyledLeftCol size={3}>
          <InfoBox dataLength={data.length} params={params} />
          <SortBy sortValue={state.sortBy} dispatch={dispatch} />
          <Background>
            <SwitchButton
              title="Kontratlı Ürünler"
              handleChange={() => {
                dispatch({ type: "CONTRACT", payload: null });
              }}
            />
          </Background>
          <Options
            dispatch={dispatch}
            brands={state.brands}
            colors={state.colors}
            prices={state.prices}
            sellers={state.sellers}
            sellerOptions={sellerOptions}
          />
        </StyledLeftCol>
        <Col size={9}>
          <Slider />
          <CardList>
            {filteredData?.map((product: BestSellersProductProps) => (
              <Card
                key={product.id}
                images={product.images}
                name={product.name}
                price={product.price}
                badges={product.badges}
                type="BestOffers"
                discountPercentage={product.discountPercentage}
                fibabanka={product.fibabanka}
                isBestSeller={product.isBestSeller}
              />
            ))}
          </CardList>
        </Col>
        <Faqs />
      </Row>
    </Container>
  );
};

export default Filter;
