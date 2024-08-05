import React, { useState } from "react";
import {
  MenuContainer,
  MenuItem,
  SubmenuContainer,
  SubmenuItem,
} from "@/styles/Header/Menu";

const Menu = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const menuItems = [
    {
      title: "Cep Telefonu-Aksesuar",
      subItems: [
        {
          title: "Tüm Cep Telefonları ve Aksesuarları",
          href: "/category/phone-accessories",
        },
        {
          title: "Apple Telefonlar",
          href: "/category/phone-accessories/apple-phones",
        },
        {
          title: "Android Telefonlar",
          href: "/category/phone-accessories/android-phones",
        },
        {
          title: "Giyinebilir Teknolojiler",
          href: "/category/phone-accessories/wearable-technologies",
        },
        {
          title: "Aksesuarlar",
          href: "/category/phone-accessories/accessories",
        },
      ],
    },
    {
      title: "Bilgisayar-Tablet",
      subItems: [
        {
          title: "Tüm Bilgisayar ve Tabletler",
          href: "/category/computer-tablet",
        },
        {
          title: "Dizüstü Bilgisayarlar",
          href: "/category/computer-tablet/laptops",
        },
      ],
    },
    {
      title: "Elektrikli Ev Aletleri",
      subItems: [
        {
          title: "Tüm Elektrikli Ev Aletleri",
          href: "/category/electrical",
        },
      ],
    },
    {
      title: "Beyaz Eşya",
      subItems: [
        {
          title: "Tüm Beyaz Eşyalar",
          href: "/category/white-goods",
        },
        {
          title: "Isıtma ve Soğutma Sistemleri",
          href: "/category/white-goods/heating-cooling-systems",
        },
      ],
    },
    {
      title: "Sağlık-Kişisel Bakım",
      subItems: [
        {
          title: "Tüm Sağlık-Kişisel Bakım Ürünleri",
          href: "/category/health-personal-care",
        },
      ],
    },
    {
      title: "Hobi-Oyun",
      subItems: [
        {
          title: "Tüm Hobi-Oyun Ürünleri",
          href: "/category/hobby-game",
        },
        {
          title: "Scooterlar ve Bisikletler",
          href: "/category/hobby-game/scooters-bicycles",
        },
      ],
    },
    {
      title: "TV-Ses Sistemleri",
      subItems: [
        {
          title: "Tüm TV-Ses Sistemleri",
          href: "/category/tv-audio",
        },
      ],
    },
    {
      title: "Ev-Yaşam",
      subItems: [
        {
          title: "Tüm Ev-Yaşam Ürünleri",
          href: "/category/home-living",
        },
      ],
    },
    {
      title: "Anne-Bebek-Oyuncak",
      subItems: [
        {
          title: "Tüm Anne-Bebek-Oyuncak Ürünleri",
          href: "/category/mom-baby-toys",
        },
      ],
    },
  ];

  const handleMenuClick = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <MenuContainer>
      {menuItems.map((item, index) => (
        <div key={index}>
          <MenuItem onClick={() => handleMenuClick(index)}>
            {item.title}
          </MenuItem>
          {openMenuIndex === index && (
            <SubmenuContainer>
              {item.subItems.map((subItem, subIndex) => (
                <SubmenuItem
                  key={subIndex}
                  href={subItem.href}
                  onClick={() => setOpenMenuIndex(null)}
                >
                  {subItem.title}
                </SubmenuItem>
              ))}
            </SubmenuContainer>
          )}
        </div>
      ))}
    </MenuContainer>
  );
};

export default Menu;
