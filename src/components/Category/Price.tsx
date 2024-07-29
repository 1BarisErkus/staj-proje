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

const prices = [
  "0 - 20000 TL (18)",
  "20000 - 30000 TL (8)",
  "30000 - 40000 TL (5)",
  "40000 - 50000 TL (4)",
  "50000 TL ve üzeri (26)",
];

const Price = () => {
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(false);

  return (
    <FilterSection>
      <Header>
        Peşin Fiyat {isPriceOpen ? <FaAngleDown /> : <FaAngleRight />}
      </Header>
      {isPriceOpen && (
        <div>
          {prices.map((price, index) => (
            <FilterOption key={index}>
              <CheckboxContainer>
                <HiddenCheckbox />
                <StyledCheckbox checked={false} />
              </CheckboxContainer>
              {price}
            </FilterOption>
          ))}
        </div>
      )}
    </FilterSection>
  );
};

export default Price;
