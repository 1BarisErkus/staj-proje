import {
  CheckboxContainer,
  FilterOption,
  FilterSection,
  SearchInput,
  StyledCheckbox,
} from "@/styles/Category/Options";
import React, { useState } from "react";
import { HiddenCheckbox } from "@/styles/Category/SwitchButton";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Header } from "@/styles/Category";

const sellers = ["Vatan Bilgisayar", "Hepsiburada", "Trendyol", "Amazon"];

const Sellers = () => {
  const [isSellerOpen, setIsSellerOpen] = useState<boolean>(false);

  return (
    <FilterSection>
      <Header>
        Satıcılar {isSellerOpen ? <FaAngleDown /> : <FaAngleRight />}
      </Header>
      {isSellerOpen && (
        <div>
          <SearchInput type="text" placeholder="Ara" />
          {sellers.map((seller, index) => (
            <FilterOption key={index}>
              <CheckboxContainer>
                <HiddenCheckbox />
                <StyledCheckbox checked={false} />
              </CheckboxContainer>
              {seller}
            </FilterOption>
          ))}
        </div>
      )}
    </FilterSection>
  );
};

export default Sellers;
