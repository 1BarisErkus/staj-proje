import { FC, Dispatch, useState } from "react";
import { FilterAction } from "@/lib/types";
import { Container, Header, Icon, Item } from "@/styles/Category";
import { RadioButton } from "@/styles/Category/SwitchButton";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const sortOptions = [
  "En Popüler",
  "En Yeniler",
  "En Düşük Fiyat",
  "En Yüksek Fiyat",
  "En Yüksek Puan",
];

interface SortByProps {
  sortValue: string;
  dispatch: Dispatch<FilterAction>;
}

const SortBy: FC<SortByProps> = ({ sortValue, dispatch }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SORT_BY", payload: event.target.value });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <Header onClick={toggleExpand}>
        Sırala
        <Icon>{isExpanded ? <FaAngleDown /> : <FaAngleRight />}</Icon>
      </Header>
      {isExpanded &&
        sortOptions.map((option) => (
          <Item $active={option === sortValue} key={option}>
            <label>
              <RadioButton
                value={option}
                checked={sortValue === option}
                onChange={handleChange}
              />
              {option}
            </label>
          </Item>
        ))}
    </Container>
  );
};

export default SortBy;
