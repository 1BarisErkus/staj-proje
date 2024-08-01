import React, { useState } from "react";
import { Header } from "@/styles/Category";
import {
  CheckboxContainer,
  FilterOption,
  FilterSection,
  StyledCheckbox,
} from "@/styles/Category/Options";
import { HiddenCheckbox } from "@/styles/Category/SwitchButton";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const priceOptions = [
  { min: 0, max: 20000 },
  { min: 20000, max: 30000 },
  { min: 30000, max: 40000 },
  { min: 40000, max: 50000 },
  { min: 50000, max: 0 },
];

interface PriceProps {
  dispatch: React.Dispatch<{
    type: string;
    payload: string | { min: number; max: number };
  }>;
  prices: {
    min: number;
    max: number;
  }[];
}

const Price: React.FC<PriceProps> = ({ dispatch, prices }) => {
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(false);

  return (
    <FilterSection>
      <Header onClick={() => setIsPriceOpen((prev) => !prev)}>
        Peşin Fiyat {isPriceOpen ? <FaAngleDown /> : <FaAngleRight />}
      </Header>
      {isPriceOpen && (
        <div>
          {priceOptions.map((item, index) => {
            console.log(item);
            return (
              <FilterOption
                key={index}
                onClick={() => dispatch({ type: "PRICE", payload: item })}
              >
                <CheckboxContainer>
                  <HiddenCheckbox />
                  <StyledCheckbox checked={prices.includes(item)} />
                </CheckboxContainer>
                {item.min} - {item.max !== 0 ? item.max : "Üzeri"} TL
              </FilterOption>
            );
          })}
        </div>
      )}
    </FilterSection>
  );
};

export default Price;
