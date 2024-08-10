import { useState } from "react";
import { useRouter } from "next/router";
import {
  MenuContainer,
  MenuItem,
  SubmenuContainer,
  SubmenuItem,
} from "@/styles/Header/Menu";

type MenuItemProps = {
  title: string;
  href?: string;
  subItems?: { title: string; href: string }[];
};

const Menu = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const router = useRouter();

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
      href: "/category/computer-tablet",
    },
    {
      title: "Elektrikli Ev Aletleri",
      href: "/category/electrical",
    },
    {
      title: "Beyaz Eşya",
      href: "/category/white-goods",
    },
    {
      title: "Sağlık-Kişisel Bakım",
      href: "/category/health-personal-care",
    },
    {
      title: "Hobi-Oyun",
      href: "/category/hobby-game",
    },
    {
      title: "TV-Ses Sistemleri",
      href: "/category/tv-audio",
    },
    {
      title: "Ev-Yaşam",
      href: "/category/home-living",
    },
    {
      title: "Anne-Bebek-Oyuncak",
      href: "/category/mom-baby-toys",
    },
  ];

  const handleMenuClick = (item: MenuItemProps, index: number) => {
    if (item.href) router.push(item.href);
    else setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <MenuContainer>
      {menuItems.map((item, index) => (
        <div key={index}>
          <MenuItem onClick={() => handleMenuClick(item, index)}>
            {item.title}
          </MenuItem>
          {openMenuIndex === index && item.subItems && (
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
