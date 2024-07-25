import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "@/styles/Header/Navbar/Search";
import { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import SearchModal from "./SearchModal";

const Search = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleInputClick = () => {
    setModalOpen(true);
  };

  const handleClickOutside: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside as unknown as EventListener
      );
    } else {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as unknown as EventListener
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as unknown as EventListener
      );
    };
  }, [isModalOpen]);

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
        />
      </SearchContainer>
      {isModalOpen && (
        <SearchModal
          handleClickOutside={handleClickOutside}
          modalRef={modalRef}
        />
      )}
    </>
  );
};

export default Search;
