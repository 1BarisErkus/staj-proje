import { MenuContainer, MenuItem } from "@/styles/Header";

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
        <MenuItem key={index}>{item}</MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
