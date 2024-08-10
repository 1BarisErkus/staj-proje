import { FC, useState } from "react";
import { SectionProps } from "@/lib/types";
import Section from "../../Section";
import CategoryList from "./CategoryList";
import CardList from "./CardList";

const BestSellers: FC<SectionProps> = ({ title, data, favorites }) => {
  const [activeCategory, setActiveCategory] = useState("Cep Telefonu-Aksesuar");
  const filteredData = data.filter(
    (product) => product.category === activeCategory
  );

  return (
    <Section title={title} id="bestSellers">
      <CategoryList
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <CardList filteredData={filteredData} favorites={favorites} />
    </Section>
  );
};

export default BestSellers;
