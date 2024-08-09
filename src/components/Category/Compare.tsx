import Image from "next/image";
import { useRouter } from "next/router";
import { notify } from "@/lib/notify";
import { useCompareStore } from "@/zustand/useCompareStore";
import { Container } from "@/styles/GlobalVariables";
import {
  CompareContainer,
  CompareItem,
  CompareButton,
  ClearButton,
  StyledRow,
  CloseButton,
} from "@/styles/Category/Filter";

const CompareBar = () => {
  const router = useRouter();

  const { compareItems, clearCompareItems, removeCompareItem } =
    useCompareStore();

  const handleCompare = () => {
    const itemsToCompare = compareItems
      .filter((item) => item !== null)
      .map((item) => item?.productId);

    if (itemsToCompare.length < 2) {
      notify("Karşılaştırma için en az 2 ürün seçmelisiniz.", "error");
      return;
    }

    router.push({
      pathname: "/compare",
      query: {
        items: JSON.stringify(itemsToCompare),
      },
    });
  };

  return (
    <CompareContainer>
      <Container>
        <StyledRow>
          {compareItems.map((item, index) => (
            <CompareItem key={index}>
              <Image
                src={
                  item
                    ? `/images/products/${item?.image}`
                    : "/images/def_tel.webp"
                }
                alt="Ürün"
                width={item ? 60 : 30}
                height={50}
              />
              <p>{item ? item.name : `Listeden bir cihaz seçin`}</p>
              {item && (
                <CloseButton onClick={() => removeCompareItem(item.productId)}>
                  X
                </CloseButton>
              )}
            </CompareItem>
          ))}
          <div>
            <ClearButton onClick={clearCompareItems}>Temizle</ClearButton>
            <CompareButton onClick={handleCompare}>Karşılaştır</CompareButton>
          </div>
        </StyledRow>
      </Container>
    </CompareContainer>
  );
};

export default CompareBar;
