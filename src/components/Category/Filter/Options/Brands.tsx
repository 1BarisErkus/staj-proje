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
import { capitalizeFirstLetter } from "@/lib/helpers";

interface BrandsProps {
  dispatch: any;
  brands: string[];
  brandOptions: string[];
}

const Brands: React.FC<BrandsProps> = ({ dispatch, brands, brandOptions }) => {
  const [isBrandOpen, setIsBrandOpen] = useState(true);

  return (
    <FilterSection>
      <Header onClick={() => setIsBrandOpen((prev) => !prev)}>
        Markalar {isBrandOpen ? <FaAngleDown /> : <FaAngleRight />}
      </Header>
      {isBrandOpen && (
        <div>
          {brandOptions.map((brand, index) => (
            <FilterOption
              key={index}
              onClick={() =>
                dispatch({ type: "BRANDS", payload: brand.toLowerCase() })
              }
            >
              <CheckboxContainer>
                <HiddenCheckbox />
                <StyledCheckbox
                  checked={brands.includes(brand.toLowerCase())}
                />
              </CheckboxContainer>
              {capitalizeFirstLetter(brand)}
            </FilterOption>
          ))}
        </div>
      )}
    </FilterSection>
  );
};

export default Brands;
