import Image from "next/image";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import {
  Button,
  CartBadge,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "@/styles/Header";

import { CiSearch } from "react-icons/ci";
import { IoPersonCircleOutline, IoChevronDownSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  return (
    <Container>
      <Row>
        <Col size={2}>
          <Image
            src="/images/pasaj-logo-new.webp"
            alt="Pasaj Logo"
            width={116}
            height={40}
            priority
          />
        </Col>
        <Col size={6}>
          <SearchContainer>
            <SearchIcon>
              <CiSearch />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Ürün, marka veya kategori ara"
            />
          </SearchContainer>
        </Col>
        <Col size={2}>
          <Button withicon border>
            <span>
              <IoPersonCircleOutline size={24} />
            </span>
            Giriş Yap
            <span>
              <IoChevronDownSharp size={24} />
            </span>
          </Button>
        </Col>
        <Col size={2}>
          <Button primary withicon>
            <span>
              <BsCart4 size={24} />
            </span>
            Sepet
            <CartBadge>0</CartBadge>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
