import Image from "next/image";
import Section from "../Section";
import { Item, Title, Wrapper } from "@/styles/HomePage/PopularCategories";

const popularCategories = [
  {
    title: "Hediye Çeklerim",
    image: "hediye-ceki-icon.webp",
  },
  {
    title: "En Çok Favorilenenler",
    image: "fav.webp",
  },
  {
    title: "Fırsatlar Kapısı",
    image: "firsat-kapisi2-164x164.webp",
  },
  {
    title: "Çok Satanlar",
    image: "coksatan2.webp",
  },
  {
    title: "Kulaklıklar",
    image: "kulaklim2.webp",
  },
  {
    title: "Apple Telefonlar",
    image: "iostelefon2.webp",
  },
  {
    title: "Powerbank",
    image: "powerbank3.webp",
  },
  {
    title: "Kahve Makineleri",
    image: "kahvemakinasi2.webp",
  },
  {
    title: "Apple Tabletler",
    image: "tablet7.webp",
  },
  {
    title: "Bilgisayarlar",
    image: "bilgisayar7.webp",
  },
];

const PopularCategories = () => {
  return (
    <Section title="Popüler Kategoriler">
      <Wrapper>
        {popularCategories.map((category, index) => (
          <Item key={index} href="#">
            <Image
              src={`/images/popularCategories/${category.image}`}
              alt={category.title}
              width={82}
              height={82}
              priority
            />
            <Title>{category.title}</Title>
          </Item>
        ))}
      </Wrapper>
    </Section>
  );
};

export default PopularCategories;
