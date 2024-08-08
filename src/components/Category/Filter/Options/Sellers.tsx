import { FC, Dispatch, useEffect, useState } from "react";
import {
  CheckboxContainer,
  FilterOption,
  FilterSection,
  SearchInput,
  StyledCheckbox,
} from "@/styles/Category/Options";
import { HiddenCheckbox } from "@/styles/Category/SwitchButton";
import { Header } from "@/styles/Category";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

type SellersProps = {
  dispatch: Dispatch<{ type: string; payload: string }>;
  sellers: string[];
  sellerOptions: string[];
};

const Sellers: FC<SellersProps> = ({ dispatch, sellers, sellerOptions }) => {
  const [isSellerOpen, setIsSellerOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [filteredSellerOptions, setFilteredSellerOptions] =
    useState<string[]>(sellerOptions);

  useEffect(() => {
    if (search) {
      setFilteredSellerOptions(
        sellerOptions.filter((item) =>
          item.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilteredSellerOptions(sellerOptions);
    }
  }, [search, sellerOptions]);

  return (
    <FilterSection>
      <Header onClick={() => setIsSellerOpen((prev) => !prev)}>
        Satıcılar {isSellerOpen ? <FaAngleDown /> : <FaAngleRight />}
      </Header>
      {isSellerOpen && (
        <div>
          <SearchInput
            type="text"
            placeholder="Ara"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {filteredSellerOptions.map((item, index) => (
            <FilterOption
              key={index}
              onClick={() => dispatch({ type: "SELLERS", payload: item })}
            >
              <CheckboxContainer>
                <HiddenCheckbox />
                <StyledCheckbox checked={sellers.includes(item)} />
              </CheckboxContainer>
              {item}
            </FilterOption>
          ))}
        </div>
      )}
    </FilterSection>
  );
};

export default Sellers;
