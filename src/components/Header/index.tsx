import Menu from "./Menu";
import Navbar from "./Navbar";
import Top from "./Top";
import { MainWrapper } from "@/styles/Header";

const Header = () => {
  return (
    <MainWrapper>
      <Top />
      <Navbar />
      <Menu />
    </MainWrapper>
  );
};

export default Header;
