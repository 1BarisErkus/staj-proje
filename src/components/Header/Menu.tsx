import { useState } from "react";
import { useRouter } from "next/router";
import {
  MenuContainer,
  MenuItem,
  SubmenuContainer,
  SubmenuItem,
} from "@/styles/Header/Menu";
import { menuItems } from "@/lib/menuItems";

type MenuItemProps = {
  title: string;
  href?: string;
  subItems?: { title: string; href: string }[];
};

const Menu = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const router = useRouter();

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
