import { MouseEventHandler, useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/server/product";
import { Product } from "@/common/types";
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "@/styles/Header/Navbar/Search";
import SearchModal from "./SearchModal";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const [text, setText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    if (text.length === 0) {
      setFilteredProducts([]);
      setModalOpen(false);
    }

    if (products && text.length > 0) {
      setFilteredProducts(
        products.filter((product: Product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  }, [text, products]);

  const handleInputClick = () => {
    setModalOpen(true);
  };

  const handleClickOutside: MouseEventHandler<HTMLDivElement> = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModalOpen(false);
    }
  };

  return (
    <>
      <SearchContainer>
        <SearchIcon>
          <CiSearch />
        </SearchIcon>
        <SearchInput
          type="text"
          placeholder="Ürün, marka veya kategori ara"
          onClick={handleInputClick}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </SearchContainer>
      {isModalOpen && (
        <SearchModal
          handleClickOutside={handleClickOutside}
          modalRef={modalRef}
          filteredProducts={filteredProducts}
        />
      )}
    </>
  );
};

export default Search;
