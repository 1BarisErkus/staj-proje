import Image from "next/image";
import Section from "../Section";
import { Item, Title, Wrapper } from "@/styles/HomePage/PopularCategories";

const popularCategories = [
  {
    title: "Hediye Çeklerim",
    image: "hediye-ceki-icon.webp",
    href: "#",
  },
  {
    title: "En Çok Favorilenenler",
    image: "fav.webp",
    href: "#",
  },
  {
    title: "Fırsatlar Kapısı",
    image: "firsat-kapisi2-164x164.webp",
    href: "#campaigns",
  },
  {
    title: "Çok Satanlar",
    image: "coksatan2.webp",
    href: "#bestSellers",
  },
  {
    title: "Kulaklıklar",
    image: "kulaklim2.webp",
    href: "/category/phone-accessories/accessories",
  },
  {
    title: "Apple Telefonlar",
    image: "iostelefon2.webp",
    href: "/category/phone-accessories/apple-phones",
  },
  {
    title: "Powerbank",
    image: "powerbank3.webp",
    href: "/category/phone-accessories/accessories",
  },
  {
    title: "Kahve Makineleri",
    image: "kahvemakinasi2.webp",
    href: "/category/electrical",
  },
  {
    title: "Apple Tabletler",
    image: "tablet7.webp",
    href: "#",
  },
  {
    title: "Bilgisayarlar",
    image: "bilgisayar7.webp",
    href: "/category/computer-tablet",
  },
];

const PopularCategories = () => {
  return (
    <Section title="Popüler Kategoriler">
      <Wrapper>
        {popularCategories.map((category, index) => (
          <Item key={index} href={category.href}>
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
