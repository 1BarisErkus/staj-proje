import { MainWrapper } from "@/styles/Header";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Top from "./Top";

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
