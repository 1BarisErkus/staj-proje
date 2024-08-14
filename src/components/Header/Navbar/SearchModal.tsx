import { FC, MouseEventHandler, RefObject } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "@/server/product";
import { Product } from "@/lib/types";
import {
  ModalContent,
  Overlay,
  SearchModalWrapper,
} from "@/styles/Header/Navbar/SearchModal";
import Card from "@/components/Card";

type SearchModalProps = {
  handleClickOutside: MouseEventHandler<HTMLDivElement>;
  modalRef: RefObject<HTMLDivElement>;
  filteredProducts: Product[];
};

const SearchModal: FC<SearchModalProps> = ({
  handleClickOutside,
  modalRef,
  filteredProducts,
}) => {
  const session = useSession();

  const { data: favorites } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => getFavorites((session.data?.user as { uid: string })?.uid),
    enabled: !!session.data?.user,
  });

  return (
    <>
      <Overlay onClick={handleClickOutside} />
      <SearchModalWrapper ref={modalRef}>
        <ModalContent>
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              badges={product.badges}
              discountPercentage={product.discountPercentage}
              images={product.images}
              isFavorite={favorites?.includes(product.id)}
              size="small"
              rating={product.rating}
            />
          ))}
        </ModalContent>
      </SearchModalWrapper>
    </>
  );
};

export default SearchModal;
