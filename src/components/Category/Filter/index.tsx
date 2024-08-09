import { FC, useEffect, useReducer, useState } from "react";
import { CompareItemProps, Product, SwiperProductProps } from "@/common/types";
import { StyledCol, StyledLeftCol } from "@/styles/Category/Filter";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import { Container as Background } from "@/styles/Category";
import { CardListWrapper } from "@/styles/GlobalVariables";
import Card from "@/components/Card";
import SwitchButton from "../SwitchButton";
import InfoBox from "../InfoBox";
import SortBy from "./SortBy";
import FilterComponent from "./Options";
import Slider from "../Slider";
import Faqs from "../Faqs";
import CompareBar from "../Compare";
import { useRouter } from "next/router";

type FilterProps = {
  data: Product[];
  params: any;
  favorites: string[];
};

interface BestSellersProductProps extends SwiperProductProps {
  fibabanka: boolean;
  isBestSeller: boolean;
}

type FilterState = {
  sortBy: string;
  isContract: boolean;
  brands: string[];
  colors: string[];
  prices: {
    min: number;
    max: number;
  }[];
  sellers: string[];
};

type FilterAction = {
  type: string;
  payload: any;
};

const initialArgs = {
  sortBy: "En Popüler",
  isContract: false,
  brands: [],
  colors: [],
  prices: [],
  sellers: [],
};

function reducer(state: FilterState, action: FilterAction) {
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

const applyFilters = (data: Product[], state: FilterState) => {
  return data
    .filter((product) => (state.isContract ? product.isContract : true))
    .filter((product) =>
      state.brands.length ? state.brands.includes(product.brandCode) : true
    )
    .filter((product) =>
      state.colors.length
        ? product.configuration.some((config) =>
            config.options.some((option) => {
              if (typeof option === "object" && "label" in option) {
                return state.colors.includes(option.label);
              }
              return false;
            })
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
      switch (state.sortBy) {
        case "En Yeniler":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "En Düşük Fiyat":
          return a.price - b.price;
        case "En Yüksek Fiyat":
          return b.price - a.price;
        case "En Yüksek Puan":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
};

const Filter: FC<FilterProps> = ({ data, params, favorites }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<FilterState, FilterAction>
  >(reducer, initialArgs);
  const router = useRouter();

  const [compareMode, setCompareMode] = useState(false);
  const [compareItems, setCompareItems] = useState<(CompareItemProps | null)[]>(
    [null, null, null]
  );
  const [filteredData, setFilteredData] = useState<Product[]>(data);

  useEffect(() => {
    setFilteredData(applyFilters(data, state));
  }, [data, state]);

  const handleAdd = (product: CompareItemProps) => {
    const index = compareItems.findIndex((item) => item === null);
    if (index !== -1) {
      setCompareItems((prev) => {
        const newItems = [...prev];
        newItems[index] = product;
        return newItems;
      });
    }
  };

  const handleClear = () => {
    setCompareItems([null, null, null]);
  };

  const handleClearItem = (item: CompareItemProps) => {
    setCompareItems((prev) =>
      prev.map((prevItem) => (prevItem === item ? null : prevItem))
    );
  };

  const handleCompare = () => {
    const itemsToCompare = compareItems
      .filter((item) => item !== null)
      .map((item) => item?.productId);

    router.push({
      pathname: "/compare",
      query: {
        items: JSON.stringify(itemsToCompare),
      },
    });
  };

  let sellerOptions: string[] = [];
  data.forEach((product) => {
    if (!sellerOptions.includes(product.seller)) {
      sellerOptions.push(product.seller);
    }
  });

  let brandOptions: string[] = [];
  data.forEach((product) => {
    if (!brandOptions.includes(product.brandCode)) {
      brandOptions.push(product.brandCode);
    }
  });

  let colorOptions: string[] = [];
  data.forEach((product) => {
    product.configuration.forEach((config) => {
      if (config.title === "Renk") {
        config.options.forEach((option) => {
          if (
            typeof option === "object" &&
            "label" in option &&
            !colorOptions.includes(option.label)
          ) {
            colorOptions.push(option.label);
          }
        });
      }
    });
  });

  return (
    <Container>
      <StyledCol>
        <SwitchButton
          title="Karşılaştırma Modu"
          handleChange={() => setCompareMode(!compareMode)}
        />
      </StyledCol>
      <Row>
        <StyledLeftCol size={3}>
          <InfoBox
            category={data[0]?.category}
            subCategory={data[0]?.subCategory}
            dataLength={data.length}
            params={params}
          />
          <SortBy sortValue={state.sortBy} dispatch={dispatch} />
          <Background>
            <SwitchButton
              title="Kontratlı Ürünler"
              handleChange={() => {
                dispatch({ type: "CONTRACT", payload: null });
              }}
            />
          </Background>
          <FilterComponent
            dispatch={dispatch}
            brands={state.brands}
            colors={state.colors}
            prices={state.prices}
            sellers={state.sellers}
            sellerOptions={sellerOptions}
            brandOptions={brandOptions}
            colorOptions={colorOptions}
          />
        </StyledLeftCol>
        <Col size={9}>
          <Slider />
          <CardListWrapper>
            {filteredData?.map((product: BestSellersProductProps) => (
              <Card
                key={product.id}
                id={product.id}
                images={product.images}
                name={product.name}
                price={product.price}
                badges={product.badges}
                discountPercentage={product.discountPercentage}
                fibabanka={product.fibabanka}
                isBestSeller={product.isBestSeller}
                isFavorite={favorites.includes(product.id)}
                compareMode={compareMode}
                handleAdd={handleAdd}
              />
            ))}
          </CardListWrapper>
        </Col>
        <Faqs />
      </Row>
      {compareMode && (
        <CompareBar
          items={compareItems}
          onClear={handleClear}
          onClearItem={handleClearItem}
          onCompare={handleCompare}
        />
      )}
    </Container>
  );
};

export default Filter;
