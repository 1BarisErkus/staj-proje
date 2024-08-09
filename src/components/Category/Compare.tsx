import { FC } from "react";
import Image from "next/image";
import { CompareItemProps } from "@/common/types";
import { Container, Row } from "@/styles/GlobalVariables";
import {
  CompareContainer,
  CompareItem,
  CompareButton,
  ClearButton,
  StyledRow,
  CloseButton,
} from "@/styles/Category/Filter";

type CompareBarProps = {
  items: Array<CompareItemProps | null>;
  onClear: () => void;
  onClearItem: (item: CompareItemProps) => void;
  onCompare: () => void;
};

const CompareBar: FC<CompareBarProps> = ({
  items,
  onClear,
  onClearItem,
  onCompare,
}) => {
  return (
    <CompareContainer>
      <Container>
        <StyledRow>
          {items.map((item, index) => (
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
                <CloseButton onClick={() => onClearItem(item)}>X</CloseButton>
              )}
            </CompareItem>
          ))}
          <div>
            <ClearButton onClick={onClear}>Temizle</ClearButton>
            <CompareButton onClick={onCompare}>Karşılaştır</CompareButton>
          </div>
        </StyledRow>
      </Container>
    </CompareContainer>
  );
};

export default CompareBar;
