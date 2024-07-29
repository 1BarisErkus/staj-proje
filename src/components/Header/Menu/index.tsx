import { MenuContainer, MenuItem } from "@/styles/Header/Menu";

const Menu = () => {
  const menuItems = [
    "Cep Telefonu-Aksesuar",
    "Bilgisayar-Tablet",
    "Elektrikli Ev Aletleri",
    "Beyaz Eşya",
    "Sağlık-Kişisel Bakım",
    "Hobi-Oyun",
    "TV-Ses Sistemleri",
    "Ev-Yaşam",
    "Anne-Bebek-Oyuncak",
  ];

  return (
    <MenuContainer>
      {menuItems.map((item, index) => (
        <MenuItem key={index} href="/category/phone-accessories/apple">
          {item}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
