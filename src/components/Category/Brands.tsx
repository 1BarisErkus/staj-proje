import React, { useState } from "react";
import {
  CheckboxContainer,
  FilterOption,
  FilterSection,
  HiddenCheckbox,
  StyledCheckbox,
} from "@/styles/Category/Options";
import { Header } from "@/styles/Category";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const brandItems = ["Apple", "Samsung", "Huawei", "Xiaomi", "OnePlus"];

const Brands = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(true);

  return (
    <FilterSection>
      <Header>
        Markalar {isBrandOpen ? <FaAngleDown /> : <FaAngleRight />}
      </Header>
      {isBrandOpen && (
        <div>
          {brandItems.map((brand, index) => (
            <FilterOption key={index}>
              <CheckboxContainer>
                <HiddenCheckbox />
                <StyledCheckbox checked={false} />
              </CheckboxContainer>
              {brand}
            </FilterOption>
          ))}
        </div>
      )}
    </FilterSection>
  );
};

export default Brands;
