import React, { useState } from "react";
import {
  FilterSection,
  FilterOption,
  SearchInput,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from "@/styles/Category/Options";
import { Container, Header } from "@/styles/Category";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import ColorOption from "../ColorOption";

const prices = [
  "0 - 20000 TL (18)",
  "20000 - 30000 TL (8)",
  "30000 - 40000 TL (5)",
  "40000 - 50000 TL (4)",
  "50000 TL ve üzeri (26)",
];

const brands = ["Apple", "Samsung", "Huawei", "Xiaomi", "OnePlus"];

export const filterColors = [
  "black",
  "white",
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "darkblue",
];

const sellers = ["Vatan Bilgisayar", "Hepsiburada", "Trendyol", "Amazon"];

const FilterComponent: React.FC = () => {
  const [isBrandOpen, setIsBrandOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isSellerOpen, setIsSellerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [isColorOpen, setIsColorOpen] = useState<boolean>(false);

  const toggleSection = (
    setSectionOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setSectionOpen((prev) => !prev);
  };

  const handleCheckboxChange = (item: string) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <Container>
      <FilterSection>
        <Header onClick={() => toggleSection(setIsBrandOpen)}>
          Markalar {isBrandOpen ? <FaAngleDown /> : <FaAngleRight />}
        </Header>
        {isBrandOpen && (
          <div>
            {brands.map((brand, index) => (
              <FilterOption key={index}>
                <CheckboxContainer>
                  <HiddenCheckbox
                    checked={checkedItems[brand]}
                    onChange={() => handleCheckboxChange(brand)}
                  />
                  <StyledCheckbox checked={checkedItems[brand]} />
                </CheckboxContainer>
                {brand}
              </FilterOption>
            ))}
          </div>
        )}
      </FilterSection>

      <FilterSection>
        <Header onClick={() => toggleSection(setIsColorOpen)}>
          Renkler {isColorOpen ? <FaAngleDown /> : <FaAngleRight />}
        </Header>
        {isColorOpen && (
          <div>
            {filterColors.map((color) => (
              <ColorOption key={color} color={color} selected={false} />
            ))}
          </div>
        )}
      </FilterSection>

      <FilterSection>
        <Header onClick={() => toggleSection(setIsPriceOpen)}>
          Peşin Fiyat {isPriceOpen ? <FaAngleDown /> : <FaAngleRight />}
        </Header>
        {isPriceOpen && (
          <div>
            {prices.map((price, index) => (
              <FilterOption key={index}>
                <CheckboxContainer>
                  <HiddenCheckbox
                    checked={checkedItems[price]}
                    onChange={() => handleCheckboxChange(price)}
                  />
                  <StyledCheckbox checked={checkedItems[price]} />
                </CheckboxContainer>
                {price}
              </FilterOption>
            ))}
          </div>
        )}
      </FilterSection>

      <FilterSection>
        <Header onClick={() => toggleSection(setIsSellerOpen)}>
          Satıcılar {isSellerOpen ? <FaAngleDown /> : <FaAngleRight />}
        </Header>
        {isSellerOpen && (
          <div>
            <SearchInput
              type="text"
              placeholder="Ara"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {sellers.map((seller, index) => (
              <FilterOption key={index}>
                <CheckboxContainer>
                  <HiddenCheckbox
                    checked={checkedItems[seller]}
                    onChange={() => handleCheckboxChange(seller)}
                  />
                  <StyledCheckbox checked={checkedItems[seller]} />
                </CheckboxContainer>
                {seller}
              </FilterOption>
            ))}
          </div>
        )}
      </FilterSection>
    </Container>
  );
};

export default FilterComponent;
